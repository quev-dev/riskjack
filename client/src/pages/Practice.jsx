import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GameLayout from '../components/game/Game';

import { setPageTitle } from '../utils/setPageTitle';

export default function Practice() {
  setPageTitle('Practice - Riskjack');

  return (
    <>
      <Nav />

      <main>
        <GameLayout />
      </main>

      <Footer />
    </>
  );
}
