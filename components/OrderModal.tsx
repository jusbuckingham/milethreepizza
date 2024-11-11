import React, { useEffect, useState } from "react";
import Modal from "react-modal";

export default function OrderModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const appElement = document.getElementById("__next");
      if (appElement) {
        Modal.setAppElement(appElement);
      } else {
        console.warn("App element with id '__next' not found.");
      }
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  const handleOrderClick = () => {
    window.open("https://link.clover.com/urlshortener/hHVWhr", "_blank");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '500px',
          textAlign: 'center',
          borderRadius: '12px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      ariaHideApp={false}
    >
      <button
        onClick={closeModal}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
        }}
      >
        &times;
      </button>
      <h2 className="text-xl font-semibold text-gray-800 md:text-gray-900">
        Order Now and Earn Rewards!
      </h2>
      <div style={{ marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            margin: '10px',
            fontSize: '16px',
            backgroundColor: '#28a745', // Green color
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
          onClick={handleOrderClick}
        >
          Order Now
        </button>
      </div>
    </Modal>
  );
}
