// ConfigModal.js
import React, { useState } from "react";

const ConfigModal = ({ onClose, onSave, x, y, type }) => {
  const [config, setConfig] = useState({
    x,
    y,
    text: "",
    fontSize: "",
    fontWeight: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setConfig({ ...config, [name]: value });
  };

  const handleSave = () => {
    onSave(config);
    onClose();
  };

  return (
    <div className="modal config-modal">
      {" "}
      <div className="modal-content" style={{ top: y, left: x }}>
        <div className="header">
            <h2>Edit {type}</h2>
            <span className="close" onClick={onClose}>
                &times;
            </span>
        </div>
        {type === "label" && (
          <>
            <label className="modal-element">Text:</label>
            <input
            className="modal-element"
              type="text"
              name="text"
              value={config.text}
              onChange={handleChange}
            />
          </>
        )}
        {type === "input" && (
          <>
            <label className="modal-element">Placeholder:</label>
            <input
            className="modal-element"
              type="text"
              name="text"
              value={config.text}
              onChange={handleChange}
            />
          </>
        )}
        {type === "button" && (
          <>
            <label className="modal-element">Content:</label>
            <input
            className="modal-element"
              type="text"
              name="text"
              value={config.text}
              onChange={handleChange}
            />
          </>
        )}
        <br />
        <label className="modal-element">X:</label>
        <input
        className="modal-element"
          type="number"
          name="x"
          value={config.x}
          onChange={handleChange}
        />
        <br />
        <label className="modal-element">Y:</label>
        <input
        className="modal-element"
          type="number"
          name="y"
          value={config.y}
          onChange={handleChange}
        />
        <br />
       
        <label className="modal-element">Font Size:</label>
        <input
        className="modal-element"
          type="text"
          name="fontSize"
          value={config.fontSize}
          onChange={handleChange}
        />
        <br />
        <label className="modal-element">Font Weight:</label>
        <input
        className="modal-element"
          type="text"
          name="fontWeight"
          value={config.fontWeight}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default ConfigModal;
