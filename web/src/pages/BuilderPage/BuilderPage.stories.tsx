import type { ComponentMeta } from '@storybook/react'

import BuilderPage from './BuilderPage'

export const generated = () => {
  return <BuilderPage />
}

export default {
  title: 'Pages/BuilderPage',
  component: BuilderPage,
} as ComponentMeta<typeof BuilderPage>
