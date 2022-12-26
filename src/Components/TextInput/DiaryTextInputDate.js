import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export default function DiaryTextInputDate(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack 
        id='date'
          >
        <DateTimePicker
          label="Date&Time picker"
          value={props.date}
          onChange={props.handleChangeDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}