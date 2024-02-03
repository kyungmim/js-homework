# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---

## 코드 설명

- **코드설명**
  - **ID**
  - **PW**
  - **Submit**
    <br>
- **실행 방법**

---

#### ID,PW 조건문

정확한 코드 작성을 위해 다음과 같은 조건을 만들고 작업하였습니다

- Error 메세지가 나오는 조건

  - 함수의 조건에 부합하지않을때 (정규식 내용에 부합하지않을때)
  - 공백 상태에서 로그인을 눌렀을때

- Error 메세지가 안나오는 조건
  - 함수의 조건에 부합했을때 (정규식 조건에 부합할때)
  - 아무것도 입력하지않거나 혹은 적은 문자를 다 지웠을때

위 조건 기준으로 작성하였습니다.

---

### 코드 설명

**1. ID**

```js
emailReg(this.value);
```

- 조건문과 정규식을 사용하여 this가 가르키고 있는 value값이 정규식 내용에 적합하면 실행되게 만들었습니다.

```js
idValue = this.value;
```

- 조건이 true가 된다면 값이 idValue에 담길수있게 코드를 작성하였습니다.

  <br>

```js
else if (this.value == "")
```

- 아무것도 입력하지 않은 공백이였을 경우에도 하단에 Error문구가 뜨면 안되기 때문에 조건을 추가하여 공백일 경우에는 오류 문구가 뜨지않게 작업하였습니다.

**2. PW**

- ID와 같은 코드로 변수명만 수정하여 작성하였습니다.

**3. Submit**

```js
if (idValue === user.id && pwValue === user.pw) {
  window.location.href = "welcome.html";
} else {
  email.classList.add("is--invalid");
  password.classList.add("is--invalid");
}
```

- 각 함수에서 받아오 value 값이 user 객체 안에 id와 pw가 일치하다면 아래 코드를 실행할 수 있게 작성하였습니다.

- 만약 조건 값이 일치하지않거나 빈 공백 상태로 로그인 버튼을 누를 경우 Error 문구가 표출될 수 있도록 작성하였습니다.

---

### 실행 방법

**1.** 이메일과 비밀번호 input에 정규식에 해당하지않는 문자들을 적습니다.

- 위와 같이 작성했다면 오류 문구가 나오는것을 확인 하실겁니다.
  <br>

**2.** 이번에는 user에 있는 id,pw가 아닌 정규식에 부합한 이메일과 비밀번호를 적어주시길 바랍니다.

- 다 지웠을때 오류 문구가 사라지고 다시 정규식에 부합한 이메일과 비밀번호를 적었을때 또 다시 오류 문구가 사라지는것을 확인 할 수 있습니다.
  <br>

**3.** 현재 2번 상태로 로그인 버튼을 눌러주시길 바랍니다.

- 로그인 버튼을 누름과 동시에 이메일과 비밀번호 input 하단에 오류 문구가 뜨는 것을 확인 할 수 있습니다.
  <br>

**4.** 3번 상태에서 이메일과 비밀번호 input에 적혀있는 글자들을 다 지우고 로그인 버튼을 눌러주시길 바랍니다.

- 지우고 나서 로그인 버튼을 눌렀을때 또 다시 오류 메세지가 뜨는 것을 확인 하실수있습니다.
  <br>

**5.** 마지막으로 user안에 있는 이메일과 비밀번호를 입력 후 로그인 버튼을 눌러주시길 바랍니다.

- 로그인 버튼을 클릭 후 welcome페이지로 넘어가는것을 확일 하실수있습니다.

<br>
위 실행법으로 잘따라와 주셔서 감사합니다:)

코드가 마음에 드셨다면 아래와 같이 칭찬해주세요.

![김바덕](https://item.kakaocdn.net/do/37f60207810643d2a06e79ad877dee7d7e6f47a71c79378b48860ead6a12bf11)