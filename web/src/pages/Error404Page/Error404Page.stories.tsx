import type { ComponentMeta } from '@storybook/react'

import Error404Page from './Error404Page'

export const generated = () => {
  return <Error404Page />
}

export default {
  title: 'Pages/Error404Page',
  component: Error404Page,
} as ComponentMeta<typeof Error404Page>
