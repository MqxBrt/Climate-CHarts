import React from 'react';
import { useTabStore } from '../../store/tabs';
import TemperatureTab from './TemperatureTab';
import PrecipitationTab from './PrecipitationTab';

const TabsPanel: React.FC = () => {
    const { selectedTab } = useTabStore();

    return (
        <div className="pt-4 flex flex-col">
            {selectedTab === 'temperature' && <TemperatureTab />}
            {selectedTab === 'precipitation' && <PrecipitationTab />}
        </div>
    );
};

export default TabsPanel;
