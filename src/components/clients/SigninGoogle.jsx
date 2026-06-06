import { authClient } from "@/lib/auth-client";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";

function SigninGoogle() {
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (!data?.error) {
      toast.success("SignIn Successfully !", {
        position: "top-right",
        autoClose: 2000,
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

  return (
    <>
      <button
        className="btn btn-ghost btn-outline mt-1 w-full"
        onClick={googleSignUp}
      >
        <AiFillGoogleCircle color="ghost" size={20} /> Continue with Google
      </button>
    </>
  );
}

export default SigninGoogle;
