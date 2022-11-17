import type { ComponentMeta } from '@storybook/react'

import Error500Page from './Error500Page'

export const generated = () => {
  return <Error500Page />
}

export default {
  title: 'Pages/Error500Page',
  component: Error500Page,
} as ComponentMeta<typeof Error500Page>
