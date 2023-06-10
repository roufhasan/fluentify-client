import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return setError("Password Didn't Matched");
    }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <div className="bg-white md:bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] min-h-screen flex flex-col justify-center py-[1%]">
      <div className="card-body bg-white w-full md:w-1/2 mx-auto rounded-md">
        <h2 className="text-3xl text-center font-medium">Sign Up</h2>
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
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
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
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
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
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
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
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
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
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign Up"
              className="btn bg-blue-500 border-0 hover:bg-yellow-400 hover:text-black"
            />
          </div>
        </form>
        <div>
          <p className="text-red-500 text-center">
            <small></small>
          </p>
          <div className="divider mt-6">OR</div>
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
