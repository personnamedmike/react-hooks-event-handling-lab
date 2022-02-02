// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  const focus = function (e) {
    console.log("Good!");
  };

  const blur = function (e) {
    console.log("Hey! Eyes on me!");
  };

  return (
    <div>
      <button onBlur={blur} onFocus={focus}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
