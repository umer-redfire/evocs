import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { Campaigns } from 'src/theme/app/modules/profile/components/Campaigns';
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
const ProfileCompaignsPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
      <Campaigns />
    </>
  );
};

export default ProfileCompaignsPage;
