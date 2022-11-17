import { FC } from 'react';

import { useAuth } from '@redwoodjs/auth';
import { MetaTags } from '@redwoodjs/web';
import { routes } from '@redwoodjs/router';

const UserAuthTools: FC = () => {
  const { loading, isAuthenticated, logIn, logOut } = useAuth();

  if (loading) {
    return <span>Loading</span>;
  }

  return (
    <button
      onClick={async () => {
        if (isAuthenticated) {
          await logOut({ returnTo: process.env.AUTH0_REDIRECT_URI });
        } else {
          const searchParams = new URLSearchParams(window.location.search);
          await logIn({
            appState: { targetUrl: searchParams.get('redirectTo') },
          });
        }
      }}
    >
      {isAuthenticated ? 'Log out' : 'Log in'}
    </button>
  );
};

const HomePage = () => {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export default HomePage;
