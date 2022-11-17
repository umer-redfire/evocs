import type { ComponentMeta, ComponentStory } from '@storybook/react'

import MasterLayout from './MasterLayout'

export const generated: ComponentStory<typeof MasterLayout> = (args) => {
  return <MasterLayout {...args} />
}

export default {
  title: 'Layouts/MasterLayout',
  component: MasterLayout,
} as ComponentMeta<typeof MasterLayout>
