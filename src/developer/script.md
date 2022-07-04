---
head:
  - - meta
    - property: "og:description"
      content: 스크립트 추가
  - - meta
    - property: "twitter:description"
      content: 스크립트 추가
---

# 스크립트 추가

코드앤버터는 `기본 스크립트 방식`과 `SDK 방식`을 제공합니다.

- `기본 스크립트 방식`은 사용하기 간단하며 자동으로 실행됩니다.
- `SDK 방식`은 수동으로 제어할 수 있으며, 모든 기능을 사용할 수 있습니다.

::: tip
특별한 기능이 필요하지 않은 경우 `기본 스크립트 방식`을 권장합니다.
:::

## 기본 스크립트 방식

<<< @/snippets/one-line-script.js

1. HTML 코드에서 head tag를 찾습니다. (`<HEAD>`)
2. 코드앤버터 스크립트를 복사하고 head 태그 사이에 입력합니다. (`<HEAD>`와 `</HEAD>` 사이)
3. `SITE-ID` 부분을 코드앤버터의 웹사이트 아이디로 변경합니다.
4. 수정한 사항을 저장합니다.
5. 이제 웹페이지를 새로고침하면 작성한 캠페인을 확인할 수 있습니다.

## HTML 태그를 사용할 수 없는 경우

```js
var script = document.createElement("script");
script.setAttribute("data-site-id", "SITE-ID");
script.src = "https://test.buttr.dev/butter.js";
script.async = 1;
document.head.appendChild(script);
```

1. `HTML`을 추가할 수 없는 경우 사용합니다.
2. 사용중인 스크립트 코드에 추가하거나 script 태그 사이에 입력합니다. (`<SCRIPT>`와 `</SCRIPT>` 사이)
3. `SITE-ID` 부분을 코드앤버터의 웹사이트 아이디로 변경합니다.

::: info
위 스크립트 코드를 브라우저의 개발자 도구 콘솔창에 입력하면 코드를 수정하지 않고 테스트 할 수 있습니다.
:::

## SDK 방식

SDK 방식은 [Javascript SDK](./js-sdk) 페이지를 참고하세요.
