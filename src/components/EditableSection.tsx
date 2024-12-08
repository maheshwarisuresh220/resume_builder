import React, { useState } from 'react';

interface EditableSectionProps {
  title: string;
  children: React.ReactNode;
}

const EditableSection: React.FC<EditableSectionProps> = ({ title, children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(children);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <h2>{title}</h2>
      {isEditing ? (
        <textarea value={content as string} onChange={handleContentChange} />
      ) : (
        <div>{content}</div>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default EditableSection;
