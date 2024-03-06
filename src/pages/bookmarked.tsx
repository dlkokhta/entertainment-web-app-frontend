import { allMovieTypes } from "../types/allMovieTypes.js";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.js";
import AllMoviesComponent from "../components/AllMoviesComponent.js";
import SearchComponent from "../components/SearchComponent.js";

const Bookmarked = () => {
  const allMovies: allMovieTypes[] = useSelector(
    (store: RootState) => store.allMovies.movies
  );
  const bookmarkedCategory = allMovies.map((movie) => movie.category);
  console.log("bookmarkedCategory", bookmarkedCategory);

  return (
    <div className="bg-black pt-[27px] pb-[60px] h-screen">
      <SearchComponent placeholder="Search for bookmarked shows" />

      <div className="px-4 ">
        <h1 className="text-xl font-outfit text-white mb-6">
          Recomended for you
        </h1>
        <AllMoviesComponent bookmarkedCategory={bookmarkedCategory} />
      </div>
    </div>
  );
};

export default Bookmarked;
