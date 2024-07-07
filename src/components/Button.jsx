import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Button({ title = "Get Started" }) {
  return (
    <div className="bg-zinc-100   w-40 py-2 px-4 text-black  rounded-full flex items-center justify-between ">
      <span className="text-sm font-medium">{title}</span>
      <BsArrowReturnRight />
    </div>
  );
}


export default Button;