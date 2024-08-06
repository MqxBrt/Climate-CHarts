import React from 'react';
import { useTabStore } from '../../store/tabs';
import { useLanguageStore } from '../../store/language';
import { useThemeStore } from '../../store/theme';

const Navbar: React.FC = () => {
    const { selectedTab, setSelectedTab } = useTabStore();
    const { currentLanguage } = useLanguageStore();
    const { selectedTheme } = useThemeStore();

    return (
        <nav className={`bg-slate-100 dark:bg-slate-900 flex justify-around`}>
            <div className={`relative overflow-hidden flex-1 ${selectedTab === 'temperature' ? 'active-temperature' : ''}`}>
                <button
                    className={`relative z-10 w-full duration-300 my-4 pb-4 flex-1 flex items-center justify-center uppercase ${selectedTab === 'temperature' ? 'text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-500 dark:text-slate-100'}`}
                    onClick={() => setSelectedTab('temperature')}
                >
                    {currentLanguage.navbar.temperature}
                    <div className={`shadow-animation-left-${selectedTheme}`} />
                </button>
            </div>
            <div className={`relative overflow-hidden flex-1 ${selectedTab === 'precipitation' ? 'active-precipitation' : ''}`}>
                <button
                    className={`relative z-10 w-full duration-300 my-4 pb-4 flex-1 flex items-center justify-center uppercase ${selectedTab === 'temperature' ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-slate-100 font-bold'}`}
                    onClick={() => setSelectedTab('precipitation')}
                >
                    {currentLanguage.navbar.precipitation}
                    <div className={`shadow-animation-right-${selectedTheme}`} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
