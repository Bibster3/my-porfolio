import React from "react";

const ResumeDownloadButton = () => {
  const downloadResume = () => {
    // Replace with the path to your resume PDF file
    const resumePath = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "Bilyana_Stefanova_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      onClick={downloadResume}
    >
      Download Resume
    </button>
  );
};

export default ResumeDownloadButton;