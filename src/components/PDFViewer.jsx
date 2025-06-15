import React, { useState } from "react";

const pdfList = [
  { title: "Simple Tense", url: "/PDF/Simple-Tense.pdf" },
  { title: "Continuous Tense", url: "/PDF/Continuous-Tense.pdf" },
  { title: "Perfect Tense", url: "/PDF/Perfect-Tense.pdf" },
  { title: "Perfect Continuous Tense", url: "/PDF/Perfect-Continuous-Tense.pdf" },
];

function PDFViewer() {
  const [selectedPDF, setSelectedPDF] = useState(pdfList[0].url);

  return (
    <div className="max-w- mx-auto p-4 pt-28">
      <h1 className="text-3xl text-blue-900 font-bold mb-6">Smart Tips to Improve Your English Fluency</h1>

      {/* PDF buttons */}
      <div className="flex flex-wrap gap-3 mb-5 mt-12">
        {pdfList.map((pdf, i) => (
          <button
            key={i}
            onClick={() => setSelectedPDF(pdf.url)}
            className={`px-4 py-2 rounded ${
              selectedPDF === pdf.url
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {pdf.title}
          </button>
        ))}
      </div>

      {/* PDF Iframe Viewer */}
      <div className="w-full h-[300vh] border shadow-lg rounded overflow-hidden bg-white mt-12">
        <iframe
          src={`${selectedPDF}#toolbar=0&navpanes=0&scrollbar=0`}
          title="PDF Viewer"
          className="w-full h-full bg-white"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

export default PDFViewer;
