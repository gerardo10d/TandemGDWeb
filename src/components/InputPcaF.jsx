import React from "react";

const InputPcaF = ({ filasEjes }) => {

  const inputs = [];

  for (let i = 0; i < filasEjes; i++) {
    inputs.push(
      <input
        key={i}
        className="p-1 appearance-none w-20 h-7 border border-gray-400 rounded-md focus:outline-none"
        type="number"
        min="0"
      />
    );
  }

  return <>{inputs}</>;
};

export default InputPcaF;
