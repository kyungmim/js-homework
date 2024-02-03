const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
let idValue = ''
let pwValue = ''

const email = document.querySelector(".user-email-input");
const password = document.querySelector(".user-password-input");
const submit = document.querySelector(".btn-login");

function handleChekId() {
  if (emailReg(this.value)) {
    email.classList.remove("is--invalid");
    idValue = this.value;
  } else if (this.value == "") {
    email.classList.remove("is--invalid");
  } else {
    email.classList.add("is--invalid");
  }
}
function handleChekPw() {
  if (pwReg(this.value)) {
    password.classList.remove("is--invalid");
    pwValue = this.value;
  } else if (this.value == "") {
    password.classList.remove("is--invalid");
  } else {
    password.classList.add("is--invalid");
  }
}

function handleSubmit(e) {
  if (idValue === user.id && pwValue === user.pw) {
    window.location.href = "welcome.html";
  } else {
    email.classList.add("is--invalid");
    password.classList.add("is--invalid");
  }
  e.preventDefault();
}

email.addEventListener("input", handleChekId);
password.addEventListener("input", handleChekPw);
submit.addEventListener("click", handleSubmit);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
