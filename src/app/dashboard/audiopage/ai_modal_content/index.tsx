'use client';

import React from 'react';
import './index.scss';

interface ModalContentProps {
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  const voices = ["Mary Ann's", 'Barry Johnson', 'Kemi Hannah'];
  return (
    <div>
      <div className="modal-header">
        <h2>Change AI Voice</h2>
        <div>
          {/* <button className="close-icon" onClick={onClose}>Close</button> */}
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
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

