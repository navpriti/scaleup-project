import React, { useState, useEffect } from 'react';
import AccountBalance from './AccountBalance';
import DepositMoney from './DepositMoney';
import WithdrawMoney from './WithdrawMoney';
import { Box, Grid } from '@mui/material';
import Swal from 'sweetalert2';

const Money = () => {
    const [balance, setBalance] = useState(0);
    const [notes, setNotes] = useState({
        100: 0,
        500: 0,
        1000: 0,
        2000: 0,
    });

    useEffect(() => {
        const storedBalance = localStorage.getItem('balance');
        const storedNotes = localStorage.getItem('notes');
        if (storedBalance && storedNotes) {
            setBalance(parseInt(storedBalance));
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    const updateBalanceAndNotes = (newBalance, newNotes) => {
        localStorage.setItem('balance', newBalance.toString());
        localStorage.setItem('notes', JSON.stringify(newNotes));
        setBalance(newBalance);
        setNotes(newNotes);
    };

    const handleDeposit = (amount, quantity) => {
        const newNotes = { ...notes, [amount]: notes[amount] + quantity };
        const depositAmount = amount * quantity;
        const newBalance = balance + depositAmount;
        updateBalanceAndNotes(newBalance, newNotes);
    };

    const handleWithdraw = (amount) => {
        let remainingAmount = amount;
        let newBalance = balance;
        let newNotes = { ...notes };

        [2000, 1000, 500, 100].forEach((note) => {
            const noteCount = Math.min(Math.floor(remainingAmount / note), newNotes[note]);
            remainingAmount -= noteCount * note;
            newBalance -= noteCount * note;
            newNotes[note] -= noteCount;
        });

        if (remainingAmount === 0) {
            updateBalanceAndNotes(newBalance, newNotes);
        } else {
            Swal.fire({text:'Unable to dispense the exact amount with available amounts.'});
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }} className="bg-[#fff] rounded-[10px]  p-10 drop-shadow-lg">
            <h2 className='uppercase text-[20px] font-bold mb-6 text-[#5e18e0]'>ATM Stimulator</h2>
            <div className="mb-6">
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <AccountBalance balance={balance} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <WithdrawMoney balance={balance} onWithdraw={handleWithdraw} />
                    </Grid>
                </Grid>
            </div>
            <DepositMoney onDeposit={handleDeposit} balance={balance} />
        </Box>
    );
};

export default Money;
