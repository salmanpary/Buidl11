import React from "react";

const Progressbar = (props) => {

  return (
    <div className="flex flex-col justify-start mb-1">
        <div className="mb-1 text-white font-bold text-md">Selected {props.value} of 11</div>
        <div classname="w-[24rem] rounded-xl card-blur s">
      <div
        className={
          `bg-white text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-xl w-[50%] `
        }
      >
        {" "}
      </div>
    </div>
    </div>
  );
};

export default Progressbar;
