import search from "../assets/icon-search.svg";
import axios from "axios";
import { allMovieTypes } from "../types/allMovieTypes.js";
import { useState, useEffect } from "react";
import movieLogoWhite from "../assets/icon-category-movie.svg";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";

const tvSeries = () => {
  const [movies, setMovies] = useState<allMovieTypes[]>([]);

  const url = "http://localhost:3000/api/allMovies";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(url);
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="bg-black pt-[27px] pb-[60px]">
      <div className="flex items-center pl-[19px] pr-[102px] gap-4 mb-[27px]">
        <img className="w-[24px] h-[24px]" src={search} />
        <input
          className="text-white font-outfit text-base w-full outline-none bg-transparent"
          placeholder="Search for movies or TV series"
        />
      </div>

      <div className="px-4 ">
        <h1 className="text-xl font-outfit text-white mb-6">
          Recomended for you
        </h1>
        <div className="flex flex-wrap  justify-between mb-4">
          {movies
            .filter((movie) => movie.category === "TV Series")
            .map((movie, index) => (
              <div key={index} className="relative">
                <div>
                  <img
                    className="w-[164px] h-[110px] rounded-lg mb-2"
                    src={movie.thumbnail.regular.small}
                  />
                </div>

                <div className="absolute top-0 right-0 mt-2 mr-2">
                  {movie.isBookmarked ? (
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
      </div>
    </div>
  );
};

export default tvSeries;
