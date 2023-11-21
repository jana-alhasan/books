import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import SideBookImg from "../../components/BookDetails/SideBookImg";
import CoverImg from "../../components/BookDetails/CoverImg";
import BookInfo from "../../components/BookDetails/BookInfo";
import MoreInfo from "../../components/BookDetails/MoreInfo";
import { FetchData } from "../../utilities/FetchData";
import { useFavorites } from "../../components/CustomHooks/useFavorite";
import { saveFavoritesToLocalStorage,getStoredFavorites } from "../../utilities/Favorite";
import SkeletonLoader from "../../Skeleton/Skeleton";
import BooksCarousels from "../../components/common/BooksCarousels/BooksCarousels";

const BookDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const { favorites, setFavorites, isBookInFavorites, handleFavoriteClick } =
  useFavorites();
  
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

  const bookItems = [
    { image: "/assets/images/book-slider/s3.png" },
    { image: "/assets/images/book-slider/s4.png" },
    { image: "/assets/images/book-slider/s2.png" },
    { image: "/assets/images/book-slider/s1.png" },
  ];
  const information = [
    { title: "Publisher", content: "Maragaret K. Books", id: "publisher" },
    { title: "Language", content: "English", id: "lang" },
    { title: "Print length", content: "592 pages", id: "length" },
    { title: "Publication date", content: "March 3, 2020", id: "date" },
    { title: "Reading age", content: "14+", id: "readingAge" },
    { title: "Dimensions", content: "6 x 1.8 x 9 inches", id: "dimensions" },
  ];


  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params: {
              q: bookId,
              key: "AIzaSyCHqFdi4kZArpkxKfcG5iJ3Z8dzN256d1o",
            },
          }
        );

        if (response?.status === 200 && response?.data?.items?.length > 0) {
          const { title, authors, saleInfo, description, imageLinks } =
            response.data.items[0].volumeInfo;

          setBook({
            title: title || "Chain of Gold: The Last Hours #1",
            authors: authors ? authors.join(", ") : "No Authors",
            price:
              saleInfo && saleInfo.retailPrice
                ? `$${saleInfo.retailPrice.amount}`
                : "12.45$",
            description: description || "No Description Available",
            imageUrl: imageLinks
              ? imageLinks.thumbnail
              : "../images/book-slider/prin-img.png",
          });
        } else {
          console.error("Failed to fetch book details:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) {
    return null;
  }

  return (
    <>
      <Grid container justifyContent={"space-evenly"}>
        <Grid item xs={12} md={5}>
          <Stack
            direction={{ xs: "column", sm: "row-reverse" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CoverImg imageUrl={book.imageUrl} />
            <SideBookImg bookItems={bookItems} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <BookInfo
            title={book.title}
            authors={book.authors}
            description={book.description}
          />
          <MoreInfo infoItems={information} />
        </Grid>
      </Grid>
      <Stack>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <BooksCarousels
              carusalTitle={"Collection"}
              books={books}
              isBookInFavorites={isBookInFavorites}
              handleFavoriteClick={handleFavoriteClick}
              favorites={favorites}
            />
          </>
        )}
      </Stack>
    </>
  );
};

export default BookDetails;
