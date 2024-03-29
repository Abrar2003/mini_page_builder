// Component.js
import React from 'react';

const Component = ({ type, x, y, text, fontSize, fontWeight }) => {
  let renderedComponent;
  const left = Number(x);
  const top = Number(y);
  console.log("coords",top, left, type);
  switch (type) {
    case 'label':
      renderedComponent = (
        <label style={{ position: 'absolute', top: top, left: left, fontSize, fontWeight }}>{text}</label>
      );
      break;
    case 'input':
      renderedComponent = (
        <input type="text" style={{ position: 'absolute', top: top, left: left, fontSize, fontWeight }} placeholder={text} />
      );
      break;
    case 'button':
      renderedComponent = (
        <button style={{ position: 'absolute', top: top, left: left, fontSize, fontWeight }}>{text}</button>
      );
      break;
    default:
      renderedComponent = null;
  }

  return renderedComponent;
};

export default Component;
