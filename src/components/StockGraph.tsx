import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { fetchStockData } from '../services/api';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockGraph: React.FC = () => {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchStockData('AAPL');
                const dates = data.data.map((entry: any) => entry.date).reverse();
                const prices = data.data.map((entry: any) => entry.close).reverse();

                setChartData({
                    labels: dates,
                    datasets: [
                        {
                            label: 'AAPL Stock Price',
                            data: prices,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderWidth: 2,
                        },
                    ],
                });
            } catch (error: any) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    if (!chartData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>AAPL Stock Price</h2>
            <Line data={chartData} />
        </div>
    );
};

export default StockGraph;