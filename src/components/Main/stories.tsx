import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
    title: 'Main',
    component: Main,
    args: {
        title: "title padrao",
        description: "description padrao"
    }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
    title: "title alterado",
    description: "description alterado"
}

export const Default: Story = (args) => <Main {...args} />
