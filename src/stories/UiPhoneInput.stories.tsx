import 'tailwindcss/tailwind.css';
import type { Meta, StoryObj } from '@storybook/react';
import UiPhoneInput from '../components/UiPhoneInput';

const meta: Meta<typeof UiPhoneInput> = {
  title: 'Components/UiPhoneInput',
  component: UiPhoneInput,
  tags: ['autodocs'],
  args: {
    value: '',
    name: 'phoneInput',
    defaultCountry: '+39',
    error: '',
    onChange: (event) => console.log(event),
  },
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    defaultCountry: { control: 'text' },
    error: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    value: ''
  },};
