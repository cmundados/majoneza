/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-onboarding", "@storybook/addon-interactions", "@storybook/storybook-addon-designs", "@storybook/addon-mdx-gfm"],
  reactOptions: {
    fastRefresh: true
  },
  docs: {
    autodocs: "tag"
  },
  framework: {
    name: "@storybook/react-vite",
    options: {
      fastRefresh: true
    }
  }
};
export default config;