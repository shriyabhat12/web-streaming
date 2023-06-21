import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import "./Profiles.css";
import Nav from "./Nav";
import avatar from "./images/avatar.jpg";

function Profiles() {
  return (
    <div className="profiles">
      <Nav />
      <div className="profiles__body">
        <h1>Manage Profiles:</h1>
        <div className="profiles__container">
          <div
            className="profiles__profile"
            style={{
              backgroundImage: `url(${avatar})`,
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon className="edit" style={{ color: "white" }} />
            <h3>Anmol</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABYlSMWtPaFD1O-rnzo6a96sg5v8nOxLuqi7ULy4Fgk1P7vH8kocPWCGD0WV2YIjfLNnxCkRNd3IvkkrAErKdGKaGmEEn.png?r=a29)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />

            <h3>Akshit</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1284693553/vector/anonymous-vector-icon-incognito-sign-privacy-concept-human-head-with-glitch-face-personal.jpg?s=612x612&w=0&k=20&c=7rAGNOUEM9B_J3NYPS4j0uYPwZlX0hebFKUhG65b4vI=)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>Rohit</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABQSezyRh9HBbj3UkKUZudkjvwyHbNYw4IXKHetsW-lDRuqmPsrYGjj9kTIJRtNh7koRtDIIT8xsZAl91WBmCo-2b5lbL.png?r=cea)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>Sonny</h3>
          </div>
          <div
            className="profiles__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABfEfS070ckqk2cNOyk1qE04ONtZvmcai3L8LliVbA2XS1hx9bUCBXq2dhSIWFcFyWPpN6jnET1h11KUdBmYsLd4qzt73.png?r=8fb)",
            }}
          >
            <div className="profiles__avatarOpacity" />
            <EditIcon style={{ color: "white" }} />
            <h3>Danish</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
