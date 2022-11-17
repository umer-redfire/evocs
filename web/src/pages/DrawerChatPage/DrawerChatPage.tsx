import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { chatBreadCrumbs } from 'src/theme/app/modules/apps/chat/ChatPage';
import { Drawer } from 'src/theme/app/modules/apps/chat/components/Drawer';
import { PageTitle } from 'src/theme/_metronic/layout/core/PageData';

const DrawerChatPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={chatBreadCrumbs}>Drawer chat</PageTitle>
      <Drawer />
    </>
  );
};

export default DrawerChatPage;
