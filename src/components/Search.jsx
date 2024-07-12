import { useEffect, useState } from "react";

export default ({ getResponse }) => {
  const [keyword, setKeyword] = useState(null);
  const [debounce, setDebounce] = useState(null);

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    clearTimeout(debounce);
    if (debounce) {
      setDebounce(
        setTimeout(() => {
          getResponse();
        }, 200)
      );
    }
  }, [keyword]);

  return (
    <>
      <input onChange={onChangeKeyword}></input>
      <button>검색</button>
    </>
  );
};
