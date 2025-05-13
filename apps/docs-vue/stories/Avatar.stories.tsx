/* eslint import/no-default-export: 0 */
import { AvatarStories } from '@kurocado-studio/ui/stories';
import { Avatar, type AvatarProps } from '@kurocado-studio/ui/vue';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  ...AvatarStories.avatarMeta,
  render: (args: AvatarProps) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `<Avatar v-bind="args" />`,
  }),
};

export const WithMotionProps = AvatarStories.withMotionProps;
export const WithSize = AvatarStories.withSize;
