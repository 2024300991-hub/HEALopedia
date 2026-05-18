window.onload = async () => {
    const main = document.getElementById('detail-main');

    try {
        await loadDatabase();

        const params = new URLSearchParams(window.location.search);

        const type = params.get('type');
        const name = decodeURIComponent(params.get('name') || '');

        if (!type || !name) {
            main.innerHTML = errorHTML(
                'No entry specified.',
                'Please go back and select an item.'
            );
            return;
        }

        let item = null;

        if (type === 'medical') {
            item = medicalTerms.find(i =>
                i &&
                i.word &&
                i.word === name
            );

            if (item) {
                document.title = `${item.word} – HEALopedia`;
                main.innerHTML = renderMedical(item);
                return;
            }
        }

        else if (type === 'common') {
            item = healthCommonSymptoms.find(i =>
                i &&
                i.name &&
                i.name === name
            );

            if (item) {
                document.title = `${item.name} – HEALopedia`;
                main.innerHTML = renderSymptom(item, 'common');
                return;
            }
        }

        else if (type === 'rare') {
            item = healthRareSymptoms.find(i =>
                i &&
                i.name &&
                i.name === name
            );

            if (item) {
                document.title = `${item.name} – HEALopedia`;
                main.innerHTML = renderSymptom(item, 'rare');
                return;
            }
        }
        
        else if (type === 'medicine') {
            item = medicines.find(i =>
                i &&
                i.genericName &&
                i.genericName === name
            );

            if (item) {
                document.title = `${item.genericName} – HEALopedia`;
                main.innerHTML = renderMedicine(item);
                return;
            }
        }

        main.innerHTML = errorHTML(
            'Entry not found.',
            `We couldn't find "${name}" in the database.`
        );

    } catch (error) {
        console.error('Detail page failed:', error);
        main.innerHTML = errorHTML(
            'Database Error',
            'Failed to load data from Google Sheets.'
        );
    }
};

function breadcrumb(label, tab, badgeClass) {
    return `
        <div class="detail-breadcrumb">
            <a href="core-services.html?tab=${tab}">
                ← Back to ${label}
            </a>
        </div>

        <div class="detail-badge ${badgeClass}">
            ${label}
        </div>
    `;
}

function renderMedical(item) {
    return `
        ${breadcrumb('Medical Terms', 'medical', 'badge-medical')}
        <div class="detail-medical">
            <h1>${item.word}</h1>
            <div class="definition">
                ${item.definition || ''}
            </div>
        </div>
    `;
}

function renderSymptom(item, type) {
    const isCommon = type === 'common';
    const label = isCommon
        ? 'Common Symptoms'
        : 'Rare Symptoms';

    const badgeCls = isCommon
        ? 'badge-common'
        : 'badge-rare';

    const tab = 'symptoms';
    const infoHTML = formatInfo(item.information);

    return `
        <div class="detail-breadcrumb">
            <a href="core-services.html?tab=${tab}">
                ← Back to Health Symptoms
            </a>
            <span>/</span>
            <span>${label}</span>

        </div>

        <div class="detail-badge ${badgeCls}">
            ${label}
        </div>

        <div class="detail-card">
            <div class="detail-card-header">
                <img
                    src="${item.image || '../assets/placeholder.png'}"
                    class="detail-card-img"
                    onerror="this.src='../assets/placeholder.png'"
                    alt="${item.name}"
                >
                <div class="detail-card-meta">
                    <h1>${item.name}</h1>
                    <div class="meta-row">
                        <span class="meta-label">
                            Definition:
                        </span>
                        <span>
                            ${item.definition || ''}
                        </span>
                    </div>
                </div>
            </div>
            <div class="detail-card-body">
                <div class="detail-section">
                    <h3>Information</h3>
                    ${infoHTML}
                </div>
            </div>
        </div>
    `;
}

function renderMedicine(item) {
    const usesHTML =
        item.uses && item.uses.length
            ? `
                <ul>
                    ${item.uses.map(u => `<li>${u}</li>`).join('')}
                </ul>
              `
            : '<p>No specific uses listed.</p>';

    const dosageHTML =
        item.dosageForms && item.dosageForms.length
            ? `
                <ul>
                    ${item.dosageForms.map(d => `<li>${d}</li>`).join('')}
                </ul>
              `
            : '<p>—</p>';

    const importantHTML =
        item.importantInformation
            ? `
                <div class="detail-section">
                    <h3>Important Information</h3>
                    <div class="important-box">
                        ${item.importantInformation}
                    </div>
                </div>
              `
            : '';

    return `
        <div class="detail-breadcrumb">
            <a href="core-services.html?tab=medicine">
                ← Back to Medicines
            </a>
        </div>
        <div class="detail-badge badge-medicine">
            Medicine
        </div>
        <div class="detail-card">
            <div class="detail-card-header">
                <img
                    src="${item.image || '../assets/placeholder.png'}"
                    class="detail-card-img"
                    onerror="this.src='../assets/placeholder.png'"
                    alt="${item.genericName}"
                >
                <div class="detail-card-meta">
                    <h1>${item.genericName}</h1>
                    <div class="meta-row">
                        <span class="meta-label">
                            Brand Names:
                        </span>
                        <span>
                            ${(item.brandNames || []).join(', ')}
                        </span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">
                            Drug Class:
                        </span>
                        <span>
                            ${item.drugClass || ''}
                        </span>
                    </div>
                </div>
            </div>
            <div class="detail-card-body">
                <div class="detail-section">
                    <h3>
                        What is ${item.genericName}?
                    </h3>
                    <p>
                        ${item.description || ''}
                    </p>
                </div>
                <div class="detail-section">
                    <h3>
                        What is it used for?
                    </h3>
                    ${usesHTML}
                </div>
                <div class="detail-section">
                    <h3>
                        Dosage Forms
                    </h3>
                    ${dosageHTML}
                </div>
                ${importantHTML}
            </div>
        </div>
    `;
}

function formatInfo(text) {
    if (!text) {
        return '<p>No additional information available.</p>';
    }

    const lines = String(text)
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\s*([•])\s*/g, '\n$1 ')
        .replace(/\s+(-|\*)\s+/g, '\n$1 ')
        .split('\n');

    let html = '';
    let inList = false;

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        const isBullet =
            trimmed.startsWith('•') ||
            trimmed.startsWith('-') ||
            trimmed.startsWith('*');

        if (isBullet) {
            if (!inList) {
                html += '<ul>';
                inList = true;
            }
            html += `
                <li>
                    ${trimmed.replace(/^[-*•]\s*/, '').trim()}
                </li>
            `;
        } else {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            html += `<p>${trimmed}</p>`;
        }
    });

    if (inList) {
        html += '</ul>';
    }
    return `
        <div class="info-text">
            ${html}
        </div>
    `;
}


function errorHTML(title, message) {
    return `
        <div class="detail-error">
            <h2>${title}</h2>
            <p>${message}</p>
            <a href="core-services.html">
                ← Go to Core Services
            </a>
        </div>
    `;
}


function toggleMobileMenu() {
    document
        .getElementById('mobile-menu')
        .classList
        .toggle('hidden');
}
