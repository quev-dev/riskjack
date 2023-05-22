import GameLayout from '../components/game/Game';
import Nav from '../components/Nav';

import { setPageTitle } from '../utils/setPageTitle';

export default function Practice() {
  setPageTitle('Practice - Riskjack');

  return (
    <div>
      <Nav />
      <GameLayout />
    </div>
  );
}
