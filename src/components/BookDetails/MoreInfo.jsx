/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Typography } from "@mui/material";
import useStyles from "./styles";


const InfoItem = ({ title, content, id }) => {
  const classes = useStyles();

  return (
    <Typography variant="body2" className={classes.infoTitle}>
      {title} :{" "}
      <span className={classes.infoContent} id={id}>
        {content}
      </span>
    </Typography>
  );
};

const MoreInfo = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.MoreInfo} direction={{ xs: "column", sm: "row" }} spacing={5}>
      <Stack spacing={2}>
        <InfoItem title="Publisher" content="Maragaret K. Books" id="publisher" />
        <InfoItem title="Language" content="English" id="lang" />
        <InfoItem title="Print length" content="592 pages" id="length" />
      </Stack>
      <Stack spacing={2}>
        <InfoItem title="Publication date" content="March 3, 2020" id="date" />
        <InfoItem title="Reading age" content="14+" id="readingAge" />
        <InfoItem title="Dimensions" content="6 x 1.8 x 9 inches" id="dimensions" />
      </Stack>
    </Stack>
  );
};



export default MoreInfo;
