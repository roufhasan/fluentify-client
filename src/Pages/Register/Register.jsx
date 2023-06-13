import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return setError("Password Didn't Matched");
    }
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              image: data.photoURL,
            };

            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        const saveUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate("/");
          });
      })
      .catch((errror) => {
        setError(errror);
      });
  };

  return (
    <div className="bg-white md:bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] min-h-screen flex flex-col justify-center py-28">
      <div className="card-body bg-white w-full md:w-1/2 mx-auto rounded-md">
        <h2 className="text-3xl text-center font-medium border-b-2 border-[#4e54c8] pb-4">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name")}
              placeholder="Name"
              required
              className="pl-4 h-12 focus:outline-[#4e54c8]  border-gray-600 border-b"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email")}
              placeholder="Email"
              required
              className="pl-4 h-12 focus:outline-[#4e54c8]  border-gray-600 border-b"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[-!$%^&*()_+|~=`{}[\]:/;<>?,.@#])/,
              })}
              placeholder="Password"
              required
              className="pl-4 h-12 focus:outline-[#4e54c8]  border-gray-600 border-b"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-400">
                Password must be atleast 6 character.
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-400">
                Password must have one uppercase & one special character.
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-medium">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              required
              className="pl-4 h-12 focus:outline-[#4e54c8]  border-gray-600 border-b"
            />
            <p className="text-red-500 my-2">
              <small>{error}</small>
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-lg font-medium">Photo URL</span>
            </label>
            <input
              type="url"
              name="photURL"
              {...register("photoURL")}
              placeholder="photoURL"
              required
              className="pl-4 h-12 focus:outline-[#4e54c8]  border-gray-600 border-b"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="btn border-0 bg-gradient-to-r from-[#4b6cb7] to-[#182848] text-white"
            />
          </div>
        </form>
        <div>
          <p className="text-red-500 text-center">
            <small></small>
          </p>
          <div className="divider my-6">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-[#e75447] hover:bg-[#ea4335] text-white py-2 px-8 rounded mt-6"
          >
            <FaGoogle></FaGoogle> Log In With Google
          </button>
        </div>
        <div className="text-center mt-4">
          <p>
            Already have an accont?{" "}
            <Link to="/login" className="font-semibold text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
