import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addMovie } from "../Redux/movies/movieSlice";
import { getAllMovie } from "../Redux/movies/movieSlice";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";

const Div2 = () => {
  const dispatch = useDispatch();
  const movie = useSelector(getAllMovie);
  console.log("movie:", movie);
  useEffect(() => {
    const fetchMovies2 = async () => {
      const res = await axios
        .get("https://backend-app-tv.herokuapp.com/movies2")
        .catch((err) => {
          console.log(err);
        });
      // console.log(res.data.Search);
      dispatch(addMovie(res.data));
    };
    fetchMovies2();
  }, [dispatch]);
  return (
    <Box padding={" 20px 0px 0px 10px"} margin="20px">
      <Heading fontSize={"20px"}>
        For All Mankind: Watch Season 1 Free for a Limited Time
      </Heading>
      <p>A thrilling "what if" take on the global space race.</p>
      <Flex gap={"10px"}>
        {movie.map((e) => {
          return (
            <Flex key={e.id}>
              <img src={e.posterUrl} alt="" />
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Div2;
