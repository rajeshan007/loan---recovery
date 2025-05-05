import { useEffect } from "react";
import axios from "axios";
import { useLoan } from "../context/LoanContext";

const CurrencyConverter = () => {
  const { loanDetails, setLoanDetails } = useLoan();

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (loanDetails.currency !== 'USD') {
        const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
        const rate = res.data.rates[loanDetails.currency];
        setLoanDetails(prev => ({ ...prev, exchangeRate: rate }));
      } else {
        setLoanDetails(prev => ({ ...prev, exchangeRate: 1 }));
      }
    };

    fetchExchangeRate();
  }, [loanDetails.currency]);

  return null; // This component only fetches data
};

export default CurrencyConverter;
