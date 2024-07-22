import { useState } from "react";

export default () => {
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  const loginFnc = () => {
    if (id === null || password === null) {
      return alert("아이디 또는 비밀번호를 확인해주세요");
    }
  };

  return (
    <>
      <div>
        <input
          className="input-id"
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <input
          className="input-password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={loginFnc}>로그인</button>
      </div>
      <ul>
        <li>회원가입</li>
        <li>아이디 찾기/</li>
        <li>비밀번호 찾기</li>
      </ul>
    </>
  );
};
