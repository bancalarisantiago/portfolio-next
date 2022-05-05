import type { NextPage } from 'next';

import Layout from '../components/layout';
import Landing from '../components/landing';
const HomePage: NextPage = () => {
  return (
    <>
      <Layout />
      <Landing />
    </>
  );
};

export default HomePage;
