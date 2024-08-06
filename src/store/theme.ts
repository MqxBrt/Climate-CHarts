import { create } from 'zustand';

interface IThemeState {
    selectedTheme: string;
    setSelectedTheme: (theme: string) => void;
}

export const useThemeStore = create<IThemeState>((set) => ({
    selectedTheme: localStorage.getItem('selectedTheme') || 'light',
    setSelectedTheme: (theme: string) => {
        localStorage.setItem('selectedTheme', theme);
        set({ selectedTheme: theme });
    },
}));
