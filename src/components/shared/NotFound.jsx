import React from "react";

const NotFound = ({ message }) => {
  return (
    <div className="h-[40vh] opacity-70 container mx-auto lg:w-[75%] flex justify-center items-center">
      <h1 className="font-bold text-4xl">{message}</h1>
    </div>
  );
};

export default NotFound;
