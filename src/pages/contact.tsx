import { NextPage } from 'next/types';

import Contact from '../components/contact';

const ContactPage: NextPage = (props) => {
  return (
    <>
      <Contact keys={props} />
    </>
  );
};

export const getServerSideProps = async () => {
  const emailJsApiKey = process.env.EMAILJS_API_KEY;
  const emailJsServiceId = process.env.EMAILJS_SERVICE_ID;
  const emailJsTemplateId = process.env.EMAILJS_TEMPLATE_ID;
  return {
    props: {
      emailJsApiKey,
      emailJsServiceId,
      emailJsTemplateId,
    },
  };
};

export default ContactPage;
