import type { ComponentMeta } from '@storybook/react'

import ProfileDocumentsPage from './ProfileDocumentsPage'

export const generated = () => {
  return <ProfileDocumentsPage />
}

export default {
  title: 'Pages/ProfileDocumentsPage',
  component: ProfileDocumentsPage,
} as ComponentMeta<typeof ProfileDocumentsPage>
