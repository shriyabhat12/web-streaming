import React from "react";
import Nav from "./Nav";
import "./ComedyMovies.css";
import ComedyMovies from "./ComedyMovies";
import requests from "./Requests";

function Comedy() {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <ComedyMovies
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}

export default Comedy;
