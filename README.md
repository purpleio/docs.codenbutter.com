# 코드앤버터 문서

## 설정

1. pnpm 설정

   ```sh
   pnpm setup
   ```

2. @subicura/vitepress-theme 저장소 불러오기

   같은 depth의 디렉토리에 설정

   ```sh
   git clone https://github.com/subicura/vitepress-theme.git
   cd vitepress-theme
   pnpm install
   pnpm link --global
   ```

3. 현재 저장소에서 실행

   ```sh
   asdf install
   pnpm install
   pnpm link --global @subicura/vitepress-theme
   pnpm dev
   ```

만약 아래와 같은 에러가 발생한다면

> Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'i18n')

1. 현재 저장소의 `node_modules` 삭제

2. `vitepress-theme` 패키지의 `node_modules` 삭제

3. store에서 참조되고 있지 않은 패키지 삭제

   ```sh
   pnpm store prune
   ```

4. `vitepress-theme` 패키지에서 실행

   ```sh
   pnpm install
   pnpm link --global
   ```

5. 현재 저장소에서 실행
   ```sh
   pnpm install
   pnpm link --global @subicura/vitepress-theme
   pnpm dev
   ```
