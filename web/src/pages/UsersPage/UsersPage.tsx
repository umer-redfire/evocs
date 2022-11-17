import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { UsersListWrapper } from 'src/theme/app/modules/apps/user-management/users-list/UsersList';
import { usersBreadcrumbs } from 'src/theme/app/modules/apps/user-management/UsersPage';
import { PageTitle } from 'src/theme/_metronic/layout/core/PageData';

const UsersPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={usersBreadcrumbs}>Users list</PageTitle>
      <UsersListWrapper />
    </>
  );
};

export default UsersPage;
