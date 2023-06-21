import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title={"ORIGINALS"}
        fetchUrl={requests.fetchCrimeMovies}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"History Movies"} fetchUrl={requests.fetchHistoryMovies} />
      <Row title={"Animation Movies"} fetchUrl={requests.fetchAnimeMovies} />
      <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFantasyMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Top-Rated Movies"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title={"Documentaries Movies"}
        fetchUrl={requests.fetchDocumentariesMovies}
      />
      <Row title={"Crime Movies"} fetchUrl={requests.fetchCrimeMovies} />
      <Row title={"Mystery Movies"} fetchUrl={requests.fetchMysteryMovies} />
      <Row title={"Sci-fi Movies"} fetchUrl={requests.fetchSciFiMovies} />
    </div>
  );
}

export default HomeScreen;
