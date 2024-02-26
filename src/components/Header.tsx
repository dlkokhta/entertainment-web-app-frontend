import logo from "../assets/logo.svg";
import navHome from "../assets/icon-nav-home.svg";
// import navHomeWhite from "../assets/icon-nav-home.svg"
import navMovies from "../assets/icon-nav-movies.svg";
import navTv from "../assets/icon-nav-tv-series.svg";
import navBookmark from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative ">
      <div className="bg-semyDarck flex justify-between items-center p-4 w-full">
        <div>
          <img className="w-[25px] h-5" src={logo} />
        </div>
        <div className="w-[134px]">
          <div className="flex justify-between">
            <svg
              onClick={() => handleClick("/")}
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
                fill={location.pathname === "/" ? "#FFFFFF" : "#5A698F"}
              />
            </svg>

            <svg
              onClick={() => handleClick("/movies")}
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
                d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                fill={location.pathname === "/movies" ? "#FFFFFF" : "#5A698F"}
              />
            </svg>

            <svg
              onClick={() => handleClick("/tvSeries")}
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
                d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                fill={location.pathname === "/tvSeries" ? "#FFFFFF" : "#5A698F"}
              />
            </svg>

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
