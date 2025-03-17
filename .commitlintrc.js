import { commitLintConfig } from '@kurocado-studio/styleguide';

export default {
  ...commitLintConfig,
  ignores: [(message) => /^bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message)],
};
