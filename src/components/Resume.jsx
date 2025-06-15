import React, { useState } from 'react';

const ResumeViewer = () => {
  const [open, setOpen] = useState(false);

  const handleViewResume = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="text-center mt-2">
      {/* View Resume Button */}
      <button
        onClick={handleViewResume}
        className="bg-blue-900  text-white text-sm px-4 py-2 rounded hover:bg-blue-800 rounded-2xl transition"
      >
        View Resume
      </button>

      {/* Resume Modal */}
      {open && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 h-[90%] relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-xl font-semibold"
            >
              &times;
            </button>

            {/* PDF Viewer */}
            <iframe
              src="../../public/CVResume.pdf"
              title="Resume"
              className="w-full h-full "
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeViewer;
