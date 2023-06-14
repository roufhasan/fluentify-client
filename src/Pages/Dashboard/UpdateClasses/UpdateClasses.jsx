const UpdateClasses = () => {
  //   const classes = useLoaderData();

  const handleUpdateClasses = (event) => {
    event.preventDefault();

    const form = event.target;

    const className = form.className.value;

    const price = parseFloat(form.price.value);
    const available_seats = parseInt(form.available_seats.value);

    const UpdateToy = {
      className,
      price,
      available_seats,
    };
    console.log(UpdateToy);
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
