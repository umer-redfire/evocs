import { Content } from 'src/theme/_metronic/layout/components/content/Content';
import { FooterWrapper } from 'src/theme/_metronic/layout/components/footer/FooterWrapper';
import { HeaderWrapper } from 'src/theme/_metronic/layout/components/header/HeaderWrapper';
import { ScrollTop } from 'src/theme/_metronic/layout/components/scroll-top/ScrollTop';
import { Sidebar } from 'src/theme/_metronic/layout/components/sidebar/Sidebar';
import { ToolbarWrapper } from 'src/theme/_metronic/layout/components/toolbar/ToolbarWrapper';
import { PageDataProvider } from 'src/theme/_metronic/layout/core/PageData';
import { ActivityDrawer } from 'src/theme/_metronic/partials/layout/activity-drawer/ActivityDrawer';
import { DrawerMessenger } from 'src/theme/_metronic/partials/layout/drawer-messenger/DrawerMessenger';
import { RightToolbar } from 'src/theme/_metronic/partials/layout/RightToolbar';
import { ThemeModeProvider } from 'src/theme/_metronic/partials/layout/theme-mode/ThemeModeProvider';
import { InviteUsers } from 'src/theme/_metronic/partials/modals/invite-users/InviteUsers';
import { UpgradePlan } from 'src/theme/_metronic/partials/modals/upgrade-plan/UpgradePlan';

type MasterLayoutProps = {
  children?: React.ReactNode;
};

const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <>
      {' '}
      <PageDataProvider>
        <ThemeModeProvider>
          <div
            className="d-flex flex-column flex-root app-root"
            id="kt_app_root"
          >
            <div
              className="app-page flex-column flex-column-fluid"
              id="kt_app_page"
            >
              {/* <HeaderWrapper /> */}
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
                    {/* <ToolbarWrapper /> */}
                    {/* <Content>{children}</Content> */}
                  </div>
                  {/* <FooterWrapper /> */}
                </div>
              </div>
            </div>
          </div>

          {/* begin:: Drawers */}
          {/* <ActivityDrawer /> */}
          {/* <RightToolbar /> */}
          {/* <DrawerMessenger /> */}
          {/* end:: Drawers */}

          {/* begin:: Modals */}
          {/* <InviteUsers /> */}
          {/* <UpgradePlan /> */}
          {/* end:: Modals */}
          {/* <ScrollTop /> */}
        </ThemeModeProvider>
      </PageDataProvider>
    </>
  );
};

export default MasterLayout;
