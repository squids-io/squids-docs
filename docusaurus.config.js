// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Squids Docs',
  tagline: 'Squids，构建于多云的新一代 RDS',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'squids.cn', // Usually your GitHub org/user name.
  projectName: 'squids-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      // en: {
      //   htmlLang: 'en-GB',
      // },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Squids Docs',
        logo: {
          alt: 'Squids Docs Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/docs', label: '文档', position: 'left' },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://console.squids.cn',
            label: '免费使用',
            position: 'left',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '产品介绍',
                to: '/docs/product/intro',
              },
              {
                label: '快速开始',
                to: '/docs/quick-start',
              },
            ],
          },
          {
            title: '其他产品',
            items: [
              {
                label: '数据迁移工具 DBMotion',
                href: 'https://squids.cn/product/dbmotion',
              },
              {
                label: '数据备份 DBS',
                href: 'https://squids.cn/product/dbs',
              },
              {
                label: '云应用平台',
                href: 'https://squids.cn/product/cloud-app',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'IRDS',
                href: 'https://www.irds.cn',
              },
              {
                label: '沃趣科技',
                href: 'http://woqutech.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Squids.cn, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
