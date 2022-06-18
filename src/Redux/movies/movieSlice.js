import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    addMovie: (state, { payload }) => {
      state.movie = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllMovie = (state) => state.movies.movie;
export default movieSlice.reducer;
