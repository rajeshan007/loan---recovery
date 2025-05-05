import { createContext, useContext, useState } from "react";

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [loanDetails, setLoanDetails] = useState({
    amount: 10000,
    interest: 5,
    term: 12,
    currency: 'USD',
    exchangeRate: 1,
  });

  return (
    <LoanContext.Provider value={{ loanDetails, setLoanDetails }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => useContext(LoanContext);
