import React from "react";

const InputPcaReps = ({filasEjes}) => {
  
  const inputs = [];

  for (let i = 0; i < filasEjes; i++) {
    inputs.push(
      <input
        key={i}
        className="p-1 appearance-none w-28 h-7 border border-gray-400 rounded-md focus:outline-none"
        type="number"
        min="0"
      />
    );
  }

  return <>{inputs}</>;
};

export default InputPcaReps;
