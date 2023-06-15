import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClasses = () => {
  const classes = useLoaderData();

  const handleUpdateClasses = (event) => {
    event.preventDefault();

    const form = event.target;

    const className = form.className.value;

    const price = parseFloat(form.price.value);
    const available_seats = parseInt(form.available_seats.value);

    const UpdateClass = {
      className,
      price,
      available_seats,
    };

    fetch(`https://fluentify-server.vercel.app/updateClasses/${classes._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class Updated Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="w-[90%]">
      <h1 className="text-4xl font-semibold text-center">Update Class</h1>
      <div>
        <form
          onSubmit={handleUpdateClasses}
          className="grid grid-cols-6 gap-x-4 gap-y-8"
        >
          <div className="form-control col-span-6">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="className"
              defaultValue={classes.className}
              placeholder="Class Name"
              className="pl-4 h-12 focus:outline-blue-500   border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={classes.price}
              placeholder="price"
              className="pl-4 h-12 focus:outline-blue-500   border-gray-600 border rounded"
            />
          </div>
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="text"
              name="available_seats"
              defaultValue={classes.available_seats}
              placeholder="Available Seats"
              className="pl-4 h-12 focus:outline-blue-500   border-gray-600 border rounded"
            />
          </div>

          <div className="form-control col-span-6">
            <input
              type="submit"
              className="btn bg-blue-500 hover:bg-blue-700 border-0"
              value="Update Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClasses;
