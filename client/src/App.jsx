import io from 'socket.io-client';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from './pages/Loading';

const socket = io('http://localhost:3001', {
  extraHeaders: {
    user_id: sessionStorage.getItem('user_id') ?? '',
    game_id: sessionStorage.getItem('game_id') ?? '',
  },
});

socket.on('pass_ids', (userID, gameID) => {
  console.log('passed ids: ', userID, gameID);
  sessionStorage.setItem('user_id', userID);
  sessionStorage.setItem('game_id', gameID);
});

socket.on('joinedRoom', () => sessionStorage.setItem('joined_room', true));
socket.on('leftRoom', () => sessionStorage.setItem('joined_room', false));

socket.on('redirectClient', (url) => {
  window.location.href = url;
});

const Home = lazy(() => import('./pages/Home'));
const Practice = lazy(() => import('./pages/Practice'));
const FindGame = lazy(() => import('./pages/FindGame'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Room = lazy(() => import('./pages/Room'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/find-game" element={<FindGame socket={socket} />} />
          <Route
            path="/room/:id"
            element={
              <Room
                socket={socket}
                gameID={sessionStorage.getItem('game_id')}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
