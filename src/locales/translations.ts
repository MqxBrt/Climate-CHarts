export interface ITranslation {
    navbar: {
        temperature: string;
        precipitation: string;
    };
    error: {
        main: string;
        description: string;
    };
    loader: {
        main: string;
    };
    temperatureTab: {
        label: string;
        text: string;
        tooltip: string;
    };
    precipitationTab: {
        label: string;
        text: string;
        tooltip: string;
    };
}


const FR: ITranslation = {
    navbar: {
        temperature: "Températures",
        precipitation: "Précipitations"
    },
    error: {
        main: "ERREUR : ",
        description: "Un problème est survenu lors du chargement du fichier CSV"
    },
    loader: {
        main: "Chargement"
    },
    temperatureTab: {
        label: "Températures",
        text: "Température (°C)",
        tooltip: "Température:"
    },
    precipitationTab: {
        label: "Précipitations",
        text: "Précipitation (mm)",
        tooltip: "Précipitation:"
    }
};

const EN: ITranslation = {
    navbar: {
        temperature: "Temperatures",
        precipitation: "Precipitations"
    },
    error: {
        main: "ERROR : ",
        description: "Failed to load CSV file"
    },
    loader: {
        main: "Loading"
    },
    temperatureTab: {
        label: "Temperatures",
        text: "Temperature (°C)",
        tooltip: "Temperature:"
    },
    precipitationTab: {
        label: "Precipitations",
        text: "Precipitation (mm)",
        tooltip: "Precipitation:"
    }
};

export const translations = { fr: FR, en: EN };