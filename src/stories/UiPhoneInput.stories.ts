import type { Meta, StoryObj } from '@storybook/react';
import UiPhoneInput from '../components/UiPhoneInput';
import 'tailwindcss/tailwind.css';

const meta: Meta<typeof UiPhoneInput> = {
  title: 'Components/UiPhoneInput',
  component: UiPhoneInput,
  tags: ['autodocs'],
  args: {
    value: ''
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultState: Story = {
  args: {
    value: ''
  },};
