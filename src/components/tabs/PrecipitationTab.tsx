import React from 'react';
import Chart from '../chart/Chart';
import { useLanguageStore } from '../../store/language';
import { useThemeStore } from '../../store/theme';

const PrecipitationTab: React.FC = () => {

    const { currentLanguage } = useLanguageStore();
    const { selectedTheme } = useThemeStore();

    return (
        <Chart
            csvPath="/assets/data/precipitation.csv"
            separator=','
            label={currentLanguage.precipitationTab.label}
            borderColor={`${selectedTheme === 'light' ? 'rgba(100, 116, 139, 1)' : 'rgba(148, 163, 184, 1)'}`}
            backgroundColor={`${selectedTheme === 'light' ? 'rgba(51, 65, 85, 0.2)' : 'rgba(100, 116, 139, 0.5)'}`}
            text={currentLanguage.precipitationTab.text}
            tooltip={(value: number) => `${currentLanguage.precipitationTab.tooltip} ${value.toFixed(2)} mm`}
        />
    );
};

export default PrecipitationTab;
