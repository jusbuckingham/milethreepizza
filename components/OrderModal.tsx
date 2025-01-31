import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

export default function OrderModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const appElement = document.getElementById('__next');
    if (appElement) {
      Modal.setAppElement(appElement);
    } else {
      console.warn("App element with id '__next' not found.");
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function handleOrderClick() {
    window.open('https://link.clover.com/urlshortener/hHVWhr', '_blank');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={200} // optional fade-out animation
      style={{
        content: {
          inset: '50% auto auto 50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '500px',
          borderRadius: '0.75rem',
          textAlign: 'center',
          padding: '2rem',
          border: 'none',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
        },
      }}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        aria-label="Close order modal"
        className="absolute top-3 right-3 text-2xl leading-none text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        &times;
      </button>

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Order Now &amp; Earn Rewards!
      </h2>

      {/* Action Button */}
      <div className="mt-6">
        <button
          onClick={handleOrderClick}
          className="px-6 py-3 text-lg bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition-all
                     focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Order Now
        </button>
      </div>
    </Modal>
  );
}