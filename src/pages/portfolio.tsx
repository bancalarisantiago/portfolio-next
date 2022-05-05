import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import Header from '../components/header';

import Portfolio from '../components/portfolio';

const PortfolioPage: NextPage = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Header activeLink={path} />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
