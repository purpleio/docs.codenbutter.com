import baseConfig from "@subicura/vitepress-theme/config";

const nav = [
  {
    text: "π μ¬μ©μ κ°μ΄λ",
    activeMatch: `^/guide/`,
    link: "/guide/intro",
  },
  {
    text: "π§βπ» κ°λ°μ λ¬Έμ",
    activeMatch: `^/developer/`,
    link: "/developer/helloworld",
  },
  {
    text: "π‘ μλ°μ΄νΈ",
    activeMatch: `^/update/`,
    link: "/update/latest",
  },
  {
    text: "π",
    activeMatch: `^/thanks/`,
    link: "/thanks/special-thanks-to",
  },
];

export const sidebar = {
  "/guide/": getGuideSidebar(),
  "/developer/": getDeveloperSidebar(),
};

function getGuideSidebar() {
  return [
    {
      text: "μκ°",
      items: [
        { text: "μ½λμ€λ²ν° μκ°", link: "/guide/intro" },
        { text: "λκ΅¬ λΉκ΅νκΈ°", link: "/guide/vs-other-apps" },
      ],
    },
    {
      text: "μ¬μ© κ°μ΄λ",
      items: [
        { text: "κΈ°λ³Έ μ¬μ©λ²", link: "/guide/basic" },
        { text: "μμ£Ό λ¬»λ μ§λ¬Έ", link: "/guide/faq" },
      ],
    },
  ];
}

function getDeveloperSidebar() {
  return [
    {
      text: "μκ°",
      items: [
        { text: "κ°λ°μ λ¬Έμ μλ΄", link: "/developer/helloworld" },
        { text: "λμλ°©μ μκ°", link: "/developer/how-to-work" },
      ],
    },
    {
      text: "SDK Reference",
      items: [
        { text: "μ€ν¬λ¦½νΈ μΆκ°", link: "/developer/script" },
        { text: "Javascript SDK", link: "/developer/js-sdk" },
      ],
    },
    {
      text: "μ±μ©",
      items: [{ text: "μ±μ© μλ΄", link: "/developer/recruit" }],
    },
  ];
}

export default {
  extends: baseConfig,

  lang: "ko-KR",
  title: "μ½λμ€λ²ν° μλ΄μ",
  description: "μ½λμ€λ²ν° μλ΄μ / codenbutter guide",
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
        src: "https://www.googletagmanager.com/gtag/js?id=G-H28KQ7ZRGD",
        async: true,
      },
    ],
    [
      "script",
      {
        src: "/js/analytics.js",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "μ½λμ€λ²ν° μλ΄μ",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://upload.codenbutter.com/logo/og.png",
      },
    ],
    [
      "meta",
      {
        property: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        property: "og:site_name",
        content: "μ½λμ€λ²ν° μλ΄μ",
      },
    ],
    [
      "meta",
      {
        name: "twitter:title",
        content: "μ½λμ€λ²ν° μλ΄μ",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://upload.codenbutter.com/logo/og.png",
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
      copyright: `Copyright Β© ${new Date().getFullYear()} purpleio`,
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
