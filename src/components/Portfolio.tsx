import React, { useState } from 'react';

interface Stock {
    symbol: string;
    price: number;
    volume: number;
}

const Portfolio: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);

    const addStock = (stock: Stock) => {
        setStocks([...stocks, stock]);
    };

    const removeStock = (stockToRemove: Stock) => {
        setStocks(stocks.filter(stock => stock !== stockToRemove));
    };

    return (
        <div>
            <h1>Portfolio</h1>
            <button onClick={() => addStock({ symbol: 'AAPL', price: 150, volume: 1000 })}>
                Add AAPL Stock
            </button>
            <ul>
                {stocks.map((stock, index) => (
                    <li key={index}>
                        {stock.symbol} - ${stock.price} - Volume: {stock.volume}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;