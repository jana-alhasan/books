/* eslint-disable react/prop-types */
import React from "react";
import { Box, Typography, Button, IconButton, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import useStyles from "./styles";

const BookInfo = ({ title, authors, description }) => {
  const classes = useStyles();

  return (
    <Stack spacing={3}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.author}>{authors}</Typography>
      <Box className={classes.rating} id="rating">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <span className={classes.rateNumber}>4</span>
      </Box>
      <Typography className={classes.price}>$12.45</Typography>
      <Typography className={classes.description}>{description}</Typography>
      <Box>
        <IconButton>
          <RemoveIcon className={classes.iconButton} />
        </IconButton>
        <span className={classes.counter}>1</span>
        <IconButton>
          <AddIcon className={classes.iconButton} />
        </IconButton>
      </Box>
      <Box className={classes.addCartFav}>
        <Button
          variant="contained"
          className={classes.cart}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          className={classes.favorite}
          startIcon={<FavoriteIcon />}
        >
          Favorite
        </Button>
      </Box>
    </Stack>
  );
};

export default BookInfo;
