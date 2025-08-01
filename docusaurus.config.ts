import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from '@docusaurus/types/src/plugin';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Brale Stablecoin API Docs',
  tagline: 'Brale Stablecoin API Documentation',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs.brale.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'brale-xyz', // Usually your GitHub org/user name.
  projectName: 'docs-brale-xyz', // Usually your repo name.

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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
          editUrl: 'https://github.com/brale-xyz/docs-brale-xyz/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async params => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter(item => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api', // plugin id
        docsPluginId: 'classic', // configured for preset-classic
        config: {
          brale: {
            specPath: 'static/openapi/api-brale-xyz.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
    [
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        includeOrder: ['/overview/**', '/key-concepts/**', '/guides/**', '/coverage/**', '/api/**'],
        siteTitle: 'Brale API Docs',
        siteDescription: 'Brale API Documentation',
        depth: 2,
        content: {
          enableLlmsFullTxt: true,
          excludeRoutes: [
            '**/_category_/**', // Exclude Docusaurus category pages
            '**/*.xml', // Exclude XML files
            '/404', // Exclude error pages
          ],
        },
        optionalLinks: [
          {
            title: 'OpenAPI Spec',
            url: 'https://github.com/Brale-xyz/commons/blob/main/Resources/api-brale-xyz.yaml',
            description: 'Machine-readable API specification',
          },
        ],
      },
    ],
  ],

  scripts: [
    {
      src: 'https://plausible.io/js/plausible.js',
      async: true,
      defer: true,
      'data-domain': 'docs.brale.xyz',
    },
  ],

  themes: ['docusaurus-theme-openapi-docs'], // export theme components

  themeConfig: {
    // Replace with your project's social card
    image: 'img/og-image.png',
    languageTabs: [
      {
        language: 'javascript',
      },
      {
        language: 'python',
      },
      {
        highlight: 'bash',
        language: 'curl',
      },
      {
        language: 'csharp',
      },
      {
        language: 'go',
      },
      {
        language: 'nodejs',
      },
      {
        language: 'ruby',
      },
      {
        language: 'php',
      },
      {
        language: 'java',
      },
      {
        language: 'powershell',
      },
      {
        language: 'dart',
      },
      {
        language: 'c',
      },
      {
        language: 'objective-c',
      },
      {
        language: 'ocaml',
      },
      {
        language: 'r',
      },
      {
        language: 'swift',
      },
      {
        language: 'kotlin',
      },
      {
        language: 'rust',
      },
    ],
    navbar: {
      logo: {
        alt: 'Brale logo',
        src: 'img/brale-logo-light.svg',
        srcDark: 'img/brale-logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
      ],
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        'bash',
        'python',
        'go',
        'javascript',
        'ruby',
        'csharp',
        'php',
        'java',
        'powershell',
        'dart',
        'kotlin',
        'objectivec',
        'ocaml',
        'r',
        'rust',
        'swift',
        'json',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
