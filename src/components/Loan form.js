import { TextField, MenuItem, Grid } from "@mui/material";
import { useLoan } from "../context/LoanContext";

const LoanForm = () => {
  const { loanDetails, setLoanDetails } = useLoan();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({ ...loanDetails, [name]: parseFloat(value) });
  };

  return (
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
    </Grid>
  );
};

export default LoanForm;
