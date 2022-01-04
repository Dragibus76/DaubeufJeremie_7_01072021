import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UploadButtons({ onChange, theinputkey, type }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input onChange={onChange} key={theinputkey || ""} className={classes.input} id="icon-button-file" type={type} />
      <label aria-label="upload picture" htmlFor="icon-button-file">
        <div style={{ display: "none" }}>Sélectionner une image :</div>
        <IconButton  aria-label="upload picture" component="span">
          <AddAPhotoIcon className="addPhotoIcon"/>
        </IconButton>
      </label>
    </div>
  );
}
