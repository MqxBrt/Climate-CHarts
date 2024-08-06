import Papa from 'papaparse';

export interface IRow {
    date: string;
    value: string;
}

export const loadCsvFile = async (path: string, delimiter: string): Promise<IRow[]> => {
    const response = await fetch(path);
    const csv = await response.text();

    return Papa.parse<IRow>(csv, { header: true, delimiter }).data;
};
