import { Container, Typography } from "@mui/material";
import { LoanProvider } from "./context/LoanContext";
import LoanForm from "./components/LoanForm";
import ResultDisplay from './components/Result'
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <LoanProvider>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom align="center">Loan Calculator</Typography>
        <LoanForm />
        <CurrencyConverter />
        <ResultDisplay />
      </Container>
    </LoanProvider>
  );
};

export default App;
