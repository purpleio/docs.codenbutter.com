<script setup lang="ts">
import { useData } from 'vitepress'
import { withBase } from 'vitepress';

const { frontmatter, site } = useData()

const sampleImages = [
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_001.png?d=x300",
      width: 141,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_004.png?d=x300",
      width: 131,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_006.png?d=x300",
      width: 280,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_007.png?d=x300",
      width: 200,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_012.png?d=x300",
      width: 242,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_016.png?d=x300",
      width: 146,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_025.png?d=x300",
      width: 122,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_026.png?d=x300",
      width: 178,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_027.png?d=x300",
      width: 184,
      height: 200,
    },
    {
      url: "https://image.codenbutter.com/campaign/popup/Popup_033.png?d=x300",
      width: 209,
      height: 200,
    },
  ];

  const fullWidth =
    sampleImages.reduce((prev, curr) => prev + curr.width, 0) +
    15 * sampleImages.length;

</script>

<template>
  <section id="hero">
    <h1 class="tagline">
      <span class="accent">{{ site.title }}</span>
    </h1>
    <p class="description">
      {{ frontmatter.tagline }}
    </p>
    <p class="actions">
      <a class="get-started" :href="withBase(frontmatter.actionLink)">
        {{ frontmatter.actionText }}
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </a>
    </p>
  </section>

  <div class="main-video-wrapper">
    <div class="main-video">
      <iframe 
        width="560"
        height="350"
        src="https://www.youtube.com/embed/icCIhuy6eF4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
  </div>

  <section id="highlights" class="vt-box-container">
    <div class="vt-box">
      <h2>📔 사용자 가이드</h2>
      <p>
        코드앤버터를 소개하고 사용법을 알아봅니다.<br />
        <a href="/guide/intro" style="text-decoration: underline">더보기→</a>
      </p>
    </div>
    <div class="vt-box">
      <h2>🧑‍💻 개발자 문서</h2>
      <p>
        웹사이트에 스크립트를 추가하고 제어하는 방법을 알아봅니다.<br />
        <a href="/developer/helloworld" style="text-decoration: underline">더보기→</a>
      </p>
    </div>
    <div class="vt-box">
      <h2>💡 업데이트</h2>
      <p>
        새롭게 추가된 기능을 알아보세요.<br />
        <a href="/update/latest" style="text-decoration: underline">더보기→</a>
      </p>
    </div>
  </section>

  <div class="template-list">
    <div class="slider">
      <div class="slide-track" :style="{ width: (fullWidth * 2) + 'px' }">
        <div
          v-for="img in sampleImages"
          class="slide"
          :key="img.url"
          :style="{ width: img.width + 'px', height: img.height + 'px' }"
        >
          <img :src="img.url" :width="img.width" :height="img.height" alt="" />
        </div>
        <div
          v-for="img in sampleImages"
          class="slide"
          :key="img.url"
          :style="{ width: img.width + 'px', height: img.height + 'px' }"
        >
          <img :src="img.url" :width="img.width" :height="img.height" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
section {
  padding: 50px 32px 30px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.main-video-wrapper {
  max-width: 640px;
  margin: 0 auto;
}

.main-video {
  position: relative;
  padding-bottom: 62.5%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0.2px 0.2px 0 rgba(0, 0, 0, 0.014), 0 0.7px 0.5px 0 rgba(0, 0, 0, 0.02), 0 1.3px 0.9px 0 rgba(0, 0, 0, 0.025), 0 2.1px 1.6px 0 rgba(0, 0, 0, 0.03), 0 3.2px 2.9px 0 rgba(0, 0, 0, 0.036), 0 5px 7px 0 rgba(0, 0, 0, 0.05);
}

.main-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.tagline {
  font-size: 64px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 24px;
  margin: 18px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

.vt-doc {
  margin: 0 auto;
  max-width: 500px;
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

.features {
  border-top: 1px solid #eaecef;
  padding: 2.0rem 0 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
  max-width: 768px;
  margin: 0 auto;
}

.dark .features {
  border-top-color: var(--vt-c-divider-light);
}

.features-4 .feature {
  flex-basis: 25%;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 50px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 20px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 42px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 18px;
    margin: 12px 0 30px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
  .vt-doc {
    padding: 0 36px;
  }
  .actions a {
    margin: 0.5em 0;
  }
  .features {
    justify-content: center;
  }
  .features-4 .feature {
    flex-basis: 50%;
  }
  .feature {
    max-width: 260px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}

.template-list {
  padding: 50px 0;
}

@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(-1983px);
    transform: translateX(-1983px);
  }
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(-1983px);
    transform: translateX(-1983px);
  }
}

.slider {
  height: 250px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 250px;
  position: absolute;
  width: 100px;
  z-index: 2;
}

html.dark .slider::before,
html.dark .slider::after {
  background: linear-gradient(to right, #1a1a1a 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 250px;
  position: absolute;
  width: 100px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  -webkit-transform: rotateZ(180deg);
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  margin-top: 50px;
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 40s linear infinite;
  display: flex;
}

.slider .slide {
  cursor: -webkit-grab;
  cursor: grab;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .2s;
  margin-right: 15px;
}

.slider .slide:hover {
  transform: translate(0,-25px);
}
</style>