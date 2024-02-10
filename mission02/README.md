# 이벤트 위임 (클릭 이벤트)

## 프로젝트 설명

- 이벤트 위임처리로 해당 메뉴 클릭시 이벤트가 일어나는 프로젝트입니다.

---

## 목차

1. setImage
2. setBgColor
3. setNameText

---

### 코드 설명

**중복 코드**

중복 되는 코드 설명은 아래에서 간략하게 설명겠습니다.

```js
const target = e.target.closest(".navigation > li");
//클릭된 요소중 가장 가까운 li를 찾아 targat에 할당

if (!target) return;
//target이 없으면 함수 종료

const index = target.dataset.index;
// 클릭된 아이템에 data-index값을 가져와 index에 할당

posters.forEach(function (item) {
  item.classList.remove("is-active");
});
target.classList.add("is-active");

// posters에 있는 is-active클랙스를 제거하고 클릭된 요소에 다시 할당
```

**1. setImage**

```js
const posterImages = [
  "./assets/ember.jpeg",
  "./assets/wade.jpeg",
  "./assets/clod.jpeg",
  "./assets/gale.jpeg",
];

mainPostImg.src = posterImages[index - 1];

mainPostImg.alt = data[index - 1].alt;
```

- main 이미지 경로 배열로 정리
- 클릭된 아이템에 해당하는 이미지 파일을 할당
- 클릭된 아이템에 해당하는 이미지 파일의 alt 할당

<br>

**2. setBgColor**

```js
mainBackground.style.background = `linear-gradient(to bottom, ${
  data[ndex - 1].color
})`;
```

- data 배열의 color값을 가져와 클릭된 요소에 맞게 할당.

<br>

**3. setNameText**

```js
mainNickName.textContent = data[index - 1].name;
```

- data 배열의 name값을 가져와 클릭된 요소에 html 문자를 바꿔줌.

---
