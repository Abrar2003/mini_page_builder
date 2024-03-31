// Sidebar.js
import React from "react";
import DraggableItem from "./DraggableItem";
import ExportJSON from "./ExportJSON";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h2>Sidebar</h2>
        <DraggableItem type="label">Label</DraggableItem>
        <DraggableItem type="input">Input</DraggableItem>
        <DraggableItem type="button">Button</DraggableItem>
      </div>
      <div>
        <ExportJSON />
      </div>
    </div>
  );
};

export default Sidebar;
