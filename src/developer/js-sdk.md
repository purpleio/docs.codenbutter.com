---
head:
  - - meta
    - property: "og:description"
      content: 코드앤버터 Javascript SDK
  - - meta
    - property: "twitter:description"
      content: 코드앤버터 Javascript SDK
---

# Javascript SDK

SDK를 사용하면 코드앤버터의 모든 기능을 사용할 수 있습니다.

## 준비하기

Codenbutter SDK를 사용하려면 기본으로 제공되는 스크립트 대신 다음 스크립트를 입력해주세요.

<<< @/snippets/sdk-script.js

## API

### boot

스크립트를 구동합니다.

::: warning 주의
다른 API를 호출하기전에 반드시 최초 한번 실행해야 합니다.
:::

**옵션**

<div class="table-wrapper">

| 속성        | 타입               | 설명                  | 필수 | 기본값 |
| ----------- | ------------------ | --------------------- | ---- | ------ |
| siteId      | string             | 사이트 아이디         | ✓    | -      |
| auto        | boolean            | 팝업 호출 유무        |      | false  |
| ignoreTrack | boolean            | 트래킹 실행 유무      |      | false  |
| onSuccess   | () => void         | 함수 호출 성공시 콜백 |      | -      |
| onError     | (e: Error) => void | 함수 호출 실패시 콜백 |      | -      |

</div>

```js
// default
Codenbutter("boot", { siteId: "SITE-ID" });

// 자동으로 팝업 호출시 -> SDK 대신 기본 스크립트 호출 권장
Codenbutter("boot", { siteId: "SITE-ID", auto: true });

// 트래킹 기능 끄기
Codenbutter("boot", { siteId: "SITE-ID", ignoreTrack: true });
```

### mount

팝업을 수동으로 호출합니다.  
조건에 따라 팝업을 노출/비노출할때 사용합니다.

**옵션**

<div class="table-wrapper">

| 속성      | 타입               | 설명                              | 필수 | 기본값 |
| --------- | ------------------ | --------------------------------- | ---- | ------ |
| id        | string             | 캠페인(팝업) 아이디 (없으면 전체) |      | -      |
| onSuccess | () => void         | 함수 호출 성공시 콜백             |      | -      |
| onError   | (e: Error) => void | 함수 호출 실패시 콜백             |      | -      |

</div>

```js
// default
Codenbutter("mount");

// 특정 캠페인 호출
Codenbutter("mount", { id: "CAMPAIGN-ID" });
```
