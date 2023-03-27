import io from "socket.io-client";
import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Loading from "./pages/Loading";

const socket = io("http://localhost:3001");
const Home = lazy(() => import("./pages/Home"));
const Practice = lazy(() => import("./pages/Practice"));
const FindGame = lazy(() => import("./pages/FindGame"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const [curPage, setCurPage] = useState("Home");

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/find-game" element={<FindGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
