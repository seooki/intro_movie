import { useEffect, useState } from "react";
import { apiKey } from "../assets/config";

export default () => {
  const [data, setData] = useState();

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <></>;
};

// 이미지 가져오는 경로 https://image.tmdb.org/t/p/w500/8BRSeREiz3UtDACuOjW8KyCyFuR.jpg
