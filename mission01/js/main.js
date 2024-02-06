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
let idValue = "";
let pwValue = "";

const email = document.querySelector(".user-email-input");
const password = document.querySelector(".user-password-input");
const submit = document.querySelector(".btn-login");

function handleChekId() {
  if (emailReg(this.value)) {
    email.classList.remove("is--invalid");
    console.log("입력");
    idValue = this.value; // 정규식이 통과된다면 이라는 과정에만 밸류값을 반환하는건 문제가 생길수도있음..
  } else if (this.value == "") {
    email.classList.remove("is--invalid");
  } else {
    email.classList.add("is--invalid");
  }
}
function handleChekPw() {
  if (pwReg(this.value)) {
    password.classList.remove("is--invalid");
    console.log("비번입력");
    pwValue = this.value;
  } else if (this.value == "") {
    password.classList.remove("is--invalid");
  } else {
    password.classList.add("is--invalid");
  }
}

function handleSubmit(e) {
  e.preventDefault(); // 아래있으면 안됨.
  if (idValue === user.id && pwValue === user.pw) {
    window.location.href = "welcome.html";
  } else {
    email.classList.add("is--invalid");
    password.classList.add("is--invalid");
  }
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

// function handlePageshow(event) {
//   // 페이지가 보여질 때 초기화
//   idValue = "";
//   pwValue = "";
//   email.value = "";
//   password.value = "";
// }
// window.addEventListener("pageshow", handlePageshow);

// 강사님이 작성해주신 코드
// const user = {
//   id:'asd@naver.com',
//   pw:'spdlqj123!@'
// }

// /*

// 1. email 정규표현식을 사용한 validation
//   - false면 해당 input에 is--invalid 클래스 추가 (add)
//   - true면 해당 input에 is--invalid 클래스 제거 (remove)

// 2. pw 정규표현식을 사용한 validation
//   - false면 해당 input에 is--invalid 클래스 추가 (add)
//   - true면 해당 input에 is--invalid 클래스 제거 (remove)

// 3. 상태 변수 관리
//   - 사용자가 이메일을 제대로 입력했다면 -> true | false
//   - 사용자가 비밀번호 제대로 입력했다면 -> true | false

// 4. 로그인 버튼을 클릭시 조건처리
// user.id === value
// user.pw === value

// welcome.html로 이동~!

// */

// // @ 기호 포함, .이후 2글자 이상
// function emailReg(text){
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   return re.test(String(text).toLowerCase())
// }

// // 최소 6글자 이상, 0~9숫자 1개이상 포함, 특수기호 1개 이상 포함
// function pwReg(text){
//   const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
//   return re.test(String(text).toLowerCase());
// }

// const emailInput = document.querySelector('#userEmail');
// const pwInput = document.querySelector('#userPassword');
// const loginButton = document.querySelector('.btn-login');

// let emailPass = false;
// let pwPass = false;

// function handleEmailCheck () {

//   const value = this.value;

//   if(emailReg(value)){
//     // 이메일 인풋에게 is--invalid 클래스를 제거
//     this.classList.remove('is--invalid');
//     emailPass = true;
//   }else{
//     // 이메일 인풋에게 is--invalid 클래스를 추가
//     this.classList.add('is--invalid');
//     emailPass = false;
//   }
// }

// function handlePwCheck(){

//   const value = this.value;

//   if(pwReg(value)){
//     this.classList.remove('is--invalid');
//     pwPass = true;
//   }else{
//     this.classList.add('is--invalid');
//     pwPass = false;
//   }
// }

// function handleLogin(e){
//   e.preventDefault();

//   if(emailPass && pwPass){
//     try{
//       const id = emailInput.value;
//       const pw = pwInput.value;
//       const getUserId = user.id; // 비동기 통신 1s
//       const getUserPw = user.pw; // 비동기 통신 1s

//       if(id === getUserId && pw === getUserPw){
//         console.log('로그인 성공!');
//         location.href = 'welcome.html'
//       }
//     }catch{

//     }
//   }
// }

// emailInput.addEventListener('input',handleEmailCheck)
// pwInput.addEventListener('input',handlePwCheck)
// loginButton.addEventListener('click',handleLogin)
