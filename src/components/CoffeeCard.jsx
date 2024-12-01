import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, supplier, photo, taste } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side shadow-xl p-4">
      {/* Coffee Image */}
      <figure>
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 object-cover rounded-md"
        />
      </figure>

      {/* Coffee Details */}
      <div className="flex justify-between w-full p-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-black">Name: {name}</h2>
          <p className="text-gray-500">Supplier: {supplier}</p>
          <p className="text-gray-500">Taste: {taste} Taka</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button className="btn btn-outline btn-info btn-sm flex items-center gap-2">
            <FaEye />
          </button>
          <Link
            to={`updateCoffee/${_id}`}
            className="btn btn-outline btn-warning btn-sm flex items-center gap-2"
          >
            <FaPen />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-error btn-sm flex items-center gap-2"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
