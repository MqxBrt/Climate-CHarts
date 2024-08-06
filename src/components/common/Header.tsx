import React from 'react';
import { useTabStore } from '../../store/tabs';
import '../../index.css';

const Header: React.FC = () => {
    const selectedTab = useTabStore((state) => state.selectedTab);

    return (
        <header className="relative h-[18vh] bg-slate-100">
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${selectedTab === 'temperature' ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: "url('/assets/images/sun.webp')" }}
            ></div>
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${selectedTab === 'temperature' ? 'opacity-0' : 'opacity-100'}`}
                style={{ backgroundImage: "url('/assets/images/clouds.webp')" }}
            ></div>
            <div className="relative flex flex-col items-center justify-center h-full z-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 border-4 border-slate-100 p-2 bg-slate-100 rounded-lg shadow-lg select-none">
                    Climate Charts
                </h1>
            </div>
        </header>
    );
};

export default Header;
