import { useEffect } from "react";
import styled from "styled-components";

export default (props) => {
  return (
    <MovieCard>
      <Poster
        img={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}
      ></Poster>
      <Title className="title">{props.item.title}</Title>
      <small className="date">개봉일: {props.item.release_date}</small>
    </MovieCard>
  );
};

const MovieCard = styled.li`
  width: 400px;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: 10px;
  overflow: hidden;
`;

const Poster = styled.div`
  width: 100%;
  height: 550px;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 5px 0;
`;
