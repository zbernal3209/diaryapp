import DiaryTextInput from "./DiaryTextInput";
import DiaryTextInputDate from "./DiaryTextInputDate";
import dayjs from 'dayjs';
import * as React from "react";

import Box from "@mui/material/Box";

export default function TextInputForm() {
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState(dayjs());

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8081/api/v1/entries", {
      method: "POST",
      body: JSON.stringify({ 
        "text": text,
        "date": date

    }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };


  // how to make this more consise?

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e);
  }

  return (
    <Box
      action="e"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <DiaryTextInputDate handleChangeDate={handleChangeDate} date={date}/>
      <DiaryTextInput handleChange={handleChange} text={text} />
      <input type="submit" value="Submit" />
    </Box>
  );
}
