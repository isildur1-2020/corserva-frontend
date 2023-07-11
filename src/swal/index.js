import Swal from "sweetalert2";

export const swalSuccess = (text) => {
  Swal.fire({
    text,
    icon: "success",
    title: "Success",
  });
};

export const swalError = (text) => {
  Swal.fire({
    text,
    icon: "error",
    title: "Oops...",
  });
};
