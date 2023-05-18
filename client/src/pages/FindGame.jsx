import Layout from '../layouts/Layout.jsx';
import icSearch from '../content/svgs/search.svg';

import { setPageTitle } from '../utils/setPageTitle.js';
import { useState, useEffect } from 'react';

export default function FindGame({ socket }) {
  setPageTitle('Find Game - Riskjack');

  const createRoom = () => {
    socket.emit('createRoom');
  };

  return (
    <Layout pageID="page">
      <header className="text-center my-12">
        <h2>Find an Opponent</h2>
      </header>

      <section className="md:w-1/2 md:mx-auto flex flex-col gap-4 items-center content-center mx-8 my-12">
        <div className="w-full flex flex-col gap-2">
          <h3>Random Queue</h3>
          <p>Search for a random player.</p>
          <button className="mt-1 max-w-max">Queue</button>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h3>Create Room</h3>
          <p>
            You may create a private room - a room ID will be listed at the top.
            Anyone who provides the room ID for the "join room" option will be
            able to join.
          </p>
          <button onClick={createRoom} className="mt-1 max-w-max">
            Create Room
          </button>
        </div>

        <div className="w-full flex flex-col gap-2">
          <h3>Join Room</h3>
          <p>Provide the correct password to join a private room.</p>
          <div>
            <input type="text" />
            <button className="ml-2 relative top-1">
              <img src={icSearch} alt="Search Icon" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
