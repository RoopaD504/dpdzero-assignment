import React from "react";
import WorkImg from "../../../assets/images/WorkInProgress/WorkInProgress3.jpg"; 

const WorkInProgress = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <img
        src={WorkImg}
        alt="work in progress"
        className="w-full max-w-3xl"
      />
    </div>
  );
};

export default WorkInProgress;
