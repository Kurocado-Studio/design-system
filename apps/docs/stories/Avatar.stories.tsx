/* eslint import/no-default-export: 0 */
import { Avatar } from '@kurocado-studio/ui/react';
import { AvatarStories } from '@kurocado-studio/ui/stories';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  ...AvatarStories.avatarMeta,
};
export const WithMotionProps = AvatarStories.withMotionProps;
export const WithSize = AvatarStories.withSize;
