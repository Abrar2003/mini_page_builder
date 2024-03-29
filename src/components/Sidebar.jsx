// Sidebar.js
import React from 'react';
import DraggableItem from './DraggableItem';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <DraggableItem type="label">Label</DraggableItem>
      <DraggableItem type="input">Input</DraggableItem>
      <DraggableItem type="button">Button</DraggableItem>
    </div>
  );
};

export default Sidebar;
