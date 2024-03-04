import search from "../assets/icon-search.svg";
import { allMovieTypes } from "../types/allMovieTypes.js";
import movieLogoWhite from "../assets/icon-category-movie.svg";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../assets/icon-bookmark-full.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.js";
import { useDispatch } from "react-redux";
import { setBookmarked } from "../store/bookmarkedSlice.js";
import AllMoviesComponent from "../components/AllMoviesComponent.js";
import axios from "axios";
const Home = () => {
  const allMovies: allMovieTypes[] = useSelector(
    (store: RootState) => store.allMovies.movies
  );
  const allCategory = allMovies.map((movie) => movie.category);
  // console.log("category", category);

  const bookmarked = useSelector(
    (store: RootState) => store.bookmarked.bookmark
  );

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.4, // Show more slides at once
    slidesToScroll: 1, // Scroll one slide at a time
    prevArrow: <></>,
    nextArrow: <></>,
  };
  const dispatch = useDispatch();
  const handleClick = async (movieId: string) => {
    const url = "http://localhost:3000/api/postBookmark";
    const token = localStorage.getItem("authToken");
    const emailValue = localStorage.getItem("data.email");

    // const frontBookmarked: string[] = [];

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

  return (
    <>
      <div className="bg-black pt-[27px] pb-[60px]">
        <div className="flex items-center pl-[19px] pr-[102px] gap-4 mb-[27px]">
          <img className="w-[24px] h-[24px]" src={search} />
          <input
            className="text-white font-outfit text-base w-full outline-none bg-transparent"
            placeholder="Search for movies or TV series"
          />
        </div>
        <div className="mb-[26px]">
          <h1 className="text-white pl-4 mb-4">Trending</h1>
          <Slider {...settings} className="pl-4">
            {allMovies.map((movie, index) =>
              movie.isTrending ? (
                <div key={index} className="relative">
                  <img
                    className="rounded-xl w-[240px] h-[140px]"
                    src={movie.thumbnail.trending.small}
                    alt="Thumbnail"
                  />

                  <div className="absolute top-0 font-outfit pt-2 pr-2 pb-4 pl-4 h-full w-[240px]">
                    <div className="flex">
                      <div className="flex flex-col mt-[80px]">
                        <div className="flex text-white opacity-[75%] items-center text-xs">
                          <div>{movie.year}</div>
                          <div className="bg-white ml-2 rounded-full w-[3px] h-[3px]" />
                          <img
                            className="w-3 h-3 ml-[6px]"
                            src={movieLogoWhite}
                          />
                          <div className="ml-[6px]">{movie.category}</div>
                        </div>
                        <h1 className="text-white text-[15px] font-bold">
                          {movie.title}
                        </h1>
                      </div>

                      <div className="flex flex-col ml-auto h-full gap-14 mr-2 ">
                        <div onClick={() => handleClick(movie._id)}>
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

                        <div className="items-center w-[34px] h-[21px]  bg-[#10141E] bg-opacity-[50%] rounded-full flex justify-center">
                          <div className="text-white text-[13px]">
                            {movie.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </Slider>
        </div>
        <div className="px-4 ">
          <h1 className="text-xl font-outfit text-white mb-6">
            Recomended for you
          </h1>
          <AllMoviesComponent allCategory={allCategory} />
          {/* <div className="flex flex-wrap  justify-between mb-4">
            {allMovies.slice(2).map((movie, index) => (
              <div key={index} className="relative">
                <div>
                  <img
                    className="w-[164px] h-[110px] rounded-lg mb-2"
                    src={movie.thumbnail.regular.small}
                  />
                </div>

                <div
                  onClick={() => handleClick(movie.movieID)}
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
