// import search from "../assets/icon-search.svg";
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
import SearchComponent from "../components/SearchComponent.js";
import axios from "axios";

const Home = () => {
  const allMovies: allMovieTypes[] = useSelector(
    (store: RootState) => store.allMovies.movies
  );

  const bookmarked = useSelector(
    (store: RootState) => store.bookmarked.bookmark
  );

  const settings = {
    infinite: true,
    speed: 500,

    initialSlide: 2.5,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2.5,
        },
      },

      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1.6,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const handleClick = async (movieId: string) => {
    const url =
      "https://entertainment-web-app-api-production-4cd8.up.railway.app/api/postBookmark";
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

  return (
    <>
      <div className="pt-[27px] pb-[70px] min-h-full">
        <SearchComponent placeholder="Search for movies or TV series" />

        <h1 className="text-white pl-4 mb-4 text-xl lg:text-[32px] lg:pl-0 lg:pb-6">
          Trending
        </h1>
        <Slider {...settings} className="">
          {allMovies.map((movie) =>
            movie.isTrending ? (
              <div className="lg:ml-[-16px] xl:ml-[-32px]">
                <div className="relative ml-4 mb-10 h-full xl:ml-8">
                  <img
                    className="rounded-xl"
                    src={movie.thumbnail.trending.small}
                    alt="Thumbnail"
                  />

                  <div className="absolute top-0 font-outfit pt-2 pr-2 pb-4 pl-4 h-full w-full">
                    <div className="flex w-full h-full">
                      <div className="flex flex-col mt-auto">
                        <div className="flex text-white opacity-[75%] items-center text-xs lg:mt-auto lg:text-[15px]">
                          <div className="">{movie.year}</div>
                          <div className="bg-white ml-2 rounded-full w-[3px] h-[3px]" />
                          <img
                            className="w-3 h-3 ml-[6px]"
                            src={movieLogoWhite}
                          />
                          <div className="ml-[6px]">{movie.category}</div>
                          <div className="bg-white ml-2 rounded-full w-[3px] h-[3px]" />

                          <div className="text-white text-[13px] ml-2">
                            {movie.rating}
                          </div>
                        </div>
                        <h1 className="text-white text-[15px] font-bold lg:text-6">
                          {movie.title}
                        </h1>
                      </div>

                      <div className="flex flex-col ml-auto h-full gap-14 mr-2 ">
                        <div onClick={() => handleClick(movie._id)}>
                          {bookmarked.includes(movie._id) ? (
                            <div className="h-8 w-8 bg-[#10141E] opacity-[50%] rounded-full flex items-center justify-center ">
                              <img src={bookmarkFull} alt="bookmarkEmpty" />
                            </div>
                          ) : (
                            <div className="h-8 w-8 bg-[#10141E] bg-opacity-[50%] rounded-full flex items-center justify-center">
                              <img src={bookmarkEmpty} alt="bookmarkEmpty" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </Slider>

        <div className="">
          <h1 className="text-xl font-outfit text-white mb-6 ml-4 lg:text-[32px] lg:mb-6">
            Recomended for you
          </h1>
          <AllMoviesComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
