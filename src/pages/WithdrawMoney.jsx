import React, { useState } from 'react';
import { TextField } from '@mui/material';
import SecondaryButton from '../component/SecondartButton';


const WithdrawMoney = ({ balance, onWithdraw }) => {
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [error, setError] = useState('');

    const handleWithdraw = () => {
        const amount = parseInt(withdrawAmount);
        if (isNaN(amount) || amount <= 0) {
            setError('Please enter a valid amount.');
        } else if (amount > balance) {
            setError('Insufficient balance.');
        } else {
            onWithdraw(amount);
            setWithdrawAmount('');
            setError('');
        }
    };

    return (
        <div className="border-2 h-[200px] text-center relative rounded-[10px]">
            <div className="p-[30px]">
                <div className='w-full'>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <TextField id="outlined-basic" label="Amount" type="number" variant="outlined" className="w-full" value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)} />
                </div>
                <div className="mt-6">
                    <SecondaryButton text="WithDraw Money" onClick={handleWithdraw} />
                </div>
            </div>
        </div>

    );
};

export default WithdrawMoney;
