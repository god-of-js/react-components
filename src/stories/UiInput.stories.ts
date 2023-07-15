import type { Meta, StoryObj } from "@storybook/react";
import UiInput from "../components/UiPhoneInput";
import 'tailwindcss/tailwind.css';


const meta: Meta<typeof UiInput> =  {
  title: "Components/UiInput",
  component: UiInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};


export default meta;

type Story = StoryObj<typeof meta>;

export const defaultState: Story = {}