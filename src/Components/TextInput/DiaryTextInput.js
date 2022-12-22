import * as React from "react";
import TextField from "@mui/material/TextField";

export default function DiaryTextInput(props) {
  return (
    <>
      <p>{props.text.length}</p>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        multiline
        onChange={props.handleChange}
      />
    </>
  );
}
