import type { ComponentMeta } from '@storybook/react'

import WidgetsfeedsPage from './WidgetsfeedsPage'

export const generated = () => {
  return <WidgetsfeedsPage />
}

export default {
  title: 'Pages/WidgetsfeedsPage',
  component: WidgetsfeedsPage,
} as ComponentMeta<typeof WidgetsfeedsPage>
