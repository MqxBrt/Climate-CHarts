import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend, TimeScale, TooltipItem } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { IRow, loadCsvFile } from '../../utils/csv';
import Loader from '../common/Loader';
import Error from '../common/Error';
import { useCacheStore } from '../../store/cache';
import { useThemeStore } from '../../store/theme';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend, TimeScale);

interface IProps {
    csvPath: string;
    separator: string;
    label: string;
    borderColor: string;
    backgroundColor: string;
    text: string;
    tooltip: (value: number) => string;
}

const Chart: React.FC<IProps> = ({ csvPath, separator, label, borderColor, backgroundColor, text, tooltip }) => {
    const [data, setData] = useState<IRow[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [maxPoints, setMaxPoints] = useState<number>(5000);
    const [isResponsive, setIsResponsive] = useState<boolean>(window.innerWidth > 1024);
    const [pointRadius, setPointRadius] = useState<number>(isResponsive ? 2 : 1);
    const [canvasHeight, setCanvasHeight] = useState<number | undefined>(window.innerWidth > 1024 ? undefined : 450);

    const cachedData = useCacheStore(state => state.getData(csvPath));
    const setCachedData = useCacheStore(state => state.setData);
    const { selectedTheme } = useThemeStore();
    const [activeColor, setActiveColor] = useState<string>(selectedTheme === 'light' ? '#0f172a' : '#f1f5f9');

    const downsampleData = (data: IRow[], maxPoints: number): IRow[] => {
        if (data.length <= maxPoints) return data;
        const step = Math.ceil(data.length / maxPoints);
        return data.filter((_, index) => index % step === 0);
    };

    const formatDates = (data: IRow[]): IRow[] => {
        if (separator !== ',') return data;

        return data.map(row => {
            let formattedDate;
            if (row.date.length === 8) {
                formattedDate = `${row.date.substring(0, 4)}-${row.date.substring(4, 6)}-${row.date.substring(6, 8)}`;
            } else {
                formattedDate = row.date;
            }
            return {
                ...row,
                date: formattedDate
            };
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            if (cachedData) {
                const downsampledData = downsampleData(cachedData, maxPoints);
                setData(downsampledData);
                setLoading(false);
                return;
            }

            try {
                let loadedData = await loadCsvFile(csvPath, separator);
                loadedData = formatDates(loadedData);
                setCachedData(csvPath, loadedData);
                setMaxPoints(Math.ceil(loadedData.length / 2));
                const downsampledData = downsampleData(loadedData, maxPoints);
                requestAnimationFrame(() => setData(downsampledData));
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [csvPath, separator, maxPoints, cachedData, setCachedData]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsResponsive(width > 1024);
            setCanvasHeight(width > 1024 ? undefined : 450);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const changeSize = () => {
            setPointRadius(isResponsive ? 2 : 1);
        }

        changeSize();
    }, [selectedTheme]);

    useEffect(() => {
        const changeColor = () => {
            setActiveColor(selectedTheme === 'light' ? '#0f172a' : '#f1f5f9');
        }

        changeColor();
    }, [selectedTheme]);

    const chartData = {
        labels: data.map(row => new Date(row.date)),
        datasets: [
            {
                label,
                data: data.map(row => ({
                    x: new Date(row.date).getTime(),
                    y: parseFloat(row.value),
                })),
                borderColor,
                backgroundColor,
                fill: false,
                borderWidth: 1,
                pointRadius: pointRadius,
                pointHoverRadius: 4,
            }
        ]
    };

    return (
        <div className={`flex flex-col px-2 ${isResponsive && 'h-[65vh]'}`}>
            {loading ? (
                <Loader />
            ) : error ? (
                <Error />
            ) : (
                <div className="flex justify-center items-center overflow-x-scroll">
                    <Line
                        data={chartData}
                        height={canvasHeight}
                        options={{
                            responsive: true,
                            maintainAspectRatio: isResponsive,
                            animation: false,
                            scales: {
                                x: {
                                    type: 'time',
                                    time: {
                                        unit: 'year',
                                        tooltipFormat: 'yyyy-MM-dd',
                                        displayFormats: {
                                            year: 'yyyy'
                                        }
                                    },
                                    grid: {
                                        color: activeColor,
                                        lineWidth: 1
                                    },
                                    title: {
                                        display: true,
                                        text: 'Date',
                                        color: activeColor
                                    },
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        color: activeColor
                                    }
                                },
                                y: {
                                    grid: {
                                        color: activeColor,
                                        lineWidth: 1
                                    },
                                    title: {
                                        display: true,
                                        text,
                                        color: activeColor
                                    },
                                    ticks: {
                                        color: activeColor
                                    }
                                }
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        color: activeColor
                                    }
                                },
                                tooltip: {
                                    callbacks: {
                                        title: (tooltipItems: TooltipItem<'line'>[]) => {
                                            const timestamp = tooltipItems[0].parsed.x as number;
                                            const date = new Date(timestamp);
                                            return `Date: ${date.toLocaleDateString()}`;
                                        },
                                        label: (tooltipItem: TooltipItem<'line'>) => {
                                            const value = tooltipItem.parsed.y as number;
                                            return tooltip(value);
                                        }
                                    }
                                }
                            },
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Chart;
