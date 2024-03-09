import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function InputField({title ,onChange,value}) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className='w-full'>
        <FormControl variant="outlined" className='w-full'>
          <InputLabel htmlFor="outlined-adornment-password">{title}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="number"
            min="1"
            label={title}
            value={value}
            onChange={onChange}
          />
        </FormControl>
      </div>
    
    </Box>
  );
}