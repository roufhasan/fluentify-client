import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/user-not-found).") {
          setError("This account doesn't exist.");
        } else if (error.message == "Firebase: Error (auth/wrong-password).") {
          setError("Your password is incorrect");
        }
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((errror) => {
        setError(errror);
      });
  };

  return (
    <div className="bg-white md:bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] min-h-screen flex flex-col justify-center py-[1%]">
      <div className="card-body bg-white w-full md:w-1/2 mx-auto rounded-md">
        <h2 className="text-3xl text-center font-medium">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              {...register("email")}
              required
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-medium">Password</span>
            </label>
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                {...register("password")}
                required
                className="w-full pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  size="24px"
                  className="absolute top-3 right-5 w-7"
                ></FaEyeSlash>
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  size="24px"
                  className="absolute top-3 right-5 w-7"
                ></FaEye>
              )}
            </div>
            <p className="text-red-500">
              <small>{error}</small>
            </p>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Log In"
              className="btn bg-blue-500 border-0 hover:bg-yellow-400 hover:text-black"
            />
          </div>
        </form>
        <div>
          <p className="text-red-500 text-center"></p>
          <div className="divider mt-6">OR</div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 bg-[#e75447] hover:bg-[#ea4335] text-white py-2 px-8 rounded mt-6"
        >
          <FaGoogle></FaGoogle> Log In With Google
        </button>
        <div className="text-center mt-4">
          <p>
            New to Fluentify?{" "}
            <Link to="/signup" className="font-semibold text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
