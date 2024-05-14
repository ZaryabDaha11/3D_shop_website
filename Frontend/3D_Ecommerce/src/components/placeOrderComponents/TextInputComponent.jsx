import React from "react";

function TextInputComponent(props) {
  return (
    <div className=" my-2 mx-5 ">
      <p>{props?.title}</p>
      <input
        value={props?.value}
        onChange={props?.onChangeText}
        type="text"
        placeholder={props?.placeholder}
        className=" border rounded-lg bg-gray-200 px-2 py-1 mt-1 ml-2"
      />
    </div>
  );
}

export default TextInputComponent;
