import { NextPage } from 'next/types';

import Header from '../components/header';
import About from '../components/about';
import { useRouter } from 'next/router';

const AboutPage: NextPage = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <Header activeLink={path} />
      <About />
    </>
  );
};

export default AboutPage;
