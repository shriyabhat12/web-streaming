import React, { useRef } from "react";
import "./LoginScreen.css";
import logo from "./images/icons8-google-48.png";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth, googleAuth } from "./firebase";

function LoginScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const dispatch = useDispatch();
  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(googleAuth)
      .then((result) =>
        dispatch(
          login({
            Name: result.user.displayName,
            email: result.user.email,
          })
        )
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginScreen">
      <img
        className="bg__img"
        src="https://mebincdn.themebin.com/1664271579476.jpg"
        alt=""
      />
      <div className="signupScreen">
        <form>
          <h1>Sign In</h1>
          <div className="input">
            <label>Email Address</label>
            <input ref={emailRef} placeholder="E-mail" type="email" />
          </div>
          <div className="input">
            <label>Password</label>
            <input ref={passwordRef} placeholder="Password" type="password" />
          </div>
          <button type="submit" onClick={signIn}>
            {" "}
            LogIn
          </button>
          <button type="submit" onClick={register}>
            {" "}
            Register
          </button>
          <button
            class="login-button"
            style={{ backgroundColor: "#454F5D" }}
            onClick={logIn}
          >
            <img src={logo} alt="" />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
