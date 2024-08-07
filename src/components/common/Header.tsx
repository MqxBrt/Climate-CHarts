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
                style={{
                    backgroundImage: selectedTheme === 'light' ? "url('/assets/images/sun.webp')" : "url('/assets/images/stars.webp')"
                }}
            ></div>
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${selectedTab === 'temperature' ? 'opacity-0' : 'opacity-100'}`}
                style={{
                    backgroundImage: selectedTheme === 'light' ? "url('/assets/images/clouds.webp')" : "url('/assets/images/lightning.webp')"
                }}
            ></div>
            <div className="relative flex items-center justify-center h-full z-10">
                <div className="flex flex-col items-center justify-center w-full sm:flex-row sm:justify-center">
                    <div className="flex flex-row items-center justify-center w-full sm:w-auto sm:h-full select-none">
                        <img
                            src="/assets/images/logo.png"
                            className="h-28 w-28 sm:h-36 sm:w-36 md:h-38 md:w-38 lg:h-40 lg:w-40 object-contain select-none cursor-default"
                            draggable="false"
                        />
                    </div>
                    <div className="hidden sm:flex sm:flex-col items-center justify-center w-full sm:w-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-slate-900 p-2 select-none text-shadow-outline">
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
