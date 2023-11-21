/* eslint-disable react/prop-types */
import React from "react";
import { Stack } from "@mui/material";
import useStyles from "./styles";

const CoverImg = ({ imageUrl }) => {
  const classes = useStyles();
  return (
    <Stack className={classes.principleImage}>
      <img src={imageUrl} className={classes.coverImage} alt="Book Cover" />
    </Stack>
  );
};

export default CoverImg;
