import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-4 py-2 border-1 border-brightColor bg-green-400  text-brightColor hover:brightColor hover:text-black transition-all rounded">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
