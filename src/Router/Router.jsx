import React from "react";
import Layout from "../Layout/Layout";
import BookInfo from "../components/Book/BookInfo";
import HomePage from "../Pages/HomePage/HomePage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import SearchPage from "../Pages/SearchPage/SearchPage";
import { createBrowserRouter} from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/BookDetails/:bookId", element: <BookDetails/> },
      { path: "/search", element: <SearchPage/> },   
    ],
  },
]);

export default Routes;
