import type { ComponentMeta } from '@storybook/react'

import MenuTestPage from './MenuTestPage'

export const generated = () => {
  return <MenuTestPage />
}

export default {
  title: 'Pages/MenuTestPage',
  component: MenuTestPage,
} as ComponentMeta<typeof MenuTestPage>
