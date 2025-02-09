import type { Meta, StoryObj } from "@storybook/react";

import TeamCard from "@/components/team/Card/TeamCard";

const meta: Meta<typeof TeamCard> = {
  component: TeamCard,
};

export default meta;
type Story = StoryObj<typeof TeamCard>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
  },
};
