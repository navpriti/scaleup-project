import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function PrimaryButton({text,handleSubmit}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained"  className='w-full h-[56px] rounded-[50px!important] bg-[#5e18e0!important]' onClick={handleSubmit}>{text}</Button>
    </Stack>
  );
}