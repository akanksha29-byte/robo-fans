import React from "react";

const Modal = ({ setPopUp }) => {
  return (
    <div className="modal">
      <span onClick={(e) => setPopUp(false)}>
        <i className="far fa-times-circle"></i>
      </span>

      <p>Robo_Fans!</p>
    </div>
  );
};

export default Modal;
