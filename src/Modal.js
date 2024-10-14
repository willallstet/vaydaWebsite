import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-title-bar">
          <div className="modal-title-bar">
            <span className="modal-title">newsletter</span>
            <div>
              <button onClick={onClose} className="exit-button">-</button>
              <button onClick={onClose} className="exit-button">X</button>
            </div>
          </div>
        </div>
        <h2>Subscribe to Vayda's Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
