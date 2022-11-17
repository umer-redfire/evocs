import { MetaTags } from '@redwoodjs/web';
import { chatBreadCrumbs } from 'src/theme/app/modules/apps/chat/ChatPage';
import { Private } from 'src/theme/app/modules/apps/chat/components/Private';
import { PageTitle } from 'src/theme/_metronic/layout/core/PageData';

const PrivateChatPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={chatBreadCrumbs}>Private chat</PageTitle>
      <Private />
    </>
  );
};

export default PrivateChatPage;
