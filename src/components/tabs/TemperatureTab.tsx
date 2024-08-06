import React from 'react';
import Chart from '../chart/Chart';
import { useLanguageStore } from '../../store/language';
import { useThemeStore } from '../../store/theme';

const TemperatureTab: React.FC = () => {

    const { currentLanguage } = useLanguageStore();
    const { selectedTheme } = useThemeStore();

    return (
        <Chart
            csvPath="/assets/data/temperature.csv"
            separator=';'
            label={currentLanguage.temperatureTab.label}
            borderColor={`${selectedTheme === 'light' ? 'rgba(2, 132, 199, 1)' : 'rgba(56, 189, 248, 1)'}`}
            backgroundColor={`${selectedTheme === 'light' ? 'rgba(7, 89, 133, 0.2)' : 'rgba(2, 132, 199, 0.5)'}`}
            text={currentLanguage.temperatureTab.text}
            tooltip={(value: number) => `${currentLanguage.temperatureTab.tooltip} ${value.toFixed(2)} °C`}
        />
    );
};

export default TemperatureTab;
