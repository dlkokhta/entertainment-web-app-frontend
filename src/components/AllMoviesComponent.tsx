import { useSelector } from "react-redux";
import { RootState } from "../store/store.js";
import { allMovieTypes } from "../types/allMovieTypes.js";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import movieLogoWhite from "../assets/icon-category-movie.svg";

const AllMoviesComponent = (props: any) => {
  const allMovies: allMovieTypes[] = useSelector(
    (store: RootState) => store.allMovies.movies
  );
  console.log("props.allGategory", props.allCategory);
  return (
    <div className="flex flex-wrap  justify-between mb-4">
      {allMovies

        .slice(2)

        // .filter((movie) =>
        //   props.category ? movie.category === props.category : movie.category
        // )
        .map((movie, index) => (
          <div key={index} className="relative">
            <div>
              <img
                className="w-[164px] h-[110px] rounded-lg mb-2"
                src={movie.thumbnail.regular.small}
              />
            </div>

            <div
              onClick={() => props.handleClick(movie.movieID)}
              className="absolute top-0 right-0 mt-2 mr-2"
            >
              {movie.movieID !== "f4fb4318-41dd-4265-8412-f934b3ff25ed" ? (
                <div className="h-8 w-8 bg-[#10141E] opacity-[50%] rounded-full flex items-center justify-center">
                  <img src={bookmarkFull} alt="bookmarkEmpty" />
                </div>
              ) : (
                <div className="h-8 w-8 bg-[#10141E] bg-opacity-[50%] rounded-full flex items-center justify-center">
                  <img src={bookmarkEmpty} alt="bookmarkEmpty" />
                </div>
              )}
            </div>
            <div className="flex text-white opacity-[75%] items-center text-xs mb-2">
              <div>{movie.year}</div>
              <div className="bg-white rounded-full w-[3px] h-[3px] ml-[6px]" />
              <img className="w-3 h-3 ml-[6px]" src={movieLogoWhite} />
              <div className="ml-1">{movie.category}</div>
              <div className="bg-white rounded-full w-[3px] h-[3px] ml-[6px]" />
              <div className="ml-[6px]">{movie.rating}</div>
            </div>
            <h1 className="text-[15px] text-white mb-4 font-bold">
              {movie.title}
            </h1>
          </div>
        ))}
    </div>
  );
};
export default AllMoviesComponent;
