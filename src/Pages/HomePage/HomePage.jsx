import React, { useEffect, useState, useMemo } from "react";
import { Typography, Box, Button, Grid, Stack } from "@mui/material";
import { LocalShipping, Star } from "@mui/icons-material";
import BookImage from "../../components/Book/BookImage";
import BookInfo from "../../components/Book/BookInfo";
import Discount from "../../components/Book/Discount";
import Scoll from "../../components/Book/Scoll";
import BooksCarousels from "../../components/common/BooksCarousels/BooksCarousels";
import { useFavorites } from "../../components/CustomHooks/useFavorite";
import { FetchData } from "../../utilities/FetchData";
import { saveFavoritesToLocalStorage,getStoredFavorites } from "../../utilities/Favorite";
import SkeletonLoader from "../../Skeleton/Skeleton";
import Benifict from "../../components/Book/Benefict";
import useStyles from "../../components/Book/styles";



const HomePage = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const { favorites, setFavorites, isBookInFavorites, handleFavoriteClick } =
    useFavorites();

  const benefits = [
    {
      icon: <LocalShipping className={classes.icon} />,
      text: "Free shipping over 50$",
    },
    {
      icon: <Star className={classes.icon} />,
      text: "Save with loyalty points",
    },
    {
      icon: (
        <img
          src="../../assets/images/main-page/Book open.svg"
          alt="Book Open Icon"
        />
      ),
      text: "Read a few pages",
    },
  ];
  
  useEffect(() => {
    const storedFavorites = getStoredFavorites();
    setFavorites(storedFavorites);
    FetchData( setIsLoading, setBooks);
  }, [setFavorites]);

  useEffect(() => {
    saveFavoritesToLocalStorage(favorites);
  }, [favorites]);

  useEffect(() => {
    FetchData( setIsLoading, setBooks);
  }, []);

  return (
    <>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={12} sm={6} md={5}>
          <Stack direction={"row"} spacing={5}>
            <Scoll />
            <BookInfo />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Stack direction={"row"} justifyContent={"flex-start"}>
            <Discount />
            <BookImage />
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Benifict {...benefit} index={index} />
          </Grid>
        ))}
      </Grid>
      <stack>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <BooksCarousels
              carusalTitle={"Selected For You"}
              books={books}
              isBookInFavorites={isBookInFavorites}
              handleFavoriteClick={handleFavoriteClick}
              favorites={favorites}
            />
            <BooksCarousels
              carusalTitle={"You Must buy it now"}
              books={books}
              isBookInFavorites={isBookInFavorites}
              handleFavoriteClick={handleFavoriteClick}
              favorites={favorites}
            />
          </>
        )}
      </stack>
    </>
  );
};

export default HomePage;
