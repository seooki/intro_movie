import { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";

export default (props) => {
  return (
    <Container>
      <SubTitle>상영중인 영화 목록</SubTitle>
      <MovieList>
        <CardContainer>
          {props.data.now?.results.map((item, index) => (
            <Card key={index} item={item}></Card>
          ))}
        </CardContainer>
      </MovieList>
      <SubTitle>인기순 영화 목록</SubTitle>
      <MovieList>
        <CardContainer>
          {props.data.popular?.results.map((item, index) => (
            <Card key={index} item={item}></Card>
          ))}
        </CardContainer>
      </MovieList>
      <SubTitle>평점순 영화 목록</SubTitle>
      <MovieList>
        <CardContainer>
          {props.data.top?.results.map((item, index) => (
            <Card key={index} item={item}></Card>
          ))}
        </CardContainer>
      </MovieList>
      <SubTitle>개봉예정 영화 목록</SubTitle>
      <MovieList>
        <CardContainer>
          {props.data.upcoming?.results.map((item, index) => (
            <Card key={index} item={item}></Card>
          ))}
        </CardContainer>
      </MovieList>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 75px;
  width: 1320px;
  margin: 0 auto;
  padding: 50px 0 125px 0;
`;

const CardContainer = styled.div`
  display: inline-flex;
  margin-left: -10px;
`;

const MovieList = styled.ul`
  width: 100%;
  height: 600px;
  margin-bottom: 50px;
  overflow: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(1, 1, 1, 0);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`;
