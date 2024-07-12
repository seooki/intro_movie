import { useEffect, useState } from "react";
import Search from "./components/Search";
import sendRequest from "./services/sendRequest";

function App() {
  const [data, setData] = useState();

  const getResponse = () => {
    sendRequest().then((res) => setData(res));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Search getResponse={getResponse}></Search>
    </>
  );
}

export default App;
