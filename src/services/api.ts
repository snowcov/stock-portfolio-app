import axios from 'axios';

const API_BASE_URL = 'https://api.marketstack.com/v1';
const API_KEY = process.env.REACT_APP_API_KEY; // Read API key from environment variables

export const fetchStockData = async (symbol: string = 'AAPL') => {
    try {
        const response = await axios.get(`${API_BASE_URL}/eod`, {
            params: {
                access_key: API_KEY,
                symbols: symbol,
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Error fetching stock data: ' + error.message);
    }
};