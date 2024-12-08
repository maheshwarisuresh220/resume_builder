import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";

interface DownloadButtonProps {
  resumeId: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ resumeId }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // Ensure this runs only on the client
    const resumeElement = document.getElementById(resumeId);
    if (resumeElement) {
      setContent(resumeElement.innerText || "");
    }
  }, [resumeId]);

  const handleDownload = () => {
    if (content) {
      const doc = new jsPDF();
      doc.text(content, 10, 10);
      doc.save("resume.pdf");
    }
  };

  return <button onClick={handleDownload}>Download PDF</button>;
};

export default DownloadButton;
