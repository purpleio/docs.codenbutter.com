import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { SitemapStream } from "sitemap";
import baseConfig from "@subicura/vitepress-theme/config";

const links = [];

const nav = [
  {
    text: "📔 사용자 가이드",
    activeMatch: `^/guide/`,
    link: "/guide/intro",
  },
  {
    text: "🧑‍💻 개발자 문서",
    activeMatch: `^/developer/`,
    link: "/developer/helloworld",
  },
  {
    text: "💡 업데이트",
    activeMatch: `^/update/`,
    link: "/update/latest",
  },
  {
    text: "👏",
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
      text: "소개",
      items: [
        { text: "코드앤버터 소개", link: "/guide/intro" },
        { text: "도구 비교하기", link: "/guide/vs-other-apps" },
      ],
    },
    {
      text: "사용 가이드",
      items: [
        { text: "기본 사용법", link: "/guide/basic" },
        { text: "자주 묻는 질문", link: "/guide/faq" },
      ],
    },
  ];
}

function getDeveloperSidebar() {
  return [
    {
      text: "소개",
      items: [
        { text: "개발자 문서 안내", link: "/developer/helloworld" },
        { text: "동작방식 소개", link: "/developer/how-to-work" },
      ],
    },
    {
      text: "SDK Reference",
      items: [
        { text: "스크립트 추가", link: "/developer/script" },
        { text: "Javascript SDK", link: "/developer/js-sdk" },
      ],
    },
    {
      text: "채용",
      items: [{ text: "채용 안내", link: "/developer/recruit" }],
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
  lastUpdated: true,

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
        content: "코드앤버터 안내서",
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
        content: "코드앤버터 안내서",
      },
    ],
    [
      "meta",
      {
        name: "twitter:title",
        content: "코드앤버터 안내서",
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
      copyright: `Copyright © ${new Date().getFullYear()} purpleio`,
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

  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      links.push({
        // you might need to change this if not using clean urls mode
        url:
          pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2") +
          (pageData.relativePath.indexOf("index.md") > -1 ? "" : ".html"),
        lastmod: pageData.lastUpdated,
        changefreq: "daily",
        priority: 1.0,
      });
    }
  },

  buildEnd: ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: "https://docs.codenbutter.com/",
    });
    const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
    sitemap.pipe(writeStream);
    links.forEach((link) => sitemap.write(link));
    sitemap.end();
  },
};
