export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cloudflare WAF Custom Pages",
  description:
    "A beautiful, out-of-the-box Cloudflare WAF custom page template.",
  headerNavItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  links: {
    // 设置为 "#" 则不会跳转到其他页面。
    github: "https://github.com/Alice39s/cloudflare-custom-pages-nextjs",
    docs: "https://github.com/Alice39s/cloudflare-custom-pages-nextjs?tab=readme-ov-file#-usage",
  },
  // 是否输出版权信息, 生产环境建议关闭，如二次开发等情况则建议开启，感谢支持!
  enableCopyrightConsole: false,
};
