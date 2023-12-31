import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import io from 'socket.io-client';

const socket = io('https://zoom-express.onrender.com/');

function RoomJoin() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');

  const generateUniqueId = () => {
    const uniqueId = uuidv4();
    setRoomId(uniqueId);
  };

  const joinRoom = () => {
    if (roomId) {
      // Navigate to the specified room ID
      navigate(`/room/${roomId}`); 
    }
  };

  return (
    <div className="container mt-5 bg-dark text-light">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark">
            <div className="card-body">
              <h5 className="card-title text-center">Join a Room</h5>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter Room ID"
                />
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-primary"
                  onClick={generateUniqueId}
                >
                  Generate Unique ID
                </button>
                <button className="btn btn-success" onClick={joinRoom}>
                  Join Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomJoin;
