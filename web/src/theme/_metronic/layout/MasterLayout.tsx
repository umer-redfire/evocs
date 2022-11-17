import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { RightToolbar } from '../partials/layout/RightToolbar';

import { ToolbarWrapper } from './components/toolbar/ToolbarWrapper';
import { reInitMenu } from '../helpers/react18MigrationHelpers';
import { PageDataProvider } from './core/PageData';
import { ThemeModeProvider } from '../partials/layout/theme-mode/ThemeModeProvider';
import { ActivityDrawer } from '../partials/layout/activity-drawer/ActivityDrawer';
import { DrawerMessenger } from '../partials/layout/drawer-messenger/DrawerMessenger';
import { InviteUsers } from '../partials/modals/invite-users/InviteUsers';
import { UpgradePlan } from '../partials/modals/upgrade-plan/UpgradePlan';
import { Sidebar } from './components/sidebar/Sidebar';
import { FooterWrapper } from './components/footer/FooterWrapper';
import { Content } from './components/content/Content';
import { ScrollTop } from './components/scroll-top/ScrollTop';
import { HeaderWrapper } from './components/header/HeaderWrapper';

type MasterLayoutChildren = {
  children: React.ReactNode;
};

const MasterLayout = ({ children }: MasterLayoutChildren) => {
  const location = useLocation();
  useEffect(() => {
    reInitMenu();
  }, [location.key]);

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
          <div
            className="app-page flex-column flex-column-fluid"
            id="kt_app_page"
          >
            <HeaderWrapper />
            <div
              className="app-wrapper flex-column flex-row-fluid"
              id="kt_app_wrapper"
            >
              <Sidebar />
              <div
                className="app-main flex-column flex-row-fluid"
                id="kt_app_main"
              >
                <div className="d-flex flex-column flex-column-fluid">
                  <ToolbarWrapper />
                  <Content>{children}</Content>
                </div>
                <FooterWrapper />
              </div>
            </div>
          </div>
        </div>

        {/* begin:: Drawers */}
        <ActivityDrawer />
        <RightToolbar />
        <DrawerMessenger />
        {/* end:: Drawers */}

        {/* begin:: Modals */}
        <InviteUsers />
        <UpgradePlan />
        {/* end:: Modals */}
        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  );
};

export { MasterLayout };
