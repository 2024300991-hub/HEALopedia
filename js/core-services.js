// Core Services page rendering and search.

const TAB_CONFIG = {
    medical: {
        label: 'Medical Terms',
        data: () => medicalTerms,
        title: item => item.word,
        detailType: 'medical'
    },
    symptoms: {
        label: 'Health Symptoms',
        data: () => [
            ...healthCommonSymptoms.map(item => ({ ...item, symptomType: 'common' })),
            ...healthRareSymptoms.map(item => ({ ...item, symptomType: 'rare' }))
        ],
        title: item => item.name,
        detailType: item => item.symptomType || 'common'
    },
    medicine: {
        label: 'Medicine',
        data: () => medicines,
        title: item => item.genericName,
        detailType: 'medicine'
    }
};

let currentTab = 'medical';
let currentLetter = 'A';
let _searchIndex = null;

document.addEventListener('DOMContentLoaded', async () => {
    const main = document.getElementById('main-content');

    try {
        if (main) {
            main.innerHTML = '<div class="white-box">Loading...</div>';
        }

        await loadDatabase();

        initSearch('main-search', 'search-dropdown');
        initSearch('main-search-mobile', 'search-dropdown-mobile');

        const params = new URLSearchParams(window.location.search);
        const initialTab = TAB_CONFIG[params.get('tab')]
            ? params.get('tab')
            : 'medical';

        loadTab(initialTab);
    } catch (error) {
        console.error('Core services failed:', error);

        if (main) {
            main.innerHTML = `
                <div class="white-box">
                    <h2>Database Error</h2>
                    <p>Failed to load data from Google Sheets.</p>
                </div>
            `;
        }
    }
});

function loadTab(tab, event) {
    if (event) {
        event.preventDefault();
    }

    if (!TAB_CONFIG[tab]) return;

    currentTab = tab;
    currentLetter = getFirstAvailableLetter(tab);
    _searchIndex = null;

    setActiveTab(tab);
    renderCurrentTab();
}

function setActiveTab(tab) {
    document.querySelectorAll('.main-tabs a').forEach(link => {
        const onclick = link.getAttribute('onclick') || '';
        link.classList.toggle('active', onclick.includes(`'${tab}'`));
    });
}

function renderCurrentTab() {
    const main = document.getElementById('main-content');
    const config = TAB_CONFIG[currentTab];
    const items = getSortedItems(config.data(), config.title);
    const letters = getAvailableLetters(items, config.title);
    const visibleItems = items.filter(item =>
        getInitial(config.title(item)) === currentLetter
    );

    if (!main) return;

    main.innerHTML = `
        ${renderAlphabetSelector(letters)}
        <div class="white-box">
            ${visibleItems.length
                ? visibleItems.map(item => renderEntry(item, config)).join('')
                : '<p>No entries found for this letter.</p>'}
        </div>
    `;
}

function renderAlphabetSelector(letters) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return `
        <div class="alphabet-selector">
            ${alphabet.map(letter => `
                <button
                    type="button"
                    class="alpha-btn ${letter === currentLetter ? 'active-letter' : ''}"
                    ${letters.includes(letter) ? '' : 'disabled'}
                    onclick="selectLetter('${letter}')"
                >
                    ${letter}
                </button>
            `).join('')}
        </div>
    `;
}

function selectLetter(letter) {
    currentLetter = letter;
    renderCurrentTab();
}

function renderEntry(item, config) {
    if (currentTab === 'medical') {
        return renderMedicalEntry(item);
    }

    return renderCardEntry(item, config);
}

function renderMedicalEntry(item) {
    const name = item.word || '';

    return `
        <p class="medical-entry">
            <strong>${escapeHTML(name)}</strong>:
            ${escapeHTML(item.definition || '')}
        </p>
    `;
}

function renderCardEntry(item, config) {
    const name = config.title(item) || '';
    const type = typeof config.detailType === 'function'
        ? config.detailType(item)
        : config.detailType;
    const url = `detail.html?type=${type}&name=${encodeURIComponent(name)}`;

    return `
        <article class="entry-card">
            <img
                class="entry-img"
                src="${escapeHTML(item.image || '../assets/placeholder.png')}"
                onerror="this.src='../assets/placeholder.png'"
                alt="${escapeHTML(name)}"
            >
            <div class="entry-content">
                <h2>${escapeHTML(name)}</h2>
                ${renderEntryMeta(item)}
                <a class="view-detail-btn" href="${url}">View details</a>
            </div>
        </article>
    `;
}

function openEntryFromKeyboard(event, url) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = url;
    }
}

function renderEntryMeta(item) {

    // =========================
    // MEDICINES
    // =========================
    if (currentTab === 'medicine') {

        // Create short snippet
        const shortDescription =
            String(item.description || '')
                .split('.')
                .slice(0, 1)
                .join('.') + '.';

        return `
            <div class="entry-meta">

                <p>
                    <strong>Drug Class:</strong>
                    ${escapeHTML(item.drugClass || 'Not listed')}
                </p>

                <p>
                    <strong>Uses:</strong>
                    ${escapeHTML(
                        toList(item.uses)
                            .slice(0, 2)
                            .join(', ') || 'Not listed'
                    )}
                </p>

                <p class="entry-snippet">
                    ${escapeHTML(shortDescription)}
                </p>

            </div>
        `;
    }

    // =========================
    // SYMPTOMS
    // =========================
    return `
        <div class="entry-meta">

            <p>
                <strong>Definition:</strong>
                ${escapeHTML(item.definition || '')}
            </p>

            <p class="entry-snippet">
                ${
                    escapeHTML(
                        String(item.information || '')
                            .replace(/\n/g, ' ')
                            .slice(0, 180)
                    )
                }...
            </p>

        </div>
    `;
}

