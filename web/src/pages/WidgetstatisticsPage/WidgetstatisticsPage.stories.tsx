import type { ComponentMeta } from '@storybook/react'

import WidgetstatisticsPage from './WidgetstatisticsPage'

export const generated = () => {
  return <WidgetstatisticsPage />
}

export default {
  title: 'Pages/WidgetstatisticsPage',
  component: WidgetstatisticsPage,
} as ComponentMeta<typeof WidgetstatisticsPage>
