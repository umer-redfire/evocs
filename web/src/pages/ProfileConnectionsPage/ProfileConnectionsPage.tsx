import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { Connections } from 'src/theme/app/modules/profile/components/Connections';
import { PageLink, PageTitle } from 'src/theme/_metronic/layout/core/PageData';
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
const ProfileConnectionsPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
      <Connections />
    </>
  );
};

export default ProfileConnectionsPage;
