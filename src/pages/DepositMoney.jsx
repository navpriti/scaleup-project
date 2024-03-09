import React, { useState } from 'react';
import { Grid } from '@mui/material';
import InputField from '../component/InputField';
import SelectField from '../component/Select';
import PrimaryButton from '../component/Button';
import Swal from 'sweetalert2';


const DepositMoney = ({ onDeposit, balance }) => {
  const [amount, setamount] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleamountChange = (e) => {
    setamount(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = () => {
    if (amount && quantity) {
      const amountValue = parseInt(amount);
      const quantityValue = parseInt(quantity);
      onDeposit(amountValue, quantityValue);
      setamount('');
      setQuantity('');
    } else {
      Swal.fire({text:'Please enter both amount and quantity.'});
    }
  };

  return (
    <div className="border-2 p-10 rounded-[10px]">
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <SelectField value={amount} onChange={handleamountChange} />
        </Grid>
        <Grid item md={6} xs={12}>
          <InputField title="Notes count" value={quantity} onChange={handleQuantityChange} />
        </Grid>
        <Grid item md={6} xs={12}>
        </Grid>
        <Grid item md={6} xs={12}>
          <PrimaryButton text="Deposit" handleSubmit={handleSubmit} />
        </Grid>

      </Grid>
    </div>



  );
};

export default DepositMoney;
