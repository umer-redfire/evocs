import type { ComponentMeta } from '@storybook/react'

import AccountsettingsPage from './AccountsettingsPage'

export const generated = () => {
  return <AccountsettingsPage />
}

export default {
  title: 'Pages/AccountsettingsPage',
  component: AccountsettingsPage,
} as ComponentMeta<typeof AccountsettingsPage>
