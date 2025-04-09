import React, { useState } from 'react';
import StockGraph from './components/StockGraph';

interface Stock {
    symbol: string;
    price: number;
    volume: number;
}

const StockPortfolio: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);

    const addStock = (stock: Stock) => {
        setStocks([...stocks, stock]);
    };

    return (
        <div>
            <h1>Stock Portfolio</h1>
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

const App: React.FC = () => {
    return (
        <div>
            <h1>Stock Portfolio App</h1>
            <StockGraph />
            <StockPortfolio />
        </div>
    );
};

export default App;