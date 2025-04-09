import React from 'react';

interface StockDetailsProps {
    stock: {
        symbol: string;
        price: number;
        volume: number;
        historicalPerformance: Array<{ date: string; price: number }>;
    };
}

const StockDetails: React.FC<StockDetailsProps> = ({ stock }) => {
    return (
        <div>
            <h2>{stock.symbol} Details</h2>
            <p>Current Price: ${stock.price.toFixed(2)}</p>
            <p>Volume: {stock.volume.toLocaleString()}</p>
            <h3>Historical Performance</h3>
            <ul>
                {stock.historicalPerformance.map((data, index) => (
                    <li key={index}>
                        {data.date}: ${data.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockDetails;