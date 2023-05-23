import Layout from '../layouts/Layout.jsx';
import Divider from '../components/Divider.jsx';

import { setPageTitle } from '../utils/setPageTitle.js';
import { useState, useEffect } from 'react';

export default function Room({ socket, gameID }) {
  setPageTitle('Waiting Room - Riskjack');

  const [notifyCopy, setNotifyCopy] = useState(false);
  const [disableCopy, setDisableCopy] = useState(false);
  const [gameReady, setGameReady] = useState(false);

  const leaveRoom = () => {
    socket.emit('leaveRoom');
  };
  const copyID = () => {
    navigator.clipboard.writeText(gameID);
    setNotifyCopy(true);
    setDisableCopy(true);
    setTimeout(() => {
      setDisableCopy(false);
      setNotifyCopy(false);
    }, 2000);
  };
  const beginGame = () => {};

  useEffect(() => {
    socket.on('opponentJoined', () => {
      setGameReady(true);
    });
    return () => {
      socket.off('opponentJoined');
    };
  }, []);

  return (
    <Layout>
      <Divider />
      <header className="flex flex-col gap-2 m-8">
        <h3 className="text-center">Waiting Room</h3>
        <p>
          Once an opponent joins, you can click 'Begin Game' to initiate the
          match.
        </p>
        <button onClick={leaveRoom} className="max-w-max">
          Leave Room
        </button>
      </header>
      <Divider />
      <article className="flex flex-col gap-2 m-8">
        <p>
          Share the game ID with your opponent. They can join using the 'join
          room' option by providing the game ID in the input field.
        </p>
        <p>
          <b>Game ID:</b> <span className="font-code">{gameID}</span>
        </p>
        <div className="flex flex-row gap-2 mt-2 items-center">
          <button disabled={disableCopy} onClick={copyID} className="max-w-max">
            Copy ID
          </button>
          {notifyCopy && (
            <p className="p-1 highlighted-text notification">
              ID Copied to clipboard!
            </p>
          )}
        </div>
      </article>
      <Divider />
      <section className="box-info p-8 flex flex-col items-center justify-center gap-2 m-8">
        {!gameReady && <p className="italic">Waiting for an opponent...</p>}
        {gameReady && <p>An opponent has joined.</p>}
        <button className="max-w-max" disabled={!gameReady}>
          Begin Game
        </button>
      </section>
      <Divider />
    </Layout>
  );
}
