import React from "react";
import PhotoContent from "../Component/PhotoContent";
import Footer from "../Component/Footer";
// import axios from "axios";
// import APIKEY from "../Api/MovieApi";
// import movieApi from "../Api/MovieApiKey";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import { addMovies } from "../Redux/movies/movieSlice";
// import { getAllMovies } from "../Redux/movies/movieSlice";
import { Box, Flex } from "@chakra-ui/react";
import MovieCard from "../Component/MovieCard";

const Home = () => {
  // const dispatch = useDispatch();
  // const movieText = "Harry";
  // const movies = useSelector(getAllMovies);
  // console.log("movies:", movies);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const res = await movieApi
  //       .get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     console.log(res.data.Search);
  //     dispatch(addMovies(res.data.Search));
  //   };
  //   fetchMovies();
  // }, [dispatch]);
  return (
    <Box>
      <PhotoContent />
      <MovieCard />
      <Footer />
    </Box>
  );
};

export default Home;
