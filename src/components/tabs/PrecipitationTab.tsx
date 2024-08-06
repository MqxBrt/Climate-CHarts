import React from 'react';
import Chart from '../chart/Chart';

const PrecipitationTab: React.FC = () => {
    return (
        <Chart
            csvPath="/assets/data/precipitation.csv"
            separator=','
            label="Précipitations"
            borderColor="rgba(100, 116, 139, 1)"
            backgroundColor="rgba(51, 65, 85, 0.2)"
            text="Précipitation (mm)"
            tooltip={(value: number) => `Précipitation: ${value.toFixed(2)} mm`}
        />
    );
};

export default PrecipitationTab;
