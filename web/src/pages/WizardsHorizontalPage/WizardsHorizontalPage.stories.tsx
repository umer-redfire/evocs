import type { ComponentMeta } from '@storybook/react'

import WizardsHorizontalPage from './WizardsHorizontalPage'

export const generated = () => {
  return <WizardsHorizontalPage />
}

export default {
  title: 'Pages/WizardsHorizontalPage',
  component: WizardsHorizontalPage,
} as ComponentMeta<typeof WizardsHorizontalPage>
