import { Typography, Card, CardContent } from "@mui/material";
import { useLoan } from "../context/LoanContext";

const ResultDisplay = () => {
  const { monthlyPayment, loanDetails, calculate } = useLoan();
  const { exchangeRate, currency } = loanDetails;

  if (!calculate || monthlyPayment === null || isNaN(loanDetails.exchangeRate)) return null;


  const converted = (monthlyPayment * exchangeRate).toFixed(2);

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6">Monthly Payment:</Typography>
        <Typography variant="h4">
          {currency} {converted}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResultDisplay;
