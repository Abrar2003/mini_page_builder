// Canvas.js
import React, { useState, useEffect } from 'react';
import Component from './Component';
import ConfigModal from './ConfigModal';

const Canvas = () => {
  const [components, setComponents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Load components from localStorage
    const savedComponents = localStorage.getItem('components');
    if (savedComponents) {
      setComponents(JSON.parse(savedComponents));
    }
  }, []);

  const handleDragStart = (event) => {
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;
    setDragStartPos({ x: offsetX, y: offsetY });
  };

  const handleDrop = (event) => {
    const { type } = JSON.parse(event.dataTransfer.getData('text'));
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;
    const x = showModal ? selectedComponent.x : offsetX - dragStartPos.x;
    const y = showModal ? selectedComponent.y : offsetY - dragStartPos.y;
    setSelectedComponent({ type, x, y, text: '', fontSize: '', fontWeight: '' });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveConfig = (config) => {
    setComponents([...components, { ...selectedComponent, ...config }]);
    localStorage.setItem('components', JSON.stringify([...components, { ...selectedComponent, ...config }]));
  };

  return (
    <div
      className="canvas"
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      {components.map((component, index) => {
        return <Component key={index} {...component} />;
      })}
      {showModal && <div className="modal-backdrop"></div>}
      {showModal && (
        <ConfigModal
          x={selectedComponent.x}
          y={selectedComponent.y}
          type={selectedComponent.type}
          onClose={handleCloseModal}
          onSave={handleSaveConfig}
        />
      )}
      <div
        className="drag-box"
        onDragStart={handleDragStart}
        draggable
        style={{ visibility: 'hidden', width: 0, height: 0 }}
      ></div>
    </div>
  );
};

export default Canvas;
