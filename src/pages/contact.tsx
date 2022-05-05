import { NextPage } from 'next/types';
import Layout from '../components/layout';
import Contact from '../components/contact';

const ContactPage: NextPage = () => {
  return (
    <>
      <Layout />
      <Contact />
    </>
  );
};

export default ContactPage;
