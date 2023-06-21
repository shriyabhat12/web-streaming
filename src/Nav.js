// import React, { useState, useEffect } from "react";
// import "./Nav.css";
// import logo from "./images/The_Peaky_Blinders_Coffee_Shop-removebg-preview.png";
// import avatar from "./images/avatar.png";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

// function Nav() {
//   const [show, handleShow] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const history = useNavigate();

//   function handleSubmit(e) {
//     e.preventDefault();

//     history("/profile");
//   }

//   let navigate = useNavigate();
//   const routeChange = () => {
//     let path = "/";
//     navigate(path);
//   };

//   const transitionNavBar = () => {
//     if (window.scrollY > 100) {
//       handleShow(true);
//     } else {
//       handleShow(false);
//     }
//   };

//   const handleDropdown = () => {
//     if (!dropdown) {
//       setDropdown(true);
//     } else {
//       setDropdown(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", transitionNavBar);
//     return () => window.removeEventListener("scroll", transitionNavBar);
//   }, []);
//   return (
//     <div className={`nav ${show && "nav__grey"}`}>
//       <div className="nav__contents">
//         <img
//           className="nav__logo"
//           onClick={routeChange}
//           src={logo}
//           alt="./images/web_logo.png"
//         />
//         <img
//           onClick={handleDropdown}
//           className="nav__avatar"
//           src={avatar}
//           alt="./images/avatar.png"
//         />
//         <ArrowDropDownIcon style={{ color: "white", size: 40 }} />
//         {dropdown && (
//           <div className="nav__account-dropdown" onMouseLeave={handleDropdown}>
//             <ul className="nav__dropdown-profiles">
//               <li className="nav__dropdown-profile">
//                 <img
//                   src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeeinKf4qjR-VAaPOviRjcglAoSBnJKs2fY1tfA0nEj-xw-O_KK3gcSUYa2BOh9hE6ThxPEvcS4djBufuLM2ZV0.png?r=535"
//                   alt=""
//                 />
//                 <p>Avneesh</p>
//               </li>
//               <li className="nav__dropdown-profile">
//                 <img
//                   src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZIK6jqsRHlhlEmDoON8jYhl3g9VML7tmyNKM-HIpNkeAJJRKEyUVCig6fqILzcM_dspEFHOczXgfQgtHCGxiUI.png?r=a29"
//                   alt=""
//                 />
//                 <p>Sonny</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Nav;

import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import logo from "./images/The_Peaky_Blinders_Coffee_Shop-removebg-preview.png";
import avatar from "./images/avatar.jpg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    history("/profile");
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  let navigate1 = useNavigate();
  const routeProfiles = () => {
    let path = "/profiles";
    navigate(path);
  };

  let navigate2 = useNavigate();
  const routeProfile = () => {
    let path = "/profile";
    navigate(path);
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__contents1">
          <img src={logo} alt="" className="nav__logo" onClick={routeChange} />
        </div>
        <div className="nav__contents2">
          <div className="nav__contents2-profile" onClick={handleDropdown}>
            <img src={avatar} alt="" className="nav__avatar" />
            <ArrowDropDownIcon style={{ color: "transparent", size: 40 }} />
            {dropdown && (
              <div
                className="nav__account-dropdown"
                onMouseLeave={handleDropdown}
              >
                <ul className="nav__dropdown-profiles">
                  <li className="nav__dropdown-profile">
                    <img src={avatar} alt="" />
                    <p>Anmol</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZIK6jqsRHlhlEmDoON8jYhl3g9VML7tmyNKM-HIpNkeAJJRKEyUVCig6fqILzcM_dspEFHOczXgfQgtHCGxiUI.png?r=a29"
                      alt=""
                    />
                    <p>Akshit</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://media.istockphoto.com/id/1284693553/vector/anonymous-vector-icon-incognito-sign-privacy-concept-human-head-with-glitch-face-personal.jpg?s=612x612&w=0&k=20&c=7rAGNOUEM9B_J3NYPS4j0uYPwZlX0hebFKUhG65b4vI="
                      alt=""
                    />
                    <p>Rohit</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeWhh90Jhr88FfkPPsQzlkfArIFv6ztxOLHR3gweFd7iqahxtOH8Cqw7GuSfQJBcxkbMkINDQDx1oFQw3c2gPH0.png?r=cea"
                      alt=""
                    />
                    <p>Sonny</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeW5HcypgSvS07jaMxDem7uIudk2vYwvVAYKBiwj9QJdRhHAxjwdVSvYJ1dlXVqACKABoBnzlVZehSG-VzhEp5A.png?r=8fb"
                      alt=""
                    />
                    <p>Danish</p>
                  </li>
                </ul>
                <div className="nav__dropdown-manage">
                  <p onClick={routeProfiles}>Manage Profiles</p>
                </div>
                <ul className="nav__dropdown-account">
                  <li onClick={routeProfile}>Account</li>
                  <li>Help center</li>
                  <li onClick={() => auth.signOut()}>Sign out of StreamX</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
