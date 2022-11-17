import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { Documents } from 'src/theme/app/modules/profile/components/Documents';
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
const ProfileDocumentsPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
      <Documents />
    </>
  );
};

export default ProfileDocumentsPage;
