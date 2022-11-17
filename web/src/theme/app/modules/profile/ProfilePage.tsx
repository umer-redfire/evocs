import { Navigate, Routes, Route, Outlet } from 'react-router-dom';
import { Overview } from './components/Overview';
import { Projects } from './components/Projects';
import { Campaigns } from './components/Campaigns';
import { Documents } from './components/Documents';
import { Connections } from './components/Connections';
import { ProfileHeader } from './ProfileHeader';
import { PageLink, PageTitle } from '../../../_metronic/layout/core/PageData';
import { Children, ReactNode } from 'react';

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/crafted/pages/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
];
type ProfilePageChildren = {
  children: ReactNode;
};

const ProfilePage = ({ children }: ProfilePageChildren) => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          {children}
        </>
      }
    >
      <Route
        path="overview"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path="projects"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
            <Projects />
          </>
        }
      />
      <Route
        path="campaigns"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
            <Campaigns />
          </>
        }
      />
      <Route
        path="documents"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
            <Documents />
          </>
        }
      />
      <Route
        path="connections"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
            <Connections />
          </>
        }
      />
      <Route
        index
        element={<Navigate to="/crafted/pages/profile/overview" />}
      />
    </Route>
  </Routes>
);

export default ProfilePage;
