import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from '@mui/icons-material/Search';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Image, LocalOfferOutlined } from "@mui/icons-material";
function SearchPage() {
  // here we are getting the search input from the data layer (context API) as term
  const [{ term }, dispatch] = useStateValue();
  // on taking the search term as input , this returns the response as a js object= This is the live api call
  // const {data}= useGoogleSearch(term)
  // mocking the api call => not an actual api call but it stores the result from the previous api call and stores it in response.js which is passed to data via Response
  const data = Response;
  console.log(data);
  return (
    <div className="seachPage">
      <div className="seachPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="./images/Google-logo.png"
            alt=""
          />
        </Link>
        <div className="seachPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              {/* 1 */}
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              {/* 2 */}
              <div className="searchPage__option">
                <NewspaperOutlinedIcon />
                <Link to="/news">News</Link>
              </div>
              {/* 3 */}
              <div className="searchPage__option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              {/* 4 */}
              <div className="searchPage__option">
                <LocalOfferOutlined />
                <Link to="/shopping">Shopping</Link>
              </div>
              {/* 5 */}
              <div className="searchPage__option">
                <LocationOnOutlinedIcon />
                <Link to="/maps">Maps</Link>
              </div>
              {/* 6 */}
              <div className="searchPage__option">
                <MoreVertOutlinedIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              {/* 1 */}
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              {/* 2 */}
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="searchPage__results"></div>
      </div>
    </div>  
      );
}
      export default SearchPage;
