"use client";

import React, { useState } from "react";
import Form from "../components/Form";
import Resume from "../components/Resume";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
    experience: "",
  });

  const handleFormSubmit = (data: typeof formData) => {
    setFormData(data);
  };

  return (
    <div className="flex">
      <div>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <div>
        <Resume data={formData} />
      </div>
    </div>
  );
}
