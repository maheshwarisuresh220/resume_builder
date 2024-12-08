import React from "react";
import DownloadButton from "./DownloadButton";

interface ResumeProps {
  data: {
    name: string;
    email: string;
    education: string;
    skills: string;
    experience: string;
  };
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const skillsArray = data.skills.split(",").map((skill) => skill.trim());

  return (
    <div id="resume" className="fade-in">
      <h2>Resume</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Education:</strong> {data.education}</p>
      <p><strong>Skills:</strong></p>
      <ul>
        {skillsArray.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p><strong>Experience:</strong> {data.experience}</p>
      <DownloadButton resumeId="resume" />
    </div>
  );
};

export default Resume;
