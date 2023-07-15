import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoomJoin from './Components/RoomJoin';
import Room from './Components/Room';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<RoomJoin />} />
      <Route path="/room/:roomId" element={<Room />} />
    </Routes>
    </>
  );
}

export default App;