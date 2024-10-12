import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const Auth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("User Signed In Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <button
      type="button"
      className="bg-red-500 text-white m-3  p-3 rounded-lg hover:opacity-90 uppercase"
      onClick={Auth}
    >
      Continue with google
    </button>
  );
};

export default GoogleAuth;
