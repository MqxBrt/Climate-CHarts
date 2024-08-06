import React from 'react';
import { useTabStore } from '../../store/tabs';

const Navbar: React.FC = () => {
    const { selectedTab, setSelectedTab } = useTabStore();

    return (
        <nav className={`bg-slate-100 flex justify-around`}>
            <div className={`relative overflow-hidden flex-1 ${selectedTab === 'temperature' ? 'active-temperature' : ''}`}>
                <button
                    className={`relative z-10 w-full duration-300 my-4 pb-4 flex-1 flex items-center justify-center uppercase ${selectedTab === 'temperature' ? 'text-sky-600 font-bold' : 'text-slate-500'}`}
                    onClick={() => setSelectedTab('temperature')}
                >
                    Température
                    <div className="shadow-animation-left" />
                </button>
            </div>
            <div className={`relative overflow-hidden flex-1 ${selectedTab === 'precipitation' ? 'active-precipitation' : ''}`}>
                <button
                    className={`relative z-10 w-full duration-300 my-4 pb-4 flex-1 flex items-center justify-center uppercase ${selectedTab === 'temperature' ? 'text-sky-600' : 'text-slate-500 font-bold'}`}
                    onClick={() => setSelectedTab('precipitation')}
                >
                    Précipitations
                    <div className="shadow-animation-right" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
