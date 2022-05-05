import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

import Contact from '../components/contact';
import Header from '../components/header';

const ContactPage: NextPage = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Header activeLink={path} />
      <Contact />
    </>
  );
};

export default ContactPage;
