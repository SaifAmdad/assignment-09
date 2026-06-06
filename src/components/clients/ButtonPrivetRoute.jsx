"use client";
import { authClient } from "@/lib/auth-client";
import { Bounce, toast } from "react-toastify";

const ButtonPrivetRoute = ({ btnText }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const errorTosat = () => {
    if (!user) {
      toast.error("Login required !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return <div onClick={errorTosat}>{btnText}</div>;
};

export default ButtonPrivetRoute;
