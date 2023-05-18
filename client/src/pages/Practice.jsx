import Layout from '../layouts/Layout.jsx';
import GameLayout from '../components/game/Game';

import { setPageTitle } from '../utils/setPageTitle';

export default function Practice() {
  setPageTitle('Practice - Riskjack');

  return (
    <Layout>
      <GameLayout />
    </Layout>
  );
}
