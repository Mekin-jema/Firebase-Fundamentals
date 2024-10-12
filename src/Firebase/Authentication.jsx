import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider, // for google sign-in
} from "firebase/auth";
import { useState } from "react";
import { app } from "./ConfigureFirebase";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Authentication = () => {
  const [toggleSignUp, setToggleSignUp] = useState(true);
  const auth = getAuth();
  // for google sign-in
  const googleProvider = new GoogleAuthProvider();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    // Firebase Authentication basic setup
    const email = formData.email;
    const password = formData.password;
    const username = formData.username;
    // Firebase Authentication createUserWithEmailAndPassword
    if (toggleSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // ...
        })
        .then(() => {
          alert("User Created Successfully");
          setFormData({ email: "", password: "", username: "" });
        })
        .catch((error) => {
          alert(error.message);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("User Signed In Successfully");
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          alert(error.message);
        });

      //Firebase Authentication signInWithEmailAndPassword
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex flex-col max-w-md mx-auto bg-green-100  rounded-xl shadow-lg py-6 px-3 border-2">
      <div className=" flex gap-32 p-5 items-center mx-auto items-center">
        <button
          className="  border border-green-700 hover:bg-green-500 hover:text-white hover:border-white  rounded-lg p-2 transition:all duration-500 ease-in-out"
          onClick={() => {
            setToggleSignUp(true);
          }}
        >
          Sign-up
        </button>
        <button
          className="  border border-green-700  rounded-lg p-2 hover:bg-green-500 hover:text-white hover:border-whitetransition:all duration-500 ease-in-out"
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
