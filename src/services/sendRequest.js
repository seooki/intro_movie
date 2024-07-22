import { movieUrl, apiKey } from "../assets/config";

export default async (category) => {
  const url = category + `api_key=${apiKey}&language=ko-KR`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDRkMDQ1ZjgzMGNlM2Q0NGJiYjcwYTZlYWYzYjhjMCIsIm5iZiI6MTcyMTA5NzAwNC4wODQ5NTYsInN1YiI6IjYzNTk5NWU4M2ZlMTYwMDA3YTU0YjJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PFCP0Czp3AQQyslB-Q9qmXS3JXyrsHG05Xta1bREPkw",
    },
  };

  const result = fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.error("error:" + err));
  if (result) return result;
};

//https://api.themoviedb.org/3/movie/upcoming?api_key=6d4d045f830ce3d44bbb70a6eaf3b8c0&with_release_type=2|3&release_date.gte=2024-07-20&release_date.lte=2024-12-31&language=ko-KR
