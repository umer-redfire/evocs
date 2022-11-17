import type { ComponentMeta } from '@storybook/react'

import ProfileProjectsPage from './ProfileProjectsPage'

export const generated = () => {
  return <ProfileProjectsPage />
}

export default {
  title: 'Pages/ProfileProjectsPage',
  component: ProfileProjectsPage,
} as ComponentMeta<typeof ProfileProjectsPage>
