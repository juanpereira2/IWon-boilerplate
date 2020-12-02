import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
title: 'Button',
component: Button,
args: {
title: "title padrao",
description: "description padrao"
}
} as Meta

export const Basic: Story = (args) =>
<Button />