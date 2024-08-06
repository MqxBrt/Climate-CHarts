import React from 'react';
import { useLanguageStore } from '../../store/language';

const Error: React.FC = () => {
    const { currentLanguage } = useLanguageStore();
    return (
        <div className="flex flex-col justify-center items-center pt-25vh">
            <div className="bg-red-100 dark:bg-red-700 border border-red-700 dark:border-red-300 text-red-700 dark:text-red-300 px-4 py-3 rounded relative">
                <strong className="font-bold">{currentLanguage.error.main}</strong>
                <span className="block sm:inline">{currentLanguage.error.description}</span>
            </div>
        </div>
    );
};

export default Error;
