# Infinite Scroll

## 구동화면
<p align="center"><img src="https://user-images.githubusercontent.com/71371075/132310040-8981e369-615d-415e-a5bb-19ce93a24015.gif" /></p>

## 구현
-   `scrollTop`과 `clientHeight`을 더한 값이 `scrollHeight`와 같으면 스크롤이 최하단에 도착한 것이어서 `displayLoading`으로 로딩 스피너를 보여주면서 데이터를 불러온다.

```js
const clientHeight = document.documentElement.clientHeight; // 현재 브라우저 창의 높이
const scrollHeight = document.documentElement.scrollHeight; // 스크롤을 다 내린 것 까지 포함한 창의 높이
const scrollTop = document.documentElement.scrollTop; // 현재 스크롤 위치(스크롤 바 위쪽 기준)
// scrollTop + clientHeight = scrollHeight
// 스크롤을 다 내렸다는 뜻.

if (scrollTop + clientHeight === scrollHeight) {
    displayLoading();
}
```
