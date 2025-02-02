import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LUCA',
  tagline: 'Transforme sua Loja Shopify com a Biblioteca de Componentes LUCA',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://luca-copilot.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc-public/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'luca-copilot/vitormateus', // Usually your GitHub org/user name.
  projectName: 'doc-public', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/luca-copilot/documentation/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/luca-copilot/documentation/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/social-card.png',
    navbar: {
      logo: {
        alt: 'LUCA logo',
        src: 'img/luca-gradient-laranja.png',
      },
      items: [
        {
          href: 'https://app.luca.global/signup',
          label: 'Experimentar agora',
          position: 'right',
        },
        {
          href: 'https://github.com/luca-copilot/documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Todos os direitos reservados © ${new Date().getFullYear()} LUCA.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  customFields: {
    hasTrailingSlash: false, // Moved to customFields
  },
};

export default config;