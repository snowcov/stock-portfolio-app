export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
};

export const calculatePortfolioValue = (stocks: { price: number; quantity: number }[]): number => {
    return stocks.reduce((total, stock) => total + stock.price * stock.quantity, 0);
};