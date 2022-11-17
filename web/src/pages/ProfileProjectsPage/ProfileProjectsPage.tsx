import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { Projects } from 'src/theme/app/modules/profile/components/Projects';
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
const ProfileProjectsPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
      <Projects />
    </>
  );
};

export default ProfileProjectsPage;
