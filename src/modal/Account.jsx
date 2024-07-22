import styled from "styled-components";

export default () => {
  return (
    <Container>
      <Input></Input>
      <Input></Input>
      <Submit>확인</Submit>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 400px;
  border: 1px solid red;
  border-radius: 13px;
`;

const Input = styled.input`
  width: 100%;
  height: 33px;
  border: 1px solid red;
  border-radius: 13px;
`;

const Submit = styled.button`
  width: 100%;
  height: 33px;
  border: 1px solid red;
  border-radius: 13px;
  background-color: blue;
`;
