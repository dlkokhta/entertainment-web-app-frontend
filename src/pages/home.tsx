import logo from "../assets/logo.svg";
import navHome from "../assets/icon-nav-home.svg";
import navMovies from "../assets/icon-nav-movies.svg";
import navTv from "../assets/icon-nav-tv-series.svg";
import navBookmark from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";

const Home = () => {
  return (
    <>
      <div className="relative bg-black">
        <header className="absolute bg-semyDarck flex justify-between items-center p-4 w-full">
          <div>
            <img className="w-[25px] h-5" src={logo} />
          </div>
          <div className="w-[134px]">
            <div className="flex justify-between">
              <img className="w-4 h-4" src={navHome} />

              <img className="w-4 h-4" src={navMovies} />

              <img className="w-4 h-4" src={navTv} />

              <img className="w-[14px] h-4" src={navBookmark} />
            </div>
          </div>
          <div className="h-6 w-6">
            <img src={avatar} />
          </div>
        </header>
      </div>
    </>
  );
};

export default Home;
