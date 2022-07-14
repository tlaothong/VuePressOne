import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Home',
        link: '/',
      },
      // string - page file path
      '/Page1.md',
    ]
  })
});