function getSortedItems(items, titleFn) {
    return [...items].sort((a, b) =>
        (titleFn(a) || '').localeCompare(titleFn(b) || '')
    );
}

function getAvailableLetters(items, titleFn) {
    return [...new Set(items
        .map(item => getInitial(titleFn(item)))
        .filter(Boolean)
    )];
}

function getFirstAvailableLetter(tab) {
    const config = TAB_CONFIG[tab];
    const letters = getAvailableLetters(
        getSortedItems(config.data(), config.title),
        config.title
    );

    return letters[0] || 'A';
}

function getInitial(value) {
    const match = String(value || '').trim().match(/[A-Za-z]/);
    return match ? match[0].toUpperCase() : '';
}

function buildSearchIndex() {
    const index = [];

    medicalTerms.forEach(item => {
        if (item && item.word) {
            index.push({
                type: 'medical',
                label: 'Medical Term',
                name: item.word
            });
        }
    });

    healthCommonSymptoms.forEach(item => {
        if (item && item.name) {
            index.push({
                type: 'common',
                label: 'Common Symptom',
                name: item.name
            });
        }
    });

    healthRareSymptoms.forEach(item => {
        if (item && item.name) {
            index.push({
                type: 'rare',
                label: 'Rare Symptom',
                name: item.name
            });
        }
    });

    medicines.forEach(item => {
        if (item && item.genericName) {
            index.push({
                type: 'medicine',
                label: 'Medicine',
                name: item.genericName
            });
        }
    });

    return index;
}

function getSearchIndex() {
    if (!_searchIndex) {
        _searchIndex = buildSearchIndex();
    }

    return _searchIndex;
}

function initSearch(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);

    if (!input || !dropdown) return;

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();

        if (q.length < 1) {
            dropdown.classList.add('hidden');
            dropdown.innerHTML = '';
            return;
        }

        const results = getSearchIndex()
            .filter(item =>
                item.name &&
                item.name.toLowerCase().includes(q)
            )
            .slice(0, 30);

        renderDropdown(results, dropdown);
    });

    document.addEventListener('click', e => {
        if (
            !input.contains(e.target) &&
            !dropdown.contains(e.target)
        ) {
            dropdown.classList.add('hidden');
        }
    });

    input.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            dropdown.classList.add('hidden');
            input.blur();
        }
    });
}

function renderDropdown(results, dropdown) {
    if (results.length === 0) {
        dropdown.innerHTML = `
            <div class="search-no-results">
                No results found.
            </div>
        `;

        dropdown.classList.remove('hidden');

        return;
    }

    const groups = {
        medical: [],
        common: [],
        rare: [],
        medicine: []
    };

    results.forEach(r => {
        if (groups[r.type]) {
            groups[r.type].push(r);
        }
    });

    const groupMeta = [
        {
            key: 'medical',
            label: 'Medical Terms',
            badgeClass: 'badge-medical'
        },
        {
            key: 'common',
            label: 'Common Symptoms',
            badgeClass: 'badge-common'
        },
        {
            key: 'rare',
            label: 'Rare Symptoms',
            badgeClass: 'badge-rare'
        },
        {
            key: 'medicine',
            label: 'Medicines',
            badgeClass: 'badge-medicine'
        }
    ];

    let html = '';

    groupMeta.forEach(({ key, label, badgeClass }) => {
        if (groups[key].length === 0) return;

        html += `
            <div class="search-group-label">${label}</div>
        `;

        groups[key].forEach(item => {
            const url = `detail.html?type=${key}&name=${encodeURIComponent(item.name)}`;

            html += `
                <a class="search-item" href="${url}">
                    <span class="search-item-badge ${badgeClass}">${item.label}</span>
                    <span class="search-item-name">${escapeHTML(item.name)}</span>
                    <span class="search-item-arrow">-&gt;</span>
                </a>
            `;
        });
    });

    dropdown.innerHTML = html;
    dropdown.classList.remove('hidden');
}

function toggleMobileMenu() {
    document
        .getElementById('mobile-menu')
        .classList
        .toggle('hidden');
}

function toList(value) {
    if (Array.isArray(value)) return value;
    if (!value) return [];

    const text = String(value);
    const separator = text.includes(';') ? ';' : ',';

    return text
        .split(separator)
        .map(item => item.trim())
        .filter(Boolean);
}

function formatDetails(text) {
    if (!text) return '';

    const normalized = String(text)
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\s*([•])\s*/g, '\n$1 ')
        .replace(/\s+(-|\*)\s+/g, '\n$1 ');

    const lines = normalized
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean);

    let html = '<div class="info-details">';
    let inList = false;

    lines.forEach(line => {
        const bulletMatch = line.match(/^[•*-]\s*(.+)$/);

        if (bulletMatch) {
            if (!inList) {
                html += '<ul>';
                inList = true;
            }

            html += `<li>${escapeHTML(bulletMatch[1])}</li>`;
            return;
        }

        if (inList) {
            html += '</ul>';
            inList = false;
        }

        html += `<p>${boldLabel(line)}</p>`;
    });

    if (inList) {
        html += '</ul>';
    }

    html += '</div>';
    return html;
}

function boldLabel(line) {
    const safeLine = escapeHTML(line);
    const match = safeLine.match(/^([^:]{2,40}):\s*(.+)$/);

    if (!match) {
        return safeLine;
    }

    return `<strong>${match[1]}:</strong> ${match[2]}`;
}

function escapeHTML(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
