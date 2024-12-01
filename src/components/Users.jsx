import React, { useState } from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = (id) => {
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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your User has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };
  return (
    <div className="text-black  mx-auto">
      <h2 className="text-3xl text-center p-8 font-bold bg-[#D2B48C]">
        Total Users {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Date</th>
              <th>Last Login At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn btn-outline btn-info btn-sm flex items-center gap-2">
                      <FaEye />
                    </button>
                    <Link
                      //   to={`updateCoffee/${_id}`}
                      className="btn btn-outline btn-warning btn-sm flex items-center gap-2"
                    >
                      <FaPen />
                    </Link>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="btn btn-outline btn-error btn-sm flex items-center gap-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
