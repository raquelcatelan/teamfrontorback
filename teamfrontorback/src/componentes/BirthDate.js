import React from 'react'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';
import TextField from '@mui/material/TextField';
import '../App.scss';
import './style.scss';

const BirthDate = () => {
  const [value, setValue] = React.useState(null);

  return (
    <div className="birth-date">
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
    </div>

  );
}

export default BirthDate