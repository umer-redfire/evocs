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
import { BrowserRouter } from 'react-router-dom';

export enum RoleList {
  User = 'user',
  CustomerAdmin = 'customer_admin',
  EvocsInternal = 'evocs_internal',
  JobServiceWorker = 'job_service_worker',
  Admin = 'admin',
}

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </RedwoodProvider>
      </I18nProvider>
    </Suspense>
  </BrowserRouter>
);

export default App;
