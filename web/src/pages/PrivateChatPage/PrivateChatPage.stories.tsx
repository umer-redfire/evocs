import type { ComponentMeta } from '@storybook/react'

import PrivateChatPage from './PrivateChatPage'

export const generated = () => {
  return <PrivateChatPage />
}

export default {
  title: 'Pages/PrivateChatPage',
  component: PrivateChatPage,
} as ComponentMeta<typeof PrivateChatPage>
