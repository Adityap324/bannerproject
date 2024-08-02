// components/EditBannerTemplateBs.tsx
import React, { useState } from 'react';

interface EditBannerProps {
  initialTitle: string;
  initialDescription: string;
  initialCta: string;
  initialImage: string;
  initialBackground: string;
  onSave: (banner: any) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ initialTitle, initialDescription, initialCta, initialImage, initialBackground, onSave }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [cta, setCta] = useState(initialCta);
  const [image, setImage] = useState(initialImage);
  const [background, setBackground] = useState(initialBackground);

  const handleSave = () => {
    onSave({ title, description, cta, image, background });
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={cta} onChange={(e) => setCta(e.target.value)} placeholder="CTA" />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <input value={background} onChange={(e) => setBackground(e.target.value)} placeholder="Background URL" />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditBannerTemplateBs;
