import type { ComponentMeta } from '@storybook/react'

import WizardsVerticalPage from './WizardsVerticalPage'

export const generated = () => {
  return <WizardsVerticalPage />
}

export default {
  title: 'Pages/WizardsVerticalPage',
  component: WizardsVerticalPage,
} as ComponentMeta<typeof WizardsVerticalPage>
