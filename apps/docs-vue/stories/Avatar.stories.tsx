/* eslint import/no-default-export: 0 */
import { AvatarStories } from '@kurocado-studio/ui/stories';
import { Avatar } from '@kurocado-studio/ui/vue';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  ...AvatarStories.avatarMeta,
};
export const WithMotionProps = AvatarStories.withMotionProps;
export const WithSize = AvatarStories.withSize;
