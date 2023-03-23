import React from "react";
import Swal from "sweetalert2";
const useAddListing = () => {
  const handelUserAddListing = (data) => {
    console.log("Add listing");
    alert("Add listing");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    })

  };

  const handelOnSubmit = () => {
    console.log("Submit");
  }

  return {
    handelUserAddListing,
    handelOnSubmit
  };
};

export default useAddListing;
