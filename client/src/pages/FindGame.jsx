import Nav from "../components/Nav";
import Footer from "../components/Footer";

import icSearch from "../content/icons/search.svg";

export default function FindGame() {
  return (
    <div>
      <Nav />
      <header className="text-center my-12">
        <h2>Find Game</h2>
      </header>
      <section className="md:mx-32 flex flex-col gap-4 items-center content-center mx-8 my-12">
        <div className="w-full">
          <h4>🎲 Random Queue</h4>
          <p>Search for a random player.</p>
          <button className="mt-1">Queue</button>
        </div>
        <div className="w-full">
          <h4>🏠 Create Room</h4>
          <p>
            You may create a private room - a password will be listed at the
            top. Anyone who provides the password for the "private room" option
            will be able to join.
          </p>
          <button className="mt-1">Create Room</button>
        </div>
        <div className="w-full">
          <h4>🔒 Private Room</h4>
          <p>Provide the correct password to join a private room.</p>
          <input type="text" />
          <button className="ml-2 relative top-1">
            <img src={icSearch} alt="Search Icon" />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
