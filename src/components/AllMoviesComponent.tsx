import { useSelector } from "react-redux";
import { RootState } from "../store/store.js";
import { allMovieTypes } from "../types/allMovieTypes.js";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import movieLogoWhite from "../assets/icon-category-movie.svg";
import { useDispatch } from "react-redux";
import { setBookmarked } from "../store/bookmarkedSlice.js";
import { useLocation } from "react-router-dom";

import axios from "axios";

const AllMoviesComponent = () => {
  const allMovies: allMovieTypes[] = useSelector(
    (store: RootState) => store.allMovies.movies
  );

  const inputValue = useSelector(
    (store: RootState) => store.inputValue.inputValue
  );

  const bookmarked = useSelector(
    (store: RootState) => store.bookmarked.bookmark
  );

  const dispatch = useDispatch();

  const handleClick = async (movieId: string) => {
    const url =
      "https://entertainment-web-app.dimitrikokhtashvili.site/api/postBookmark";
    const token = localStorage.getItem("authToken");
    const emailValue = localStorage.getItem("data.email");

    if (bookmarked.includes(movieId)) {
      const updatedBookmarked = bookmarked.filter((id) => id !== movieId);
      dispatch(setBookmarked(updatedBookmarked));
    } else {
      const updatedBookmarked = [...bookmarked, movieId];
      dispatch(setBookmarked(updatedBookmarked));
    }

    try {
      const response = await axios.post(
        url,
        {
          userEmail: emailValue,
          _id: movieId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Bookmark successfully posted:", response.data);
    } catch (error: any) {
      console.error("Error posting bookmark:", error.message);
    }
  };

  const location = useLocation();
  let movies;
  if (location.pathname === "/") {
    movies = allMovies.slice(2);
  } else if (location.pathname === "/movies") {
    movies = allMovies.filter((movie) => movie.category === "Movie");
  } else if (location.pathname === "/tvSeries") {
    movies = allMovies.filter((movie) => movie.category === "TV Series");
  } else if (location.pathname === "/bookmarked") {
    movies = allMovies.filter((movie) => bookmarked.includes(movie._id));
  } else {
    movies = allMovies;
  }

  return (
    <div className="grid grid-cols-2 px-4 gap-x-4 mb-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:px-0 xl:gap-10 2xl:grid-cols-5">
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(inputValue.toLowerCase())
        )

        .map((movie, index) => (
          <div key={index} className="relative">
            <div>
              <img
                className="w-full rounded-lg mb-2  lg:gap-8 xl:h-[187px]"
                src={movie.thumbnail.regular.large}
              />
            </div>

            <div
              onClick={() => handleClick(movie._id)}
              className="absolute top-0 right-0 mt-2 mr-2"
            >
              {bookmarked.includes(movie._id) ? (
                <div className="h-8 w-8 bg-[#10141E] opacity-[50%] rounded-full flex items-center justify-center">
                  <img src={bookmarkFull} alt="bookmarkEmpty" />
                </div>
              ) : (
                <div className="h-8 w-8 bg-[#10141E] bg-opacity-[50%] rounded-full flex items-center justify-center">
                  <img src={bookmarkEmpty} alt="bookmarkEmpty" />
                </div>
              )}
            </div>
            <div className="flex text-white opacity-[75%] items-center text-xs mb-2 lg:text-[13px]">
              <div>{movie.year}</div>
              <div className="bg-white rounded-full w-[3px] h-[3px] ml-[6px]" />
              <img className="w-3 h-3 ml-[6px]" src={movieLogoWhite} />
              <div className="ml-1">{movie.category}</div>
              <div className="bg-white rounded-full w-[3px] h-[3px] ml-[6px]" />
              <div className="ml-[6px]">{movie.rating}</div>
            </div>
            <h1 className="text-[15px] text-white mb-4 font-bold lg:text-xl">
              {movie.title}
            </h1>
          </div>
        ))}
    </div>
  );
};
export default AllMoviesComponent;
