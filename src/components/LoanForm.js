import { TextField, MenuItem, Grid, Button } from "@mui/material";
import { useLoan } from "../context/LoanContext";

const LoanForm = () => {
  const { loanDetails, setLoanDetails, setCalculate, setMonthlyPayment } = useLoan();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({ ...loanDetails, [name]: parseFloat(value) });
  };

  const handleCalculate = () => {
    const { amount, interest, term } = loanDetails;

    if (amount && interest && term) {
      const monthlyRate = interest / 100 / 12;
      const payment = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -term));
      setMonthlyPayment(payment);
      setCalculate(true);
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Loan Amount" name="amount" type="number" value={loanDetails.amount} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Interest Rate (%)" name="interest" type="number" value={loanDetails.interest} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Loan Term (months)" name="term" type="number" value={loanDetails.term} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth select label="Currency" name="currency" value={loanDetails.currency} onChange={handleChange}>
            {["USD", "EUR", "GBP", "INR"].map((cur) => (
              <MenuItem key={cur} value={cur}>{cur}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary" onClick={handleCalculate}>
            Calculate Loan
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LoanForm;
