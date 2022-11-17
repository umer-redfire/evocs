import { Auth0Client } from '@auth0/auth0-spa-js';

import { AuthProvider } from '@redwoodjs/auth';
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './scaffold.css';
import './index.css';
import '../src/theme/_metronic/assets/sass/style.scss';
import '../src/theme/_metronic/assets/sass/plugins.scss';
import '../src/theme/_metronic/assets/sass/style.react.scss';

import { Suspense } from 'react';
import { I18nProvider } from './theme/_metronic/i18n/i18nProvider';
import { LayoutSplashScreen } from './theme/_metronic/layout/core/MetronicSplashScreen';
import { LayoutProvider } from './theme/_metronic/layout/core/_LayoutProvider';

export enum RoleList {
  User = 'user',
  CustomerAdmin = 'customer_admin',
  EvocsInternal = 'evocs_internal',
  JobServiceWorker = 'job_service_worker',
  Admin = 'admin',
}

const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN,
  redirect_uri: window.location.origin,
  client_id: process.env.AUTH0_CLIENT_ID,

  // ** NOTE ** Storing tokens in browser local storage provides persistence across page refreshes and browser tabs.
  // However, if an attacker can achieve running JavaScript in the SPA using a cross-site scripting (XSS) attack,
  // they can retrieve the tokens stored in local storage.
  // https://auth0.com/docs/libraries/auth0-spa-js#change-storage-options
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_AUDIENCE,

  // @MARK: useRefreshTokens is required for automatically extending sessions
  // beyond that set in the initial JWT expiration.
  //
  // @MARK: https://auth0.com/docs/tokens/refresh-tokens
  useRefreshTokens: true,
});

const App = () => (
  <Suspense fallback={<LayoutSplashScreen />}>
    <I18nProvider>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </I18nProvider>
  </Suspense>
);

export default App;
