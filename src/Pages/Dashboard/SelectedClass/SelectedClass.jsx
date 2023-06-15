import Swal from "sweetalert2";
import useSelectedClass from "../../../hooks/useSelectedClass";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const [classesSelected, refetch] = useSelectedClass();

  const handleDelete = (selectedClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${selectedClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold text-center">
        My Seletected Class {classesSelected.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classesSelected.map((selectedClass, index) => (
              <tr key={selectedClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={selectedClass.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{selectedClass.name}</div>
                    </div>
                  </div>
                </td>
                <td>{selectedClass.instructor_name}</td>
                <td>${selectedClass.price}</td>
                <th>
                  <Link
                    to={`/dashboard/payment/${selectedClass.selectedClassId}`}
                  >
                    <button className="btn bg-green-700 text-white hover:bg-green-900">
                      Pay
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(selectedClass)}
                    className="btn bg-[#D41D2D] text-white hover:bg-[#85050f]"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
