import type { ComponentMeta } from '@storybook/react'

import WidgetschartsPage from './WidgetschartsPage'

export const generated = () => {
  return <WidgetschartsPage />
}

export default {
  title: 'Pages/WidgetschartsPage',
  component: WidgetschartsPage,
} as ComponentMeta<typeof WidgetschartsPage>
