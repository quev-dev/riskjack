import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

import Sockets from "../components/Sockets";
import ReduxExample from "../components/ReduxExample";

export default function Home() {
  return (
    <main id="home">
      <Nav />

      <header className="flex flex-col text-center my-12">
        <h1>RiskJack</h1>
        <p>
          <i>An ever so slightly modified version of BlackJack.</i>
        </p>
      </header>

      <Divider />

      <Sockets></Sockets>

      <article className="m-8 box-info p-8">
        <h2>How to Play 📜</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor
          sit, amet consectetur adipisicing. Lorem ipsum dolor sit amet,
          consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur
          adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor
          sit, amet consectetur adipisicing. Lorem ipsum dolor sit amet,
          consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur
          adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
      </article>

      <Divider />

      <section className="m-8">
        <h2>Practice 🫰</h2>
        <p>
          Practice against an <b>AI</b> to become familiar with the game.
        </p>
        <a href="/practice">Begin</a>
      </section>

      <section className="m-8">
        <h2>Play the Game 🤝</h2>
        <p>
          Whenever you're ready, you can search for an opponent through a{" "}
          <b>room ID</b> or <b>matchmaking queue</b>. Good luck, and play your
          cards right!
        </p>
        <a href="/search">Find an Opponent</a>
      </section>

      <Divider />

      <Footer />
    </main>
  );
}
