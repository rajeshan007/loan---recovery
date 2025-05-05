import { createContext, useContext, useState } from "react";

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
    const [calculate, setCalculate] = useState(false);
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [amortizationSchedule, setAmortizationSchedule] = useState([]);
    const [loanDetails, setLoanDetails] = useState({
        amount: 10000,
        interest: 5,
        term: 12,
        currency: 'USD',
        exchangeRate: 1,
    });

    return (
        <LoanContext.Provider value={{
            loanDetails, setLoanDetails,
            monthlyPayment, setMonthlyPayment,
            amortizationSchedule, setAmortizationSchedule,
            calculate, setCalculate
        }}>
            {children}
        </LoanContext.Provider>
    );
};

export const useLoan = () => useContext(LoanContext);



