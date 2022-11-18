/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useIntl } from 'react-intl';
// import {KTSVG} from '../../../../helpers'
import { Link } from '@redwoodjs/router';
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub';
import { SidebarMenuItem } from './SidebarMenuItem';
import { KTSVG } from '../../../../helpers/components/KTSVG';
import Accordion from 'react-bootstrap/Accordion';

const SidebarMenuMain = () => {
  const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to="/dashboard"
        icon="/media/icons/duotune/art/art002.svg"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon="bi-app-indicator"
      />
      <SidebarMenuItem
        to="/builder"
        icon="/media/icons/duotune/general/gen019.svg"
        title="Layout Builder"
        fontIcon="bi-layers"
      />
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Crafted
          </span>
        </div>
      </div>

      {/* <SidebarMenuItemWithSub
        to="/crafted/pages"
        title="Pages"
        fontIcon="bi-archive"
        icon="/media/icons/duotune/general/gen022.svg"
      >
        <SidebarMenuItemWithSub
          to="/crafted/pages/profile"
          title="Profile"
          hasBullet={true}
        >
          <SidebarMenuItem
            to="/crafted/pages/profile/overview"
            title="Overview"
            hasBullet={true}
          />
          <SidebarMenuItem
            to="/crafted/pages/profile/projects"
            title="Projects"
            hasBullet={true}
          />
          <SidebarMenuItem
            to="/crafted/pages/profile/campaigns"
            title="Campaigns"
            hasBullet={true}
          />
          <SidebarMenuItem
            to="/crafted/pages/profile/documents"
            title="Documents"
            hasBullet={true}
          />
          <SidebarMenuItem
            to="/crafted/pages/profile/connections"
            title="Connections"
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub
          to="/crafted/pages/wizards"
          title="Wizards"
          hasBullet={true}
        >
          <SidebarMenuItem
            to="/crafted/pages/wizards/horizontal"
            title="Horizontal"
            hasBullet={true}
          />
          <SidebarMenuItem
            to="/crafted/pages/wizards/vertical"
            title="Vertical"
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub> */}

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <KTSVG
              path="/media/icons/duotune/general/gen022.svg"
              className="svg-icon-2"
            />{' '}
            <span style={{ paddingLeft: '6px' }}>Pages</span>
          </Accordion.Header>
          <Accordion.Body>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Profile</span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <Link to="/crafted/pages/profile/overview">
                        <span className="bullet bullet-dot"></span>{' '}
                        <span style={{ paddingLeft: '6px' }}>Overview</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/crafted/pages/profile/projects">
                        <span className="bullet bullet-dot"></span>{' '}
                        <span style={{ paddingLeft: '6px' }}>Projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/crafted/pages/profile/campaigns">
                        <span className="bullet bullet-dot"></span>{' '}
                        <span style={{ paddingLeft: '6px' }}>Campaigns</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/crafted/pages/profile/documents">
                        <span className="bullet bullet-dot"></span>{' '}
                        <span style={{ paddingLeft: '6px' }}>Documents</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/crafted/pages/profile/connections">
                        <span className="bullet bullet-dot"></span>{' '}
                        <span style={{ paddingLeft: '6px' }}>Connections</span>
                      </Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Wizards</span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <Link to="/crafted/pages/wizards/horizontal">
                        <span className="bullet bullet-dot"></span>{' '}
                        <span style={{ paddingLeft: '6px' }}>Horizontal</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/crafted/pages/wizards/vertical">
                        <span className="bullet bullet-dot"></span>{' '}
                        <span style={{ paddingLeft: '6px' }}>Vertical</span>
                      </Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <KTSVG
              path="/media/icons/duotune/communication/com006.svg"
              className="svg-icon-2"
            />{' '}
            <span style={{ paddingLeft: '6px' }}> Accounts</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/crafted/account/overview">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/crafted/account/settings">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Settings</span>
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* <SidebarMenuItemWithSub
        to="/crafted/accounts"
        title="Accounts"
        icon="/media/icons/duotune/communication/com006.svg"
        fontIcon="bi-person"
      >
        <SidebarMenuItem
          to="/crafted/account/overview"
          title="Overview"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/account/settings"
          title="Settings"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}

      <Accordion>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <KTSVG
              path="/media/icons/duotune/general/gen040.svg"
              className="svg-icon-2"
            />{' '}
            <span style={{ paddingLeft: '6px' }}> Errors</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/error/404">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Error 404</span>
                </Link>
              </li>
              <li>
                <Link to="/error/500">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Error 500</span>
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <SidebarMenuItemWithSub
        to="/error"
        title="Errors"
        fontIcon="bi-sticky"
        icon="/media/icons/duotune/general/gen040.svg"
      >
        <SidebarMenuItem to="/error/404" title="Error 404" hasBullet={true} />
        <SidebarMenuItem to="/error/500" title="Error 500" hasBullet={true} />
      </SidebarMenuItemWithSub> */}
      <Accordion>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <KTSVG
              path="/media/icons/duotune/general/gen025.svg"
              className="svg-icon-2"
            />{' '}
            <span style={{ paddingLeft: '6px' }}> Widgets</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/crafted/widgets/lists">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Lists</span>
                </Link>
              </li>
              <li>
                <Link to="/crafted/widgets/statistics">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Statistics</span>
                </Link>
              </li>
              <li>
                <Link to="/crafted/widgets/charts">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Charts</span>
                </Link>
              </li>
              <li>
                <Link to="/crafted/widgets/mixed">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Mixed</span>
                </Link>
              </li>
              <li>
                <Link to="/crafted/widgets/tables">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Tables</span>
                </Link>
              </li>
              <li>
                <Link to="/crafted/widgets/feeds">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Feeds</span>
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <SidebarMenuItemWithSub
        to="/crafted/widgets"
        title="Widgets"
        icon="/media/icons/duotune/general/gen025.svg"
        fontIcon="bi-layers"
      >
        <SidebarMenuItem
          to="/crafted/widgets/lists"
          title="Lists"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/widgets/statistics"
          title="Statistics"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/widgets/charts"
          title="Charts"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/widgets/mixed"
          title="Mixed"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/widgets/tables"
          title="Tables"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/widgets/feeds"
          title="Feeds"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Apps
          </span>
        </div>
      </div>
      <Accordion>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <KTSVG
              path="/media/icons/duotune/communication/com012.svg"
              className="svg-icon-2"
            />{' '}
            <span style={{ paddingLeft: '6px' }}> Chat</span>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <Link to="/apps/chat/private-chat">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Private Chat</span>
                </Link>
              </li>
              <li>
                <Link to="/apps/chat/group-chat">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Group Chat</span>
                </Link>
              </li>
              <li>
                <Link to="/apps/chat/drawer-chat">
                  {' '}
                  <span className="bullet bullet-dot"></span>{' '}
                  <span style={{ paddingLeft: '6px' }}>Drawer Chat</span>
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <SidebarMenuItemWithSub
        to="/apps/chat"
        title="Chat"
        fontIcon="bi-chat-left"
        icon="/media/icons/duotune/communication/com012.svg"
      >
        <SidebarMenuItem
          to="/apps/chat/private-chat"
          title="Private Chat"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/apps/chat/group-chat"
          title="Group Chart"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/apps/chat/drawer-chat"
          title="Drawer Chart"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub> */}
      <SidebarMenuItem
        to="/apps/user-management/users"
        icon="/media/icons/duotune/general/gen051.svg"
        title="User management"
        fontIcon="bi-layers"
      />
      <div className="menu-item">
        <a
          target="_blank"
          className="menu-link"
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className="menu-icon">
            <KTSVG
              path="/media/icons/duotune/general/gen005.svg"
              className="svg-icon-2"
            />
          </span>
          <span className="menu-title">
            Changelog {process.env.REACT_APP_VERSION}
          </span>
        </a>
      </div>
    </>
  );
};

export { SidebarMenuMain };
