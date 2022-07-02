import baseConfig from "@subicura/vitepress-theme/config";

const nav = [
  {
    text: "📔 SDK 개발자 문서",
    activeMatch: `^/guide/`,
    link: "/guide/hello",
  },
];

export const sidebar = {
  "/guide/": getGuideSidebar(),
};

function getGuideSidebar() {
  return [
    {
      text: "들어가기",
      items: [{ text: "SDK 안내", link: "/guide/hello" }],
    },
    {
      text: "SDK Reference",
      items: [{ text: "Codenbutter", link: "/guide/js" }],
    },
  ];
}

export default {
  extends: baseConfig,

  lang: "ko-KR",
  title: "코드앤버터 안내서",
  description: "코드앤버터 안내서 / codenbutter guide",
  srcDir: "src",
  scrollOffset: "header",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/icons/favicon-32x32.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `/icons/apple-touch-icon.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
        media: "(prefers-color-scheme: light)",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#1a1a1a",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/mstile-150x150.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    [
      "script",
      {
        src: "https://distinct-protected.subicura.dev/script.js",
        "data-site": "AIERDXCX",
        "data-spa": "auto",
        defer: "",
      },
    ],
    [
      "meta",
      {
        name: "og:image",
        content: "https://docs.codenbutter.com/imgs/share.png",
      },
    ],
    [
      "meta",
      {
        name: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        name: "og:site_name",
        content: "코드앤버터 안내서",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://docs.codenbutter.com/imgs/share.png",
      },
    ],
    [
      "meta",
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      {
        name: "twitter:creator",
        content: "@subicura",
      },
    ],
    [
      "meta",
      {
        name: "twitter:site",
        content: "@subicura",
      },
    ],
  ],

  themeConfig: {
    nav,
    sidebar,

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/purpleio/docs.codenbutter.com/",
      },
      // { icon: "twitter", link: "https://twitter.com/subicura" },
      { icon: "blog", link: "https://codenbutter.com" },
    ],

    editLink: {
      repo: "purpleio/docs.codenbutter.com",
      text: "Edit this page on GitHub",
    },

    footer: {
      copyright: `Copyright © 2022-${new Date().getFullYear()} purpleio`,
    },
  },
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ["../.."],
      },
    },
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity,
    },
    json: {
      stringify: true,
    },
  },

  vue: {
    reactivityTransform: true,
  },
};
