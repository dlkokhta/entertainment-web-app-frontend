import { allMovieTypes } from "../types/allMovieTypes.js";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.js";
import AllMoviesComponent from "../components/AllMoviesComponent.js";
import SearchComponent from "../components/SearchComponent.js";

const tvSeries = () => {
  const allMovies: allMovieTypes[] = useSelector(
    (store: RootState) => store.allMovies.movies
  );

  return (
    <div className="bg-black pt-[27px] pb-[60px] h-screen">
      <SearchComponent placeholder="Search for TV series" />

      <div className="px-4 ">
        <h1 className="text-xl font-outfit text-white mb-6">TV Series</h1>
        <AllMoviesComponent />
      </div>
    </div>
  );
};

export default tvSeries;
