import React from "react";
import Nav from "./Nav";
import img from "./images/avatar.jpg";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";

function ProfileScreen() {
  const user = useSelector(selectUser);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <div className="profileScreen">
      <div className="navbar">
        <Nav />
      </div>
      <div className="profileScreen__body">
        <h1>Your Profile</h1>
        <div className="profileScreen__info">
          <img src={img} alt="" />
          <div className="profileScreen__details">
            <h2>{user.Name || user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <p>
                Active Plan:{" "}
                <span style={{ color: "rgb(16,182,222)" }}>Premium</span>
              </p>
              <div className="profileScreen__types">
                <Stack spacing={2} sx={{ width: "100%" }}>
                  <Alert severity="success">₹99 - Mobile</Alert>
                  <Button variant="outlined">₹199 - Basic</Button>
                  <Button variant="outlined">₹499 - Premium</Button>
                </Stack>
              </div>
              <button
                onClick={() => {
                  auth.signOut();
                  routeChange();
                }}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
