---
head:
  - - meta
    - property: "og:url"
      content: https://docs.codenbutter.com/guide/detail-editor.html
  - - meta
    - name: "twitter:url"
      content: https://docs.codenbutter.com/guide/detail-editor.html
  - - meta
    - property: "og:description"
      content: 코드앤버터 에디터 기능
  - - meta
    - name: "twitter:description"
      content: 코드앤버터 에디터 기능
---

# 에디터 기능

::: info
에디터 사용법에 대한 자세한 내용
:::

<!--
TODO:


### 남은내용]
- 어투 일원화
- 메뉴 목록 분리


메뉴별 세부 추가되어야할 내용

## 에디터] 80% 완료
노드방향
배경이미지 변경
데이터 목록관리
이벤트 추가

## 스크립트]
외부사이트 연동 - 스크립트 추가
-> 기본 사용법에 있는 내용중 스크립트 삽입 관련 이동 및  내용 보안 + 이미지 삽입

서비스 연동  vs 수동설치

## 사이트]
- 사이트에 대한 개념
- 팝업 중복 노출 제한


## 팀]
- 팀에 대한 개념

- 멤버권한 변경, 멤버삭제 추가하는 내용 필요


## 채널톡]
- 채널톡 사용법

=========================

자주묻는 질문 (2차작업)
링크 연결잘되는지 확인
이미지 파일 순서 정리
 -->

<br/>

[[toc]]

## 다른 템플릿 선택

- 이미 템플릿을 선택한 상태에서 다른 템플릿으로 변경하고 싶을 때 사용합니다.

1. 좌측 상단에서 [템플릿 변경]을 누릅니다.

![템플릿 변경](./imgs/detail-editor/section_1.png)

2. [이동]을 누릅니다.

![안내창](./imgs/detail-editor/section_2.png)

::: warning 작업 내용 초기화

- 템플릿을 변경하면 작업중이던 내용이 사라지기 때문에 작업 내용을 보존하고 싶다면 [저장]을 누른 후에 템플릿 변경 과정을 진행해 주세요.

