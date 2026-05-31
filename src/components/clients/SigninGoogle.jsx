import { authClient } from "@/lib/auth-client";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Bounce, toast, ToastContainer } from "react-toastify";

function SigninGoogle() {
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",

      //     idToken: {
      //     token: '',
      //     accessToken: ''
      // }
    });

    // if (!data?.error) {
    //   toast.success("SignIn Successfully !", {
    //     position: "top-center",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //   });
    // }

    console.log(data);
  };

  return (
    <>
      <button
        className="btn btn-ghost btn-outline mt-1 w-full"
        onClick={googleSignUp}
      >
        <AiFillGoogleCircle color="ghost" size={20} /> Continue with Google
      </button>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> */}
    </>
  );
}

export default SigninGoogle;
