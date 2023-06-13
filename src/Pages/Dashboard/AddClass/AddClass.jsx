import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            instructorName,
            instructorEmail,
            className,
            price,
            available_seats,
          } = data;

          const newClass = {
            instructorName,
            instructorEmail,
            className,
            price: parseFloat(price),
            available_seats: parseFloat(available_seats),
            enrolled_student: parseInt(0),
            image: imgURL,
            status: "pending",
          };

          axiosSecure.post("/classes", newClass).then((data) => {
            console.log("new class posted", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New class added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="mt-12 w-4/5">
      <h2 className="text-3xl font-semibold text-center mb-8">Add New Class</h2>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-6 gap-x-4 gap-y-8"
        >
          <div className="form-control col-span-6 md:col-span-3">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              name="instructorName"
              {...register("instructorName", { required: true })}
              defaultValue={user?.displayName}
              readOnly={user.displayName ? true : false}
              placeholder="Instructor Name"
              required
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded bg-yellow-100"
            />
          </div>
          <div className="form-control col-span-6 md:col-span-3">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              name="instructorEmail"
              {...register("instructorEmail", { required: true })}
              defaultValue={user?.email}
              readOnly={user.email ? true : false}
              placeholder="Instructor Email"
              required
              className="pl-4 h-12 focus:outline-blue-500  border-gray-600 border rounded bg-yellow-100"
            />
          </div>
          <div className="form-control col-span-6 md:col-span-3">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("className", { required: true })}
              placeholder="Name"
              required
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-6 md:col-span-3">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              {...register("price", { required: true })}
              placeholder="Price"
              required
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-6 md:col-span-3">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="text"
              name="seats"
              {...register("available_seats", { required: true })}
              placeholder="Available Seats"
              required
              className="pl-4 h-12 focus:outline-blue-500 focus:bg-blue-100  border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-6 md:col-span-3">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="file"
              name="image"
              {...register("image", { required: true })}
              required
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div className="form-control col-span-6">
            <input
              type="submit"
              className="btn bg-blue-500 hover:bg-blue-700 border-0"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
