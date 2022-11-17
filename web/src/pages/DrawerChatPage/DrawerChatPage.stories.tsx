import type { ComponentMeta } from '@storybook/react'

import DrawerChatPage from './DrawerChatPage'

export const generated = () => {
  return <DrawerChatPage />
}

export default {
  title: 'Pages/DrawerChatPage',
  component: DrawerChatPage,
} as ComponentMeta<typeof DrawerChatPage>
