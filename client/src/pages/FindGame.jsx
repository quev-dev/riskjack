import Nav from "../components/Nav";
import Footer from "../components/Footer";

import icSearch from "../content/svgs/search.svg";

export default function FindGame() {
  return (
    <div id="page">
      <Nav />
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
            You may create a private room - a password will be listed at the top. Anyone
            who provides the password for the "private room" option will be able to join.
          </p>
          <button className="mt-1 max-w-max">Create Room</button>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h3>Private Room 🔒</h3>
          <p>Provide the correct password to join a private room.</p>
          <div>
            <input type="text" />
            <button className="ml-2 relative top-1">
              <img src={icSearch} alt="Search Icon" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
