# 코드앤버터 문서

## 설정

1. pnpm 설정

   ```sh
   pnpm setup
   ```

2. @subicura/vitepress-theme 저장소 불러오기

   같은 depth의 디렉토리에 설정

   ```sh
   git clone git@github.com:subicura/vitepress-theme.git
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
