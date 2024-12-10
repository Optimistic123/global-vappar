import React, { useEffect } from 'react'
import ReactModal from 'react-modal';
import './Modal.scss'

const Modal = (props) => {
  const { modalIsOpen, children, handleClose } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { 
        document.body.style.overflow = "initial";
    };
},[]);
  return (
    <div className='modal-container'>
      <ReactModal
        isOpen={modalIsOpen}
        style={{
          overlay: { backgroundColor: "rgba(33, 33, 33, 0.5)",  },
          content: {
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -45%)", // Centers the modal
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "440px",
            minHeight: "600px",
            width: "90%", // Makes it responsive for smaller screens
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#040430"
          },
        }}
      >
        <button
            className="close-icon"
            onClick={() => handleClose(false)} 
          >
            &#x2715; {/* Unicode for the X symbol */}
          </button>
        {children}
      </ReactModal>
    </div>
  )
}

export default Modal