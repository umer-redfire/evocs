import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { chatBreadCrumbs } from 'src/theme/app/modules/apps/chat/ChatPage';
import { Group } from 'src/theme/app/modules/apps/chat/components/Group';
import { PageTitle } from 'src/theme/_metronic/layout/core/PageData';

const GroupChatPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={chatBreadCrumbs}>Group chat</PageTitle>
      <Group />
    </>
  );
};

export default GroupChatPage;
