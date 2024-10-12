import GoogleAuth from "./GoogleAuth";

const SignUp = ({ handleChange, handleSubmit }) => {
  return (
    <>
      <form className="flex flex-col gap-5 p-4  " onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          className="outline-blue-400 border  rounded-lg p-2"
        />
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
          Sign-up
        </button>
      </form>
      <GoogleAuth />
    </>
  );
};

export default SignUp;
