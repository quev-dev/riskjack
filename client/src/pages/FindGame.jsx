import Layout from '../layouts/Layout.jsx';

import { setPageTitle } from '../utils/setPageTitle.js';
import { useState, useEffect } from 'react';

export default function FindGame({ socket }) {
  setPageTitle('Find Game - Riskjack');

  const [disableInputs, setDisableInputs] = useState(false);
  const [noGameFound, setNoGameFound] = useState(false);
  const [fieldID, setFieldID] = useState('');

  const createRoom = () => {
    socket.emit('createRoom');
    setDisableInputs(true);
  };
  const closeRoom = () => {
    socket.emit('closeRoom');
  };
  const joinRoom = () => {
    socket.emit('joinRoom', fieldID);
  };

  const handleInputChange = (event) => {
    setFieldID(event.target.value);
    if (noGameFound) setNoGameFound(false);
  };
  const validateJoin = () => {
    if (fieldID === '') setNoGameFound(true);
    else joinRoom();
  };

  return (
    <Layout pageID="page">
      <header className="text-center my-12">
        <h2>Find an Opponent</h2>
      </header>

      <section className="flex flex-col gap-4 items-center content-center mx-8 my-12">
        <div className="w-full flex flex-col gap-2">
          <h3>Random Queue</h3>
          <p>Search for a random player.</p>
          <button className="mt-1 max-w-max" disabled={disableInputs}>
            Queue
          </button>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h3>Create Room</h3>
          <p>
            You may create a private room - a room ID will be listed at the top.
            Anyone who provides the room ID for the "join room" option will be
            able to join.
          </p>
          <button
            onClick={createRoom}
            className="mt-1 max-w-max"
            disabled={disableInputs}
          >
            Create Room
          </button>
          <button className="max-w-max" onClick={closeRoom}>
            [TEST] Close Room
          </button>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h3>Join Room</h3>
          <p>Provide the correct password to join a private room.</p>
          <div>
            <input
              onChange={handleInputChange}
              type="text"
              disabled={disableInputs}
            />
            <button
              onClick={validateJoin}
              className="ml-2"
              disabled={disableInputs}
            >
              Join Room
            </button>
          </div>
          {noGameFound && (
            <aside className="highlighted-text">No game was found.</aside>
          )}
        </div>
      </section>
    </Layout>
  );
}
