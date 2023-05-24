import Layout from '../layouts/Layout.jsx';
import Divider from '../components/Divider.jsx';
import AnimHourglass from '../components/anims/AnimHourglass.jsx';

import { setPageTitle } from '../utils/setPageTitle.js';
import { useState, useEffect } from 'react';

import icClipboardCheck from '../content/svgs/clipboard-check.svg';

export default function Room({ socket, gameID, joinedRoom = false }) {
  setPageTitle('Waiting Room - Riskjack');

  const [notifyCopy, setNotifyCopy] = useState(false);
  const [disableCopy, setDisableCopy] = useState(false);
  const [gameReady, setGameReady] = useState(false);

  const beginGame = () => {};
  const leaveRoom = () => socket.emit('leaveRoom');
  const closeRoom = () => socket.emit('closeRoom');

  const copyID = () => {
    navigator.clipboard.writeText(gameID);
    setNotifyCopy(true);
    setDisableCopy(true);
    setTimeout(() => {
      setDisableCopy(false);
      setNotifyCopy(false);
    }, 2000);
  };

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
      </header>

      {!joinedRoom && (
        <div>
          <article className="flex flex-col gap-2 m-8">
            <p>
              Once an opponent joins, you can click{' '}
              <span className="highlighted-text">'Begin Game'</span> to initiate
              the match.
            </p>
            <p>
              You can copy the{' '}
              <span className="font-code highlighted-text">ID</span> below and
              provide it to your opponent so that they may join.
            </p>
          </article>
          <section className="flex flex-col items-center justify-center gap-2 m-8">
            {!gameReady && (
              <div className="flex flex-col gap-2 items-center justify-center">
                <AnimHourglass />
                <p className="highlighted-text">Waiting for an opponent...</p>
              </div>
            )}
            {gameReady && <p>An opponent has joined.</p>}
            <button className="max-w-max" disabled={!gameReady}>
              Begin Game
            </button>
            <button onClick={closeRoom} className="max-w-max">
              Close Room
            </button>
          </section>
          <section className="flex flex-col gap-2 m-8 items-center text-center">
            <div className="flex flex-row gap-2 items-center">
              <p>Game ID:</p>
              <button
                disabled={disableCopy}
                onClick={copyID}
                className="max-w-max"
              >
                <img className="w-6 h-6" src={icClipboardCheck} alt="Copy ID" />
              </button>
              {notifyCopy && (
                <p className="p-1 highlighted-text notification">Copied!</p>
              )}
            </div>
            <p className="relative bottom-1 font-code">{gameID}</p>
          </section>
        </div>
      )}

      {joinedRoom && (
        <div className="flex flex-col items-center content-center text-center">
          <section className="p-8 box-info flex flex-col gap-2 items-center content-center">
            <AnimHourglass />
            <p className="highlighted-text">
              Waiting for host to begin the game...
            </p>
            <button className="max-w-max" onClick={leaveRoom}>
              Leave Room
            </button>
          </section>
        </div>
      )}
      <Divider />
    </Layout>
  );
}
