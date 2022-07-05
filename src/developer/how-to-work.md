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

[[toc]]

## 동작방식

<div className="img-480 no-shadow">

![동작흐름](./imgs/how-to-work/diagram.png)

</div>

1. 코드앤버터 관리자 페이지에서 캠페인을 생성합니다.
2. 캠페인은 [Document Data](#document-data)와 [Campaign Data](#campaign-data)로 이루어져 있습니다.
3. 캠페인을 공개하면 `campaign.json` 파일이 생성됩니다.
4. 웹페이지에 추가된 Javascript SDK가 파일을 분석하여 컴포넌트를 생성합니다.

## Document Data

코드앤버터의 컴포넌트 데이터는 여러개의 `Node`가 `Tree 형태`로 구성되어 있습니다.  
각 Node의 속성은 DOM 구조를 표현하는 데 사용되며, 에디터와 렌더링 엔진에서 사용합니다.

**노드 종류**

- `DocumentNode` - 기본적인 문서 속성을 표현
- `FrameNode` - 영역 및 레이아웃을 표현하기 위한 노드로 여러개의 자식 노드를 포함
- `TextNode` - 글자를 표현하기 위한 노드
- `ImageNode` - 이미지를 표현하기 위한 노드

**트리 형태 샘플**

```
Document
├─ Frame
│  ├─ Frame
│  │  └─ Image
│  └─ Text
├─ Text
└─ ...
```

**이미지 노드 데이터 샘플**

```json
{
  "id": "gut5Boz5ne4D5eFemmThz5",
  "name": "닫기 버튼 이미지",
  "type": "IMAGE",
  "fills": [
    {
      "path": "https://codenbutter-upload.test.purple.io/upload/node/2022/bfddf11e-fb08-4d06-a809-4e517ee8e03b.svg",
      "type": "IMAGE",
      "width": {
        "unit": "px",
        "value": 27
      },
      "height": {
        "unit": "px",
        "value": 27
      },
      "fileType": "svg",
      "scaleMode": "FILL"
    }
  ],
  "width": {
    "unit": "px",
    "value": 42
  },
  "padding": {
    "top": {
      "unit": "px",
      "value": 14
    },
    "left": {
      "unit": "px",
      "value": 14
    },
    "right": {
      "unit": "px",
      "value": 14
    },
    "bottom": {
      "unit": "px",
      "value": 14
    }
  },
  "visible": true,
  "reactions": [
    {
      "action": {
        "type": "CLOSE"
      },
      "trigger": {
        "type": "ON_CLICK"
      }
    }
  ],
  "pluginData": {},
  "alignHorizontal": "RIGHT"
}
```

## Campaign Data

캠페인 데이터는 디자인을 제외한 기본 속성과 노출 속성등을 가지고 있습니다.

**캠페인 속성**

- `id` - 캠페인 식별자
- `publicId` - 공개적으로 사용하는 아이디
- `name` - 캠페인 이름
- `type` - 캠페인 종류(POPUP, ...)
- `schedule` - 노출 기간 설정
- `target` - 노출 조건 설정 (페이지, 사용자, 레퍼러, ...)
- `display` - 노출 방식 설정 (바로 노출, n초 후, 스크롤시, ...)

**노출 조건**

노출 조건은 `AND`, `OR`, `CONDITION`의 `Tree 형태`로 표현합니다.  
다양한 조합을 표현할 수 있습니다.

```json
{
  "type": "OR",
  "value": [
    {
      "type": "AND",
      "value": [
        { "type": "URL", "operator": "STARTS_WITH", "value": "/Product" },
        {
          "type": "OR",
          "value": [
            { "type": "URL", "operator": "INCLUDE", "value": "CODE_1" },
            { "type": "URL", "operator": "INCLUDE", "value": "CODE_2" },
            { "type": "URL", "operator": "INCLUDE", "value": "CODE_3" }
          ]
        }
      ]
    },
    { "type": "URL", "operator": "EQUAL", "value": "/MyPage" }
  ]
}
```

## Javascript SDK

코드앤버터에서 제공하는 스크립트를 웹페이지에 추가하면 캠페인 정보를 조회하고 조건에 맞는 DOM을 생성하여 웹페이지에 삽입합니다.

<div className="img-480 no-shadow">

![동작흐름](./imgs/how-to-work/sdk.png)

</div>

**주요 모듈**

- `코어` - 캠페인 데이터 조회 및 분석
- `수집분석도구` - 캠페인 노출 데이터 수집 및 분석
- `컴포넌트 매니저` - DOM을 생성하고 생성한 DOM과 웹사이트간의 이벤트 송수신 처리
- `컴포넌트` - Svelte 기반 DOM을 렌더링하는 라이브러리
