import type { ComponentMeta } from '@storybook/react'

import WidgetslistsPage from './WidgetslistsPage'

export const generated = () => {
  return <WidgetslistsPage />
}

export default {
  title: 'Pages/WidgetslistsPage',
  component: WidgetslistsPage,
} as ComponentMeta<typeof WidgetslistsPage>
