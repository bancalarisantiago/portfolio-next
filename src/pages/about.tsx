import { NextPage } from 'next/types';

import Layout from '../components/layout';
import About from '../components/about';

const AboutPage: NextPage = () => {
  return (
    <>
      <Layout />
      <About />
    </>
  );
};

export default AboutPage;
