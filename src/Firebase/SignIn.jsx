import GoogleAuth from "./GoogleAuth";

const SignIn = ({ handleChange, handleSubmit }) => {
  return (
    <div className=" flex flex-col ">
      <form className="flex flex-col gap-4 p-3  " onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
          className="outline-blue-400 border  rounded-lg p-2"
        />

        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          required
          className="outline-blue-400 border  rounded-lg p-2"
        />

        <button
          type="submit"
          className=" bg-slate-700 text-white rounded-lg uppercase hover:opacity-90 p-3 transition:all duration-500 ease-in-out"
        >
          Sign-In
        </button>
      </form>
      <GoogleAuth />
    </div>
  );
};
export default SignIn;
