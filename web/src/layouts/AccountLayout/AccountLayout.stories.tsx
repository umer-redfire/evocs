import type { ComponentMeta, ComponentStory } from '@storybook/react'

import AccountLayout from './AccountLayout'

export const generated: ComponentStory<typeof AccountLayout> = (args) => {
  return <AccountLayout {...args} />
}

export default {
  title: 'Layouts/AccountLayout',
  component: AccountLayout,
} as ComponentMeta<typeof AccountLayout>
