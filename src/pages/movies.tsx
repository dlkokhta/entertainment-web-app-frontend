import { allMovieTypes } from "../types/allMovieTypes.js";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.js";
import AllMoviesComponent from "../components/AllMoviesComponent.js";
import SearchComponent from "../components/SearchComponent.js";

const Movies = () => {
  const movies: allMovieTypes[] = useSelector(
    (store: RootState) => store.allMovies.movies
  );
  const movieCategory = movies.map((movie) => movie.category === "Movie");

  return (
    <div className="bg-black pt-[27px] pb-[60px] h-screen">
      <SearchComponent placeholder="Search for movies" />
      <div className="px-4 ">
        <h1 className="text-xl font-outfit text-white mb-6">Movies</h1>
        <AllMoviesComponent movieCategory={movieCategory} />
      </div>
    </div>
  );
};

export default Movies;
