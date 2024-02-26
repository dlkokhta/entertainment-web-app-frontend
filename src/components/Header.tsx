import logo from "../assets/logo.svg";
import navHome from "../assets/icon-nav-home.svg";
// import navHomeWhite from "../assets/icon-nav-home.svg"
import navMovies from "../assets/icon-nav-movies.svg";
import navTv from "../assets/icon-nav-tv-series.svg";
import navBookmark from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";
import { useState } from "react";

const Header = () => {
  const [clickedIcon, setClickedIcon] = useState<String>("home");

  const homeClickHandler = () => {
    setClickedIcon("home");
  };
  return (
    <div className="relative">
      <div className="bg-semyDarck flex justify-between items-center p-4 w-full">
        <div>
          <img className="w-[25px] h-5" src={logo} />
        </div>
        <div className="w-[134px]">
          <div className="flex justify-between">
            {/* <img onClick={homeClickHandler} className="w-4 h-4" src={navHome} /> */}

            <svg
              onClick={homeClickHandler}
              width="16" // Set width to 16px
              height="16" // Set height to 16px
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" // Adjust viewBox accordingly
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                fill={clickedIcon ? "#FFFFFF" : "#5A698F"}
              />
            </svg>

            <img className="w-4 h-4" src={navMovies} />

            <img className="w-4 h-4" src={navTv} />

            <img className="w-[14px] h-4" src={navBookmark} />
          </div>
        </div>
        <div className="h-6 w-6">
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
};

export default Header;
