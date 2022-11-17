import { RoleList } from 'src/lib/auth';

export const mockUser = () => {
  mockCurrentUser({
    userID: 123,
    roles: [RoleList.Admin, RoleList.EvocsInternal],
  });
};
