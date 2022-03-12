import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.scss';
import './style.scss';

const ButtonGreen = ( {children} ) => {
    return (
      <div className="button-green">
      <Stack spacing={2} direction="row">
        <Button  variant="contained" >{children}</Button>

      </Stack>
      </div>
    );
}

export default ButtonGreen