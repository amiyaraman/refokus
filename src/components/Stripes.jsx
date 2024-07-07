import React from "react";
import Stripe from "./Stripe";

import { useRef,useEffect } from "react";

function Stripes(){
      const data = [
        {
          url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          number: 48,
        },
        {
          url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          number: 2,
        },
        {
          url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
          number: 11,
        },
        {
          url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          number: 48,
        },
        {
          url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          number: 2,
        },
        {
          url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
          number: 11,
        },
      ];

        const scrollContainerRef = useRef(null);

        useEffect(() => {
          const scrollContainer = scrollContainerRef.current;

          const scroll = () => {
            if (
              scrollContainer.scrollLeft >=
              scrollContainer.scrollWidth - scrollContainer.clientWidth
            ) {
              scrollContainer.scrollLeft = 0;
            } else {
              scrollContainer.scrollLeft += 1;
            }
          };

          const intervalId = setInterval(scroll, 20);

          return () => clearInterval(intervalId);
        }, []);
      
    return (
      <>
        <div
          ref={scrollContainerRef}
          className="flex  items-center justify-center mt-32 whitespace-nowrap overflow-x-hidden overflow-y-auto"
        >
          {data.map((elem, index) => (
            <Stripe key={index} url={elem.url} number={elem.number} />
          ))}
          {data.map((elem, index) => (
            <Stripe key={index} url={elem.url} number={elem.number} />
          ))}
          {data.map((elem, index) => (
            <Stripe key={index} url={elem.url} number={elem.number} />
          ))}
        </div>
      </>
    );
}

export default Stripes;