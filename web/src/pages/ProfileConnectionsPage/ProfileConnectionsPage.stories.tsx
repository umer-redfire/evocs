import type { ComponentMeta } from '@storybook/react'

import ProfileConnectionsPage from './ProfileConnectionsPage'

export const generated = () => {
  return <ProfileConnectionsPage />
}

export default {
  title: 'Pages/ProfileConnectionsPage',
  component: ProfileConnectionsPage,
} as ComponentMeta<typeof ProfileConnectionsPage>
