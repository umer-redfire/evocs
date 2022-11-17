import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ProfileLayout from './ProfileLayout'

export const generated: ComponentStory<typeof ProfileLayout> = (args) => {
  return <ProfileLayout {...args} />
}

export default {
  title: 'Layouts/ProfileLayout',
  component: ProfileLayout,
} as ComponentMeta<typeof ProfileLayout>
