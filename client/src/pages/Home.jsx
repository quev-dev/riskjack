import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import Sockets from '../components/Sockets';

import { setPageTitle } from '../utils/setPageTitle';

export default function Home({ socket }) {
  setPageTitle('Home - Riskjack');

  return (
    <main id="home">
      <Nav />

      <header className="flex flex-col text-center my-12 mx-8">
        <h1>Riskjack</h1>
        <p className="text-xl">
          Take wild risks as you attempt to outsmart your opponent in this
          online, two-player card game.
        </p>
      </header>

      <Divider />

      <Sockets socket={socket}></Sockets>

      <article className="flex flex-col gap-4 m-8 box-info p-8 md:w-1/2 md:mx-auto">
        <h2>How to Play 📜</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor
          sit, amet consectetur adipisicing. Lorem ipsum dolor sit amet,
          consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur
          adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
      </article>

      <Divider />

      <section className="flex flex-col gap-1 m-8 md:w-1/2 md:mx-auto">
        <h2>Practice</h2>
        <p>Practice against an AI to become familiar with the game.</p>
        <a className="max-w-max" href="/practice">
          Begin
        </a>
      </section>

      <section className="flex flex-col gap-1 m-8 md:w-1/2 md:mx-auto">
        <h2>Play the Game</h2>
        <p>
          Whenever you're ready, you can search for an opponent through a room
          ID or matchmaking queue. Good luck, and play your cards right!
        </p>
        <a className="max-w-max" href="/search">
          Find an Opponent
        </a>
      </section>

      <Divider />

      <Footer />
    </main>
  );
}
