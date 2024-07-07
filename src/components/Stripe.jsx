import React from "react";

function Stripe({url,number}){

    return (
      <div className="w-[16.66%] h-[8vh] shrink-0 px-4 py-5 border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] flex justify-between items-center border-zinc-600">
        <img src={url} alt="" />
        <span className="font-semibold">{number}</span>
      </div>
    );
}

export default Stripe;