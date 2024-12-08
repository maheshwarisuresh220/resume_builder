import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  education: string;
  skills: string;
  experience: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    education: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} />

      <label>Email:</label>
      <input name="email" value={formData.email} onChange={handleChange} />

      <label>Education:</label>
      <input name="education" value={formData.education} onChange={handleChange} />

      <label>Skills (comma-separated):</label>
      <input name="skills" value={formData.skills} onChange={handleChange} />

      <label>Experience:</label>
      <textarea name="experience" value={formData.experience} onChange={handleChange} />

      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default Form;
