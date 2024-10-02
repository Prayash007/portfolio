import React, { useState } from 'react';

function ProjectCard({ project, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [link, setLink] = useState(project.link);
  const [image, setImage] = useState(project.image);

  const handleSave = () => {
    onUpdate(project.id, { title, description, link, image });
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mx-3">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        {isEditing ? (
          <>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="border p-2 mb-2 w-full"
            />
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="border p-2 mb-2 w-full"
              rows="3"
            />
            <input 
              type="text" 
              value={link} 
              onChange={(e) => setLink(e.target.value)} 
              className="border p-2 mb-2 w-full"
            />
            <input 
              type="file" 
              onChange={handleImageChange} 
              className="border p-2 mb-2 w-full"
            />
            <button onClick={handleSave} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-300 transition-all">
              Save
            </button>
          </>
        ) : (
          <>
            <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-purple-300 mb-4">{project.description}</p>
            <a href={link} className="text-white text-lg font-medium hover:text-purple-300 ">View Project</a>
            <button onClick={() => setIsEditing(true)} className="ml-28 hover:bg-purple-600 hover:text-white px-4 py-2 rounded bg-white text-black transition-all mt-2">
              Edit
            </button>
            <button onClick={() => onDelete(project.id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-300 transition-all mt-2 ml-2">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
