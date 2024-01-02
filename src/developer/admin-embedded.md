---
head:
  - - meta
    - property: "og:url"
      content: https://docs.codenbutter.com/developer/admin-embedded.html
  - - meta
    - name: "twitter:url"
      content: https://docs.codenbutter.com/developer/admin-embedded.html
  - - meta
    - property: "og:description"
      content: 관리자 페이지 연동
  - - meta
    - name: "twitter:description"
      content: 관리자 페이지 연동
---

# 관리자 페이지 연동

코드앤버터의 관리자 화면을 현재 사용중인 고객님의 관리자 페이지에 iframe으로 연동하고 자동 로그인 처리를 할 수 있습니다.

[[toc]]

::: tip
관리자 페이지 연동 기능은 현재 요청한 고객분께 별도로 키를 안내해 드리고 있습니다. 해당 기능이 필요하시면 `support@codenbutter.com`으로 문의해 주세요.
:::

## 연동방식

관리자 페이지 연동이 필요한 경우 다음 token을 생성하고 다음 URL을 호출합니다.

**기본 경로**

```
https://embed.codenbutter.com/v2/login/external
```

**필수 파라미터**

| 속성           | 타입         | 설명                       |
| -------------- | ------------ | -------------------------- |
| organizationId | string       | 팀 아이디                  |
| siteId         | string       | 사이트 아이디              |
| language       | 'ko' \| 'en' | 한글('ko') 또는 영문('en') |
| token          | string       | 인증 토큰                  |

**인증 토큰 만들기**

인증 토큰은 JWT 기반으로 만들어집니다.

header

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

payload

```json
{
  "organizationId": "팀 아이디",
  "exp": "현재 시간 + 1분 timestamp(sec)"
}
```
