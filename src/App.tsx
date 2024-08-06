import React from 'react';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import TabsPanel from './components/tabs/TabsPanel';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <Header />
            <Navbar />
            <main className="flex-grow">
                <TabsPanel />
            </main>
        </div>
    );
};

export default App;
