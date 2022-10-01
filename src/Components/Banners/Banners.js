import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from "../../axios";
import "./Banners.css";

function Banners() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((Response) => {
        setMovie(Response.data.results[0]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `Url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banners"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banners;
