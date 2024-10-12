import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { app } from "./ConfigureFirebase";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./ConfigureFirebase";

import { addUserToDatabase } from "./Database";
const Authentication = () => {
  const [toggleSignUp, setToggleSignUp] = useState(true);
  const auth = getAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    // Firebase Authentication basic setup
    const email = formData.email;
    const password = formData.password;
    const username = formData.username;
    // Firebase Authentication createUserWithEmailAndPassword
    addUserToDatabase(username, email, password);
    // if (toggleSignUp) {
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       // Signed up
    //       const user = userCredential.user;

    //       // ...
    //     })
    //     .then(() => {
    //       alert("User Created Successfully");
    //       setFormData({ email: "", password: "", username: "" });
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //       // ..
    //     });
    // } else {
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       alert("User Signed In Successfully");
    //       // Signed in
    //       const user = userCredential.user;
    //       // ...
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //     });

    //   //Firebase Authentication signInWithEmailAndPassword
    // }
  };

  return (
    <div
      className=" flex flex-col max-w-md mx-auto bg-customBlue
  rounded-xl shadow-lg py-6 px-3 border-2"
    >
      <div className=" flex gap-32 p-5  mx-auto items-center">
        <button
          type="button"
          className="  border border-white-700 text-white hover:bg-green-500 hover:text-white hover:border-white  rounded-lg p-2 transition:all duration-500 ease-in-out"
          onClick={() => {
            setToggleSignUp(true);
          }}
        >
          Sign-up
        </button>
        <button
          type="button"
          className="  border border-white-700 text-white   rounded-lg p-2 hover:bg-green-500 hover:text-white hover:border-whitetransition:all duration-500 ease-in-out"
          onClick={() => {
            setToggleSignUp(false);
          }}
        >
          Sign-In
        </button>
      </div>
      {toggleSignUp ? (
        <SignUp handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : (
        <SignIn handleChange={handleChange} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Authentication;
