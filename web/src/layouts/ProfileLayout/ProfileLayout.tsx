import { ProfileHeader } from 'src/theme/app/modules/profile/ProfileHeader';
import { PageLink, PageTitle } from 'src/theme/_metronic/layout/core/PageData';

type ProfileLayoutProps = {
  children?: React.ReactNode;
};

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

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <>
      <ProfileHeader />
      <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
      {children}
    </>
  );
};

export default ProfileLayout;
