import React, { useEffect } from 'react';
import { useTabStore } from '../../store/tabs';
import '../../index.css';
import { useLanguageStore } from '../../store/language';
import { useThemeStore } from '../../store/theme';

const Header: React.FC = () => {
    const selectedTab = useTabStore((state) => state.selectedTab);
    const { selectedLanguage, setSelectedLanguage } = useLanguageStore();
    const { selectedTheme, setSelectedTheme } = useThemeStore();

    const toggleLanguage = () => {
        setSelectedLanguage(selectedLanguage === 'fr' ? 'en' : 'fr');
    };

    const toggleDarkMode = () => {
        setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
    }, [selectedTheme]);

    return (
        <header className="relative h-[18vh] bg-slate-100 dark:bg-slate-800">
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${selectedTab === 'temperature' ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: "url('/assets/images/sun.webp')" }}
            ></div>
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${selectedTab === 'temperature' ? 'opacity-0' : 'opacity-100'}`}
                style={{ backgroundImage: "url('/assets/images/clouds.webp')" }}
            ></div>
            <div className="relative flex items-center justify-center h-full z-10">
                <div className="flex flex-col items-center justify-center w-full sm:flex-row sm:justify-center">
                    <div className="flex flex-col items-center justify-center w-full sm:w-auto sm:h-full">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 border-4 border-slate-900 dark:border-slate-100 p-2 bg-slate-100 dark:bg-slate-900 rounded-lg shadow-lg select-none">
                            Climate Charts
                        </h1>
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 z-20">
                    <div>
                        <button
                            onClick={toggleLanguage}
                            className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg cursor-pointer shadow-lg flex items-center justify-center text-lg w-10 h-10"
                        >
                            {selectedLanguage === 'fr' ? '🇫🇷' : '🇬🇧'}
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg cursor-pointer shadow-lg flex items-center justify-center text-lg w-10 h-10"
                        >
                            {selectedTheme === 'dark' ? '🌙' : '☀️'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
