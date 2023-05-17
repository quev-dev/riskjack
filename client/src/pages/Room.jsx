import Layout from '../layouts/Layout.jsx';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Room({ socket }) {
  const { id } = useParams();

  return (
    <Layout>
      <p>Yeah</p>
    </Layout>
  );
}
