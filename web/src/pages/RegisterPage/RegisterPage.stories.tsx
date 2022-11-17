import type { ComponentMeta } from '@storybook/react'

import RegisterPage from './RegisterPage'

export const generated = () => {
  return <RegisterPage />
}

export default {
  title: 'Pages/RegisterPage',
  component: RegisterPage,
} as ComponentMeta<typeof RegisterPage>
