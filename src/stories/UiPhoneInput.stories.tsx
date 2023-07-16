import 'tailwindcss/tailwind.css';
import type { Meta, StoryObj } from '@storybook/react';
import UiPhoneInput from '../components/UiPhoneInput';

const meta: Meta<typeof UiPhoneInput> = {
  title: 'Components/UiPhoneInput',
  component: UiPhoneInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultState: Story = {};
