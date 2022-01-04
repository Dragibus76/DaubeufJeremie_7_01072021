import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
      
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0E88FA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#0E88FA",
      },
      "&:hover fieldset": {
        borderColor: "#0E88FA",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0E88FA",
      },
    },
  },
})(TextField);

const TextArea = ({ rows, rowsMax, placeholder, onChange, value, id, label, variant, multilinerows, disabled }) => {
  return (
    <CssTextField
      multiline
      onChange={onChange}
      value={value}
      rows={rows}
      multilinerows={multilinerows}
      rowsMax={rowsMax}
      placeholder={placeholder}
      id={id}
      label={label}
      variant={variant}
      autoComplete="off"
      disabled={disabled}
    />
  );
};
export default TextArea;
