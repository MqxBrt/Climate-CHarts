import { create } from 'zustand';
import { translations, ITranslation } from '../locales/translations';

interface ILanguageState {
    selectedLanguage: 'fr' | 'en';
    currentLanguage: ITranslation;
    setSelectedLanguage: (language: 'fr' | 'en') => void;
}

export const useLanguageStore = create<ILanguageState>((set) => ({
    selectedLanguage: (localStorage.getItem('selectedLanguage') as 'fr' | 'en') || 'fr',
    currentLanguage: translations[(localStorage.getItem('selectedLanguage') as 'fr' | 'en') || 'fr'],
    setSelectedLanguage: (language: 'fr' | 'en') => {
        localStorage.setItem('selectedLanguage', language);
        set({
            selectedLanguage: language,
            currentLanguage: translations[language]
        });
    },
}));
