import React from 'react'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';

import TextField from '@mui/material/TextField';


export default function BirthDate() {
    const [value, setValue] = React.useState(null);

    return (
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Data de nascimento"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }