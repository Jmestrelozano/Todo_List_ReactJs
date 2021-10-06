import React, { useState } from "react";
import moonImg from "../assets/img/bg-desktop-dark.jpg";
import sunImg from "../assets/img/bg-desktop-light.jpg";

export const DarkLightMode = () => {
  const [state, setstate] = useState(false);

  const changeStateDarkLightMode = ({target}) => {
    setstate(!state);
    const body =
      target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    const image =
      target.parentElement.parentElement.parentElement.children[0]
        .children[0];

    if (!state) {
      body.style.backgroundColor = "white";
      image.src = sunImg;
    } else {
      body.style.backgroundColor = "hsl(235, 21%, 11%)";
      image.src = moonImg;
    }
  };
  return (
    <>
      {state === false ? (
        <i onClick={changeStateDarkLightMode} className="fas fa-moon"></i>
      ) : (
        <i onClick={changeStateDarkLightMode} className="fas fa-sun">
        </i>
      )}
    </>
  );
};
