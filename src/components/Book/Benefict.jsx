/* eslint-disable react/prop-types */
import React from "react";
import { Typography, Stack } from "@mui/material";
import { Divider } from "@material-ui/core";
import useStyles from "./styles";

const Benifict = ({ icon, text, index }) => {
  const classes = useStyles();
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      {icon}
      <Typography variant="body1" className={classes.choiceP}>
        {text}
      </Typography>
    </Stack>
  );
};

export default Benifict;
