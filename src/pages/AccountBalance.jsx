import React from 'react';

const AccountBalance = ({ balance }) => {
    return (
        <div className="border-2 h-[200px] text-center relative rounded-[10px]">
            <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                <p className="font-bold text-[18px]"> Available Balance</p>
                <h1 className="text-[30px] font-bold text-[#5e18e0]">{balance} INR</h1>
            </div>
        </div>
    );
};

export default AccountBalance;
