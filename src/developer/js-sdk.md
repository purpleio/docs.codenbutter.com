---
head:
  - - meta
    - property: "og:url"
      content: https://docs.codenbutter.com/developer/js-sdk.html
  - - meta
    - name: "twitter:url"
      content: https://docs.codenbutter.com/developer/js-sdk.html
  - - meta
    - property: "og:description"
      content: 코드앤버터 Javascript SDK
  - - meta
    - name: "twitter:description"
      content: 코드앤버터 Javascript SDK
---

# Javascript SDK

SDK를 사용하면 코드앤버터의 모든 기능을 사용할 수 있습니다.

[[toc]]

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

| 속성                    | 타입                               | 설명                                           | 필수 | 기본값 |
| ----------------------- | ---------------------------------- | ---------------------------------------------- | ---- | ------ |
| siteId                  | string                             | 사이트 아이디                                  | ✓    | -      |
| auto                    | boolean                            | 팝업 호출 여부                                 |      | false  |
| ignoreSpaLocationChange | boolean                            | SPA 환경에서 location 변경시 mount 여부        |      | false  |
| ignoreTrack             | boolean                            | 트래킹 실행 여부                               |      | false  |
| breakpoint              | [BreakpointOption](#setbreakpoint) | 디바이스 breakpoint 시점                       |      | -      |
| waitForSetUser          | boolean                            | [setUser](#setuser) 호출 전 SDK 실행 중단 여부 |      | false  |
| onSuccess               | () => void                         | 함수 호출 성공시 콜백                          |      | -      |
| onError                 | (e: Error) => void                 | 함수 호출 실패시 콜백                          |      | -      |

</div>

```js
// default
CodenButter("boot", { siteId: "SITE-ID" });

// 자동으로 팝업 호출시 -> SDK 대신 기본 스크립트 호출 권장
CodenButter("boot", { siteId: "SITE-ID", auto: true });

// 트래킹 기능 끄기
CodenButter("boot", { siteId: "SITE-ID", ignoreTrack: true });

// breakpoint 설정
CodenButter("boot", { siteId: "SITE-ID", auto: true, breakpoint: { width: 400 } });
```

### mount

팝업, 그룹 팝업 을 수동으로 호출합니다.  
조건에 따라 팝업, 그룹 팝업을 노출/비노출할때 사용합니다.

**옵션**

<div class="table-wrapper">

| 속성                    | 타입                | 설명                              | 필수 | 기본값 |
| ----------------------- | ------------------- | --------------------------------- | ---- | ------ |
| id                      | string              | 캠페인(팝업) 아이디 (없으면 전체) |      | -      |
| ignoreCheckSchedule     | boolean             | 스케줄 검사 무시 여부             |      | false  |
| ignoreCheckTarget       | boolean             | 노출 대상 검사 무시 여부          |      | false  |
| ignoreExpired           | boolean             | "다시보지않기" 검사 무시 여부     |      | false  |
| ignoreSpaLocationChange | boolean             | SPA 페이지 이동 무시 여부         |      | false  |
| excludedCampaignIds     | Array&lt;string&gt; | 캠페인 노출 제외 대상 설정        |      | []     |
| onSuccess               | () => void          | 함수 호출 성공시 콜백             |      | -      |
| onError                 | (e: Error) => void  | 함수 호출 실패시 콜백             |      | -      |

</div>

```js
// default
CodenButter("mount");

// 특정 캠페인 호출
CodenButter("mount", { id: "CAMPAIGN-ID" });

// 캠페인 노출 제외 대상 설정
CodenButter("mount", { excludedCampaignIds: ["CAMPAIGN-ID"] });
```

### unmount

팝업, 그룹 팝업을 모두 제거합니다

```js
// default
CodenButter("unmount");
```

### setBreakpoint

디바이스 breakpoint를 수정합니다  
반응형으로 동작합니다

**옵션**

<div class="table-wrapper">

| 속성  | 타입                           | 설명                 | 필수 | 기본값 |
| ----- | ------------------------------ | -------------------- | ---- | ------ |
| width | number                         | breakpoint (px)      | ✓    | -      |
| scope | "ALL" \| "EMBEDDED" \| "POPUP" | breakpoint 적용 범위 |      | "ALL"  |

</div>

```js
// 600px으로 breapoint 설정
CodenButter("setBreakpoint", { width: 600 });

// 팝업 / 그룹 팝업만 600px으로 breapoint 설정
CodenButter("setBreakpoint", { width: 600, scope: "POPUP" });
```

### resetBreakpoint

디바이스 breakpoint를 SDK기본값으로 되돌립니다
적응형으로 동작합니다

**옵션**

```js
// default
CodenButter("resetBreakpoint");
```

### setUser

유저 정보를 업데이트합니다.

**옵션**

<div class="table-wrapper">

| 속성  | 타입   | 설명        | 필수 | 기본값 |
| ----- | ------ | ----------- | ---- | ------ |
| id    | string | 유저 아이디 | ✓    | -      |
| name  | string | 유저 이름   |      | -      |
| email | string | 유저 이메일 |      | -      |

</div>

```js
// default
CodenButter("setUser", { id: "USER-ID" });

// 이름, 이메일 정보 추가
CodenButter("mount", { id: "USER-ID", name: "USER-NAME", email: "USER-EMAIL" });
```

### resetUser

유저 정보를 초기화합니다

```js
// default
CodenButter("resetUser");
```

### updateTargetSegment

`setUser`로 추가된 유저를 캠페인의 대상으로 추가/업데이트 합니다.  
대상 조건에서 사용할 수 있습니다

**옵션**

<div class="table-wrapper">

| 속성       | 타입    | 설명           | 필수 | 기본값 |
| ---------- | ------- | -------------- | ---- | ------ |
| campaignId | string  | 캠페인 아이디  | ✓    | -      |
| engageable | boolean | 참여 가능 여부 | ✓    | -      |
| engagedAt  | string  | 참여 날짜      |      | -      |

</div>

```js
// 캠페인에 참여 가능한 유저 추가
CodenButter("updateTargetSegment", { campaignId: "CAMPAIGN-ID", engageable: true });

// 캠페인에 참여 불가능한 유저 추가
CodenButter("updateTargetSegment", { campaignId: "CAMPAIGN-ID", engageable: false });

// 캠페인에 참여 불가능한 유저, 참여 일시 추가
CodenButter("updateTargetSegment", {
  campaignId: "CAMPAIGN-ID",
  engageable: false,
  engagedAt: "2024-11-12T04:30:39.791Z",
});
```
