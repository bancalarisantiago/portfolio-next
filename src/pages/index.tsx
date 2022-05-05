import type { NextPage } from 'next';

import Landing from '../components/landing';
import { useRouter } from 'next/router';
import Header from '../components/header';
const HomePage: NextPage = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Header activeLink={path} />
      <Landing />
    </>
  );
};

export default HomePage;
