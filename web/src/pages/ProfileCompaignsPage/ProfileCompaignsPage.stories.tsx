import type { ComponentMeta } from '@storybook/react'

import ProfileCompaignsPage from './ProfileCompaignsPage'

export const generated = () => {
  return <ProfileCompaignsPage />
}

export default {
  title: 'Pages/ProfileCompaignsPage',
  component: ProfileCompaignsPage,
} as ComponentMeta<typeof ProfileCompaignsPage>
