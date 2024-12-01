import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCoffee = {
      name: form.name.value,
      quantity: form.quantity.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    console.log(updatedCoffee);
    // You can send this data to a server here if needed.
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-3xl bg-[#F4F3F0] p-12 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4 font-rancho text-gray-700">
          Update Coffee: {coffee.name}
        </h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full bg-white"
                required
              />
            </div>

            {/* Chef Field */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Quantity
                </span>
              </label>
              <input
                type="text"
                defaultValue={quantity}
                name="quantity"
                placeholder="Enter coffee quantity"
                className="input input-bordered w-full bg-white"
                required
              />
            </div>

            {/* Supplier Field */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Supplier
                </span>
              </label>
              <input
                type="text"
                defaultValue={supplier}
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full bg-white"
                required
              />
            </div>

            {/* Taste Field */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Taste
                </span>
              </label>
              <input
                type="text"
                defaultValue={taste}
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full bg-white"
                required
              />
            </div>

            {/* Category Field */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Category
                </span>
              </label>
              <input
                type="text"
                defaultValue={category}
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full bg-white"
                required
              />
            </div>

            {/* Details Field */}
            <div>
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Details
                </span>
              </label>
              <input
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="textarea textarea-bordered w-full bg-white"
                required
              ></input>
            </div>

            {/* Photo Field */}
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Photo
                </span>
              </label>
              <input
                type="text"
                defaultValue={photo}
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full bg-white"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              className="px-6 py-2 rounded-lg font-bold font-rancho bg-[#D2B48C] text-gray-700 w-full"
              type="submit"
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
