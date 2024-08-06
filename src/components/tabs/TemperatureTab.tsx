import React from 'react';
import Chart from '../chart/Chart';

const TemperatureTab: React.FC = () => {
    return (
        <Chart
            csvPath="/assets/data/temperature.csv"
            separator=';'
            label="Température"
            borderColor="rgba(2, 132, 199, 1)"
            backgroundColor="rgba(7, 89, 133, 0.2)"
            text="Température (°C)"
            tooltip={(value: number) => `Température: ${value.toFixed(2)} °C`}
        />
    );
};

export default TemperatureTab;
