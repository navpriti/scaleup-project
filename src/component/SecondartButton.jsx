import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SecondaryButton({text,onClick}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={onClick} className='w-full h-[56px] rounded-[50px!important] border-[#5e18e0!important] text-[#5e18e0!important]'>{text}</Button>
    </Stack>
  );
}