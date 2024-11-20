import React from 'react';
import resumePDF from './resume120.pdf';

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] h-[90%] max-w-4xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
        >
          ✕
        </button>
        <iframe 
          src={resumePDF}
          className="w-full h-full"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}

export default ResumeModal; 