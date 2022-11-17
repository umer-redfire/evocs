import type { ComponentMeta } from '@storybook/react'

import WidgetsmixedPage from './WidgetsmixedPage'

export const generated = () => {
  return <WidgetsmixedPage />
}

export default {
  title: 'Pages/WidgetsmixedPage',
  component: WidgetsmixedPage,
} as ComponentMeta<typeof WidgetsmixedPage>
