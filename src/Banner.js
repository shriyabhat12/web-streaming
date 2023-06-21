import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Button from "@material-ui/core/Button";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import CloseIcon from "@mui/icons-material/Close";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("temporary unavailabe"));
    }
  };

  const opts = {
    height: "550",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          {trailerOpen ? (
            <Button
              startIcon={<CloseIcon />}
              variant="contained"
              className="banner__button"
              onClick={() => {
                handleTrailer(movie);
                setTrailerOpen(false);
              }}
            >
              Close Trailer
            </Button>
          ) : (
            <Button
              startIcon={<PlayArrowRoundedIcon />}
              className="banner__button"
              variant="contained"
              onClick={() => {
                handleTrailer(movie);
                setTrailerOpen(true);
              }}
            >
              Play Trailer
            </Button>
          )}
          <h1 className="banner__description">
            {truncate(movie?.overview, 100)}
          </h1>

          <div className="banner__trailer">
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
