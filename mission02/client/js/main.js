/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { getNode, getNodes, data, AudioPlayer } from "./index.js";

const mainPostImg = getNode(".visual img");
const mainNickName = getNode(".nickName");
const mainBackground = getNode("body");
const navigation = getNode(".navigation");
const posters = getNodes(".navigation > li");

//------------------------------------------------ img

function setImage(e) {
  e.preventDefault();

  const target = e.target.closest(".navigation > li");

  if (!target) return;

  const index = target.dataset.index;

  posters.forEach(function (item) {
    item.classList.remove("is-active");
  });

  target.classList.add("is-active");

  // - img 코드
  const posterImages = [
    "./assets/ember.jpeg",
    "./assets/wade.jpeg",
    "./assets/clod.jpeg",
    "./assets/gale.jpeg",
  ];

  mainPostImg.src = posterImages[index - 1];

  mainPostImg.alt = data[index - 1].alt;
}

//------------------------------------------------ background

function setBgColor(e) {
  e.preventDefault();

  const target = e.target.closest(".navigation > li");

  if (!target) return;

  const index = target.dataset.index;

  posters.forEach(function (item) {
    item.classList.remove("is-active");
  });

  target.classList.add("is-active");

  // - background 코드
  mainBackground.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color
  })`;
}

// //------------------------------------------------ text

function setNameText(e) {
  e.preventDefault();

  const target = e.target.closest(".navigation > li");

  if (!target) return;

  const index = target.dataset.index;

  posters.forEach(function (item) {
    item.classList.remove("is-active");
  });

  target.classList.add("is-active");

  // - text 코드
  mainNickName.textContent = data[index - 1].name;
}

navigation.addEventListener("click", setImage);
navigation.addEventListener("click", setBgColor);
navigation.addEventListener("click", setNameText);
