---
head:
  - - meta
    - property: "og:description"
      content: 동작방식 소개
  - - meta
    - property: "twitter:description"
      content: 동작방식 소개
---

# 동작방식 소개

코드앤버터의 동작방식을 소개합니다.

## 팝업 작성

1. 에디터에서 만든 `Frame` / `Text` / `Image`를 `Codenbutter Document Data` 형식으로 저장합니다.
2. 팝업을 공개하면 `Codenbutter Document Data`와 `Meta Data`를 합쳐 `JSON 설정 파일`을 생성합니다.
3. `JSON 설정 파일`을 AWS S3에 업로드하여 정적파일로 제공합니다.

## 렌더링

1. 웹사이트에 스크립트를 추가하면 `JSON 설정 파일`을 조회합니다.
2. `JSON 설정 파일`을 분석하여 `iframe`을 만들고 데이터를 전송합니다.
3. `iframe`에서 데이터를 분석하여 svelte 기반의 컴포넌트를 생성합니다.
4. `스크립트`와 `iframe`은 이벤트를 주고 받으면서 필요한 기능을 실행합니다.
