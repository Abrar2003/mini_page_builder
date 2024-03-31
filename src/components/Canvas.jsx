import React, { useState, useEffect } from 'react';
import Component from './Component';
import ConfigModal from './ConfigModal';
import {v4 as uuidV4} from "uuid";

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


  // const handleDragStart = (event) => {
  //   const offsetX = event.nativeEvent.offsetX;
  //   const offsetY = event.nativeEvent.offsetY;
  //   setDragStartPos({ x: offsetX, y: offsetY });
  // };

  const handleDropCanvas = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('text');
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;
    const x = offsetX - dragStartPos.x;
    const y = offsetY - dragStartPos.y;
    setSelectedComponent({ id: uuidV4(), type, x, y, text: '', fontSize: '', fontWeight: '' });
    setShowModal(true);
  };
  

  const handleDelete = (id) => {
    setComponents(prevComponents => prevComponents.filter(component => component.id !== id));
    localStorage.setItem('components', JSON.stringify(components.filter(component => component.id !== id)));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveConfig = (config) => {
    console.log("Canvas Modal")
    setComponents([...components, { ...selectedComponent, ...config }]);
    localStorage.setItem('components', JSON.stringify([...components, { ...selectedComponent, ...config }]));
  };

  return (
    <div
      className="canvas"
      onDrop={handleDropCanvas}
      onDragOver={(event) => event.preventDefault()}
    >
      {components.map((component) => {
        return (
            <Component key={component.id} handleDelete={handleDelete} {...component} setComponents={setComponents} components={components} />
        )
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
      {/* <div
        className="drag-box"
        onDragStart={handleDragStart}
        draggable
        style={{ visibility: 'hidden', width: 0, height: 0 }}
      ></div> */}
    </div>
  );
};

export default Canvas;
