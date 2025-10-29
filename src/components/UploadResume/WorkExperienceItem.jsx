import React, { useState } from 'react';
import WorkExperience from './WorkExperience';

const WorkExperienceList = () => {
  const [items, setItems] = useState([{ id: 1 }]);
  const [nextId, setNextId] = useState(2);


  const handleAdd = () => {
    setItems(prev => [...prev, { id: nextId }]);
    setNextId(prev => prev + 1);
  };


  const handleDelete = (idToDelete) => {
    setItems(prev => prev.filter(item => item.id !== idToDelete));
  };

  return (
    <div>
      {items.map(item => (
        <WorkExperience
          key={item.id}
          id={item.id}
          onAdd={handleAdd}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default WorkExperienceList;