[저장 기능 알아보기](./detail-editor.md#저장)
:::

## 요소 추가

- 새로운 컨텐츠를 만드는데 사용됩니다.

1. [+ 추가]를 누르면 새롭게 생성할 내용들이 보입니다.
2. 원하는 요소를 선택합니다.

![요소 추가](./imgs/detail-editor/section_21.png)

## 여백 조정

1. 여백을 조정할 영역을 선택하면 아래와 같이 여백을 조정할 수 있는 구분선이 보입니다.

![영역 선택](./imgs/detail-editor/section_22.png)

2. 구분선에 마우스를 가져다대면 빗금 무늬가 보이고 여백의 크기가 표시됩니다.

![구분선](./imgs/detail-editor/section_23.png)

3. 원하는 방향으로 마우스를 드래그 해줍니다. 이때 세로방향으로 여백을 늘려주면 컨텐츠 요소의 높이를 조절하는 효과가 발생합니다.

![높이 조절](./imgs/detail-editor/section_24.png)

## 미리보기

- [공개 설정]을 누르면 미리보기 화면으로 이동됩니다.
- 미리보기 화면에서는 애니메이션을 적용하여 팝업에 움직임을 주거나 노출 위치 등을 설정할 수 있습니다.

![공개 설정](./imgs/detail-editor/section_10.png)

![미리보기](./imgs/detail-editor/section_11.png)

### 팝업이 가려져요

- 팝업을 노출시키다 보면 기존 요소들(다른 팝업, 챗봇 등)에 의해 노출 영역이 겹쳐질 수 있습니다.
- 이 경우, 미리보기 화면에서 [순서]를 변경하면 팝업을 뒤로 위치시키거나 앞으로 끌어올 수 있습니다.

![팝업 겹침 현상](./imgs/detail-editor/section_13.png)

![순서 변경](./imgs/detail-editor/section_12.png)

::: info
웹에 대한 배경지식이 있는 분들이라면 z-index를 이용하면 좀더 세밀한 위치 조정이 가능해집니다. <br/>
입력값은 숫자를 넣으시면 됩니다.
:::

![순서 세부조정](./imgs/detail-editor/section_14.png)

## 변경사항 되돌리기

### 실행 취소 / 다시 실행

- 상단에 표시한 아이콘을 클릭하거나 단축키를 이용하면 변경사항에 대해 되돌릴 수 있습니다.
  > 단축키: <br/>
  > 실행 취소 (Ctrl+Z) <br/>
  > 다시 실행 (Ctrl+ Shift+ Z)

![되돌리기](./imgs/detail-editor/section_4.png)

### 저장

- [이력] 기능과 함께 사용되는 기능으로 [저장]을 누른 시점별로 히스토리를 만들 수 있습니다.

![저장](./imgs/detail-editor/section_3.png)

### 이력

- 이력 목록에서 각 항목을 선택하면 해당 이력이 저장된 시점으로 작업내용이 되돌려집니다.
- 체크 표시된 것은 가장 최근에 저장된 이력을 의미하고 공개함으로 표시된 것은 사이트에 실제로 노출된 팝업 내용을 의미합니다.

![이력](./imgs/detail-editor/section_5.png)

## 배경 색상 vs. 배경 레이어 색상

![차이점](./imgs/detail-editor/section_6.png)

### 배경

- 고객에게는 노출되지 않고 에디터 화면에서만 작업할 때 시각적으로 작업 영역을 구분하고자 할 때 사용되는 기능입니다.
- 미리보기 화면에서도 적용이 안되는 것을 볼 수 있습니다.

![배경 색상](./imgs/detail-editor/section_7.png)

### 배경 레이어

- 고객에게도 노출되는 것으로 미리보기 화면에서 동일하게 적용이 됩니다.
- 배경 레이어 색상 선택 후, [공개설정]을 누르면 미리보기 화면으로 이동됩니다.

![배경 레이어](./imgs/detail-editor/section_8.png)

![미리보기](./imgs/detail-editor/section_9.png)

## 특정 요소 없애기

- 템플릿 자체는 마음에 드는에 상황에 따라 특정 요소만 빼고 사용하고 싶을 때가 생길 수 있습니다.
- [오늘 하루 열지 않기] 버튼을 삭제하고 싶다는 시나리오를 가정하고 내용을 따라가볼게요.

1. 삭제할 요소를 선택합니다.

![삭제할 요소](./imgs/detail-editor/section_15.png)

2. 좌측에 하이라이트된 곳에 마우스를 올려보면 보이는 삭제 아이콘을 누릅니다.

![삭제](./imgs/detail-editor/section_16.png)

3. 원하는대로 버튼은 삭제되었지만 공간이 많이 남아 이상해보입니다.

![삭제 후 모습](./imgs/detail-editor/section_17.png)

4. 크기를 조정하고 싶은 요소를 선택합니다.

- 가로 너비가 절반정도만 차지해서 반은 공간이 여백으로 차 있는 상태입니다.

![요소 선택](./imgs/detail-editor/section_18.png)

5. 가로 너비를 조정해 줍니다.

![너비 조정](./imgs/detail-editor/section_19.png)

- 아래내용은 가로 너비를 조정하지 않고 노드정렬을 통해 가운데 배치하는 방법입니다.

> [요소를 가운데 배치하는 방법](./detail-editor.md#가운데-배치)

## 가로 너비

### 전체 프레임의 가로 너비 조정하기

- 좌측에 위치한 컨트롤바를 조정하거나 우측에 숫자를 변경하면 팝업의 전체 가로 너비가 변경됩니다.

![너비 조정](./imgs/detail-editor/section_20.png)

### 개별 요소의 가로 너비 조정하기

- [특정 요소를 없애고 싶어요] 섹션에서 [4번 ~ 5번 내용](./detail-editor.md#특정-요소를-없애고-싶어요)을 참고해주세요.

## 세로 너비

- [[여백을 조정하고 싶어요]](./detail-editor.md#여백을-조정하고-싶어요) 내용을 참고해주세요.

## 테두리 둥글게하기

1. 원하는 요소를 선택해줍니다.

![요소 선택](./imgs/detail-editor/section_25.png)

2. [둥근 테두리] 영역에 변화를 주고 싶은 정도의 수치 값을 입력해줍니다.

![둥근 테두리](./imgs/detail-editor/section_26.png)

3. 테두리가 변화된 모습이 보여집니다.

![둥근 테두리](./imgs/detail-editor/section_27.png)

## 그림자

1. 원하는 요소를 선택해줍니다.

![요소 선택](./imgs/detail-editor/section_25.png)

2. 그림자 영역에 수치 값을 입력해줍니다.

![그림자](./imgs/detail-editor/section_28.png)

- 그림자를 [없음]으로 선택하면 선택한 영역에서 그림자가 제거됩니다.

![그림자 제거](./imgs/detail-editor/section_29.png)

## 텍스트 스타일을 변경

- 텍스트가 들어간 요소를 선택하면 우측에 텍스트 스타일에 관련된 내용들이 나타납니다.

![텍스트 스타일](./imgs/detail-editor/section_30.png)

- 텍스트 내용을 더블 클릭하면 텍스트 편집도구가 나타납니다.

![편집도구](./imgs/detail-editor/section_31.png)

## 텍스트 정렬 vs. 노드 정렬

### 텍스트 정렬

- 텍스트 정렬은 선택한 영역 안에서 글자의 정렬을 변경할 수 있습니다.

![편집도구](./imgs/detail-editor/section_32.png)

### 노드 정렬

- 반면에 노드정렬은 요소자체를 움직여 원하는 방향으로 배치하는데 활용할 수 있습니다.
- 노드정렬이 동작하려면 상위 영역에서 여유공간이 확보되어야 합니다.

### 가운데 배치

- [닫기] 버튼을 가운데 배치하는 시나리오를 가정하고 내용을 따라가볼게요.

1. 정렬하고자하는 요소를 선택해주고 [노드 정렬]에서 표시한 부분을 눌러줍니다.

![노드 정렬](./imgs/detail-editor/section_33.png)

2. 요소가 가운데로 정렬된 모습을 확인 할 수 있습니다.

![가운데 배치](./imgs/detail-editor/section_34.png)

## 색상 필터

1. 정렬하고자하는 요소를 선택해주고 [노드 정렬]에서 표시한 부분을 눌러줍니다.

![색상 필터](./imgs/detail-editor/section_35.png)

2. 빨간색 영역을 눌러 색상값을 입력하거나 파란색을 눌러 색상 팔레트에서 원하는 색상을 선택할 수 있습니다.

![색상 선택](./imgs/detail-editor/section_36.png)

![색상 팔레트](./imgs/detail-editor/section_37.png)

## 노출 위치

1. [공개 설정]을 눌러 미리보기 화면으로 이동합니다.

![공개 설정](./imgs/detail-editor/section_10.png)

2. [노출 위치] 영역을 누르고 나면 보이는 목록에서 원하는 위치를 선택해 줍니다.

![노출 위치](./imgs/detail-editor/section_38.png)

![노출 위치](./imgs/detail-editor/section_39.png)

3. 위치 선택을 하고난 후에는 [가로 조정]과 [세로 조정] 값을 변경해주면 팝업을 원하는 위치에 정밀하게 배치할 수 있습니다.

![노출 위치](./imgs/detail-editor/section_40.png)

## 공개

1. [공개 설정]을 눌러 미리보기 화면으로 이동합니다.

![공개 설정](./imgs/detail-editor/section_10.png)

2. 우측 하단에 위치한 [공개]를 누릅니다.

![공개](./imgs/detail-editor/section_41.png)

3. 캠페인 목록 페이지로 이동하면 해당 팝업이 [사용중]인 상태로 변경된 것을 확인 할 수 있습니다.

![사용중](./imgs/detail-editor/section_42.png)

## 사용 중지

1. 캠페인 목록 페이지로 이동해서 사용 중지하고 싶은 항목을 선택합니다.

![목록](./imgs/detail-editor/section_43.png)

2. [사용중]으로 표시된 곳을 누릅니다.

![사용유무](./imgs/detail-editor/section_44.png)

3. 모달창에서 [중지]를 누릅니다.

![즁지](./imgs/detail-editor/section_45.png)

4. 해당 팝업이 [미사용]인 상태로 변경된 것을 확인 할 수 있습니다.

![미사용](./imgs/detail-editor/section_46.png)

## 삭제

- 팝업을 삭제하기 보다 사이트에 노출되지 않도록 비활성화 하고 싶다면 [[사용 중지]](./detail-editor.md#사용-중지) 내용을 참고해주세요.

1. 캠페인 디테일 페이지에서 [더 보기] 아이콘을 누릅니다.

![더 보기](./imgs/detail-editor/section_49.png)

2. [삭제하기]를 누릅니다.

![삭제](./imgs/detail-editor/section_50.png)

2. 모달창에서 [삭제]를 누릅니다.

![삭제](./imgs/detail-editor/section_51.png)

## 애니메이션

1. 미리보기 화면에서 표시한 곳을 누릅니다.

![애니메이이션](./imgs/detail-editor/section_53.png)

2. 목록에서 원하는 애니메이션을 선택해주세요.

![애니메이이션](./imgs/detail-editor/section_54.png)

3. 선택한 애니메이션이 적합한지 [재생]을 눌러 확인해주세요.

- [재생]을 누르면 좌측 화면에서 애니메이션이 적용된 모습을 확인하실 수 있습니다.

![애니메이이션](./imgs/detail-editor/section_55.png)
