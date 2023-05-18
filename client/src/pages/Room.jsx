import Layout from '../layouts/Layout.jsx';

import { setPageTitle } from '../utils/setPageTitle.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Room({ socket }) {
  setPageTitle('Waiting Room - Riskjack');
  const { id } = useParams();

  return (
    <Layout>
      <p>Yeah</p>
    </Layout>
  );
}
