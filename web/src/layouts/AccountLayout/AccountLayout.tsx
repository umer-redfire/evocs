import { AccountHeader } from 'src/theme/app/modules/accounts/AccountHeader';

type AccountLayoutProps = {
  children?: React.ReactNode;
};

const AccountLayout = ({ children }: AccountLayoutProps) => {
  return (
    <>
      <AccountHeader />
      {children}
    </>
  );
};

export default AccountLayout;
