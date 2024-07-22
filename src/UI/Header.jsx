import { useState } from "react";
import styled from "styled-components";

export default () => {
  const [accountLevel, setAccountLevel] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const openAccountModal = (level) => {
    switch (level) {
      case level === "1":
        setAccountLevel(1);
        break;
      case level === "2":
        setAccountLevel(2);
    }
  };

  return (
    <Container>
      <Header>
        <Nav>
          <Logo src="../assets/img/logo.png"></Logo>
          <ul>
            <li>영화</li>
          </ul>
        </Nav>
        <Nav>
          <Input
            placeholder="영화 제목을 검색해보세요"
            onChange={(e) => {
              setKeyword(e);
            }}
          ></Input>
          <Button
            onClick={() => {
              openAccountModal(1);
            }}
          >
            로그인
          </Button>
          <Button
            onClick={() => {
              openAccountModal(2);
            }}
          >
            회원가입
          </Button>
        </Nav>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
  position: fixed;
  background: #fff;
  z-index: 9999;
`;

const Header = styled.div`
  width: 1320px;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  align-itmes: center;
`;

const Input = styled.input`
  width: 340px;
  height: 34px;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: auto;
  height: auto;
  box-sizing: border-box;
  margin-left: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 100px;
  height: 50px;
`;
