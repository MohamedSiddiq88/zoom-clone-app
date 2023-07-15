import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Room from './Component/Room';
import RoomJoin from './Component/RoomJoin';
import Chat from './Component/Chat';
import ScreenSharing from './Component/ScreenSharing';

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