import { useState, useEffect } from "react";
import ConfigModal from "./ConfigModal";

const Component = ({ id, type, x, y, text, fontSize, fontWeight, handleDelete, components, setComponents }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isSelected) {
        if (e.key === "Enter") {
          setShowModal(true);
        } else if (e.key === "Delete") {
          handleDelete(id);
        } else if (e.key === "Escape") {
          setShowModal(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSelected, handleDelete, id]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdate = (config) => {
    const updatedComponent = {
      id,
      type,
      x,
      y,
      text: config.text,
      fontSize: config.fontSize,
      fontWeight: config.fontWeight
    };

    const updatedComponents = components.map((component) => {
      if (component.id === id) {
        return updatedComponent;
      }
      return component;
    });
    setComponents(updatedComponents);
    localStorage.setItem("components", JSON.stringify(updatedComponents));
  };

  return (
    <div
      onClick={() => {setIsSelected(!isSelected); console.log("clicked")}}
      style={{
        position: "absolute",
        left: x,
        top: y,
        fontSize: fontSize,
        fontWeight: fontWeight,
        border: isSelected ? "2px solid red" : "none",
      }}
    >
      {type === "label" && <label>{text}</label>}
      {type === "input" && <input type="text" placeholder={text} />}
      {type === "button" && <button>{text}</button>}
      
      {/* Modal */}
      {showModal && (
        <ConfigModal
          x={x}
          y={y}
          type={type}
          onClose={handleCloseModal}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
};

export default Component;
