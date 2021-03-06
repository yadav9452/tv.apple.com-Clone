import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addMovies } from "../Redux/movies/movieSlice";
import { getAllMovies } from "../Redux/movies/movieSlice";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";

const Div1 = () => {
  const dispatch = useDispatch();
  // const movieText = "fast";
  const movies = useSelector(getAllMovies);
  console.log("movies:", movies);
  useEffect(() => {
    const fetchMovies1 = async () => {
      const res = await axios
        .get("https://backend-app-tv.herokuapp.com/movies1")
        .catch((err) => {
          console.log(err);
        });
      // console.log(res.data.Search);
      dispatch(addMovies(res.data));
    };
    fetchMovies1();
  }, [dispatch]);
  // const movieText = "fast";

  return (
    <Box padding={" 20px 0px 0px 10px"} margin="20px">
      <Heading fontSize={"20px"}>
        For All Mankind: Watch Season 1 Free for a Limited Time
      </Heading>
      <p>A thrilling "what if" take on the global space race.</p>
      <Flex gap={"10px"}>
        {movies.map((e) => {
          return (
            <Flex key={e.id}>
              <img src={e.posterUrl} alt="" />
            </Flex>
          );
        })}
      </Flex>
      <Box padding={" 20px 0px 0px 10px"} margin="20px">
        <Heading fontSize={"20px"}>Most Popular Now</Heading>
      </Box>
    </Box>
  );
};

export default Div1;
