import type { ComponentMeta } from '@storybook/react'

import GroupChatPage from './GroupChatPage'

export const generated = () => {
  return <GroupChatPage />
}

export default {
  title: 'Pages/GroupChatPage',
  component: GroupChatPage,
} as ComponentMeta<typeof GroupChatPage>
