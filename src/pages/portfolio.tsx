import { NextPage } from 'next/types';
import Layout from '../components/layout';
import Portfolio from '../components/portfolio';

const PortfolioPage: NextPage = () => {
  return (
    <>
      <Layout />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
