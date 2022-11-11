import React from "react";
import data from "./data";

const Project = () => {
  return (
    <>
      <div className=" sm:grid grid-cols-3 sm:grid-col-1 ">
        {data.map((item) => {
          return (
            <>
              <a href={item.link} target="_blank" className="drop-shadow-2xl  transition-all mx-4 my-3 rounded-lg shadow-lg bg-white max-w-sm">
  
                  <img class="rounded-t-lg" src={item.img} alt="img" />

                <div className="p-6">
                  <h5 className="text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full">
                    {item.name}
                  </h5>
                  <p className="text-gray-700 text-base font-semibold  py-5">
                    {item.description}
                  </p>
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Project;
