import React from 'react';

const DraggableItem = ({ type, children }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', type);
  };

  return (
    <div className="draggable-item" draggable onDragStart={handleDragStart}>
      {children}
    </div>
  );
};

export default DraggableItem;
