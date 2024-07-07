import React from "react";

import Button from "./Button";


function NavBar() {
    return (
      <div className="mx-auto py-4  max-w-screen-xl flex items-center justify-between border-b-[1px] border-zinc-700">
        <div className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt="Logo"
          />
          <div className="links flex items-center gap-14 ml-20">
            {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
              elem.length === 0 ? (
                <span key={index} className="h-7 w-[2px] bg-zinc-700"></span>
              ) : (
                <a
                  href="#"
                  key={index}
                  className="text-sm flex items-center gap-1"
                >
                  {index === 1 && (
                    <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
                  )}
                  {elem}
                </a>
              )
            )}
          </div>
        </div>
        <div>
          <Button />
        </div>
      </div>
    );
}

export default NavBar;