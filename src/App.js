// App.js
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Canvas />
    </div>
  );
}

export default App;
