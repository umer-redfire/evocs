import type { ComponentMeta } from '@storybook/react'

import AccountoverviewPage from './AccountoverviewPage'

export const generated = () => {
  return <AccountoverviewPage />
}

export default {
  title: 'Pages/AccountoverviewPage',
  component: AccountoverviewPage,
} as ComponentMeta<typeof AccountoverviewPage>
