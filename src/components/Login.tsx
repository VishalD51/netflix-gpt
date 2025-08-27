import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async () => {
    const message = checkValidData(
      email.current?.value,
      password.current?.value
    );
    setError(message);

    if (message) return;

    if (!isLogin) {
      console.log("test");
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          console.log("user", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="w-full relative">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_small.jpg"
        alt="logo"
        className="absolute"
      />
      <div className="absolute my-30 mx-150">
        <form
          className="bg-black p-6 w-90"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-white text-3xl p-2 m-2">
            {isLogin ? "Sing In" : "Sing Up"}
          </p>
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-2 m-4 bg-gray-600 text-white"
          />
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="p-2 m-4 bg-gray-600 text-white"
            />
          )}
          <input
            type="passwords"
            ref={password}
            placeholder="Password"
            className="p-2 m-4 bg-gray-600 text-white"
          />
          <p className="text-red-600 font-bold">{error}</p>
          <button
            className="bg-red-700 p-2 m-4 w-full text-white font-bold cursor-pointer"
            onClick={handleButtonClick}
          >
            Sumbit
          </button>

          <p
            className="text-white p-2 m-2 cursor-pointer"
            onClick={handleFormToggle}
          >
            {isLogin
              ? "New to Netflix? Sign up now."
              : "Alredy have an account, Login."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
