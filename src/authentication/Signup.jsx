import React, { useState } from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  // const handleSignup = () => {
  //   createUserWithEmailAndPassword(auth, data.email, data.password)
  //     .then(
  //       signInWithEmailAndPassword(auth, data.email, data.password).then(
  //         updateProfile(auth.currentUser, { displayName: data.username })
  //       )
  //     )
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // User is successfully created
        const user = userCredential.user;
        return updateProfile(user, { displayName: data.username }).then(() => {
          // Profile updated successfully
          console.log("Profile updated with username:", data.username);
          return user;
        });
      }) // User is already signed in after account creation
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signup">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
        alt=""
      />
      <input
        type="text"
        placeholder="Mobile Number or Email"
        name="email"
        onChange={handleChange}
        value={data.email}
      />
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        onChange={handleChange}
        value={data.name}
      />
      <input
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleChange}
        value={data.username}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={data.password}
      />
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
}

export default Signup;
