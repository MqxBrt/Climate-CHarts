import { create } from 'zustand';

interface ITabState {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
}

export const useTabStore = create<ITabState>((set) => ({
    selectedTab: localStorage.getItem('selectedTab') || 'temperature',
    setSelectedTab: (tab: string) => {
        localStorage.setItem('selectedTab', tab);
        set({ selectedTab: tab });
    },
}));
