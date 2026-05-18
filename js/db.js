const SHEET_ID = '1gGnOzvgypFyDWZ578L0Wwu4e5IsrmmWirgFQi5oIzB0';

const SHEETS = {
    medicalTerms: '1893146666',
    medicines: '0',
    commonSymptoms: '949739560',
    rareSymptoms: '1021991430'
};

let medicalTerms = [];
let medicines = [];
let healthCommonSymptoms = [];
let healthRareSymptoms = [];

async function fetchSheet(gid) {
    const url =
        `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${gid}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch sheet ${gid}`);
    }

    const csv = await response.text();

    return csvToObjects(csv);
}


function csvToObjects(csv) {
    const lines = splitCSVRows(csv)
        .map(line => line.trim())
        .filter(line => line);

    if (lines.length === 0) return [];

    const headers = parseCSVLine(lines[0]);

    return lines.slice(1).map(line => {
        const values = parseCSVLine(line);

        let obj = {};

        headers.forEach((header, index) => {
            obj[header.trim()] = values[index]
                ? values[index].trim()
                : '';
        });

        return obj;
    });
}

function splitCSVRows(csv) {
    const rows = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < csv.length; i++) {
        const char = csv[i];
        const next = csv[i + 1];

        if (char === '"' && next === '"') {
            current += char + next;
            i++;
        }
        else if (char === '"') {
            inQuotes = !inQuotes;
            current += char;
        }
        else if ((char === '\n' || char === '\r') && !inQuotes) {
            if (current.trim()) {
                rows.push(current);
            }

            current = '';

            if (char === '\r' && next === '\n') {
                i++;
            }
        }
        else {
            current += char;
        }
    }

    if (current.trim()) {
        rows.push(current);
    }

    return rows;
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const next = line[i + 1];

        if (char === '"' && next === '"') {
            current += '"';
            i++;
        }
        else if (char === '"') {
            inQuotes = !inQuotes;
        }
        else if (char === ',' && !inQuotes) {
            result.push(cleanCSVValue(current));
            current = '';
        }
        else {
            current += char;
        }
    }

    result.push(cleanCSVValue(current));

    return result;
}

function cleanCSVValue(value) {
    return value
        .replace(/^"|"$/g, '')
        .replace(/""/g, '"')
        .trim();
}


async function loadDatabase() {
    try {
        medicalTerms = await fetchSheet(SHEETS.medicalTerms);
        medicines = await fetchSheet(SHEETS.medicines);
        healthCommonSymptoms = await fetchSheet(SHEETS.commonSymptoms);
        healthRareSymptoms = await fetchSheet(SHEETS.rareSymptoms);

        medicines.forEach(m => {
            m.brandNames = toCSVList(m.brandNames);
            m.dosageForms = toCSVList(m.dosageForms);
            m.uses = toCSVList(m.uses);
        });

        console.log('Database Loaded');

        console.log('Medical Terms:', medicalTerms);
        console.log('Medicines:', medicines);
        console.log('Common Symptoms:', healthCommonSymptoms);
        console.log('Rare Symptoms:', healthRareSymptoms);

    } catch (error) {
        console.error('Database loading failed:', error);
        throw error;
    }
}

function toCSVList(value) {
    if (Array.isArray(value)) return value;
    if (!value) return [];

    const text = String(value);
    const separator = text.includes(';') ? ';' : ',';

    return text
        .split(separator)
        .map(v => v.trim())
        .filter(Boolean);
}
