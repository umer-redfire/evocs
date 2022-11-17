import type { ComponentMeta } from '@storybook/react'

import WidgettablesPage from './WidgettablesPage'

export const generated = () => {
  return <WidgettablesPage />
}

export default {
  title: 'Pages/WidgettablesPage',
  component: WidgettablesPage,
} as ComponentMeta<typeof WidgettablesPage>
