// App.jsx
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faff]">
      <Header />
      <div className="flex flex-1 overflow-hidden bg-[#f8faff]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
