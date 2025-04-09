import React from 'react';
import { Line } from 'react-chartjs-2';

interface GraphProps {
    stockData: { date: string; price: number }[];
    options?: object;
}

const Graph: React.FC<GraphProps> = ({ stockData, options }) => {
    const data = {
        labels: stockData.map(dataPoint => dataPoint.date),
        datasets: [
            {
                label: 'Stock Price',
                data: stockData.map(dataPoint => dataPoint.price),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 2,
            },
        ],
    };

    return <Line data={data} options={options} />;
};

export default Graph;