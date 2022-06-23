//Next
import { NextPage, GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

//Components
import Dashboard from '../components/dashboard';

interface Props {
  session: any;
}

const DashboardPage: NextPage<Props> = ({ session }) => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };

  return {
    props: { session },
  };
};
