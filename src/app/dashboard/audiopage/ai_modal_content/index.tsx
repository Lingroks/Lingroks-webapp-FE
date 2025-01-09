'use client';

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./index.scss";

const ModalContent = ({ onClose }) => {
  const voices = ["Mary Ann's", "Barry Johnson", "Kemi Hannah"];
  return (
    <div>
      <div className="modal-header">
        <h2>Change AI's Voice</h2>
        <AiOutlineClose
          className="close-icon"
          onClick={onClose}
        />
      </div>
      <div className="voice-list">
        {voices.map((voice, index) => (
          <div key={index} className="voice-item">
            {voice}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalContent;
