import { useEffect, useState } from "react";
import sendRequest from "./services/sendRequest.js";
import Header from "./UI/Header";
import "./style/reset.css";
import "./style/main.css";
import Content from "./UI/Content";
import Footer from "./UI/Footer.jsx";
import { movieUrl } from "./assets/config.js";

function App() {
  const [now, setNow] = useState();
  const [popular, setPopular] = useState();
  const [top, setTop] = useState();
  const [upcoming, setUpcoming] = useState();

  const getResponse = () => {
    for (let key in movieUrl) {
      sendRequest(movieUrl[key]).then((res) => {
        switch (key) {
          case "now":
            setNow(res);
            break;
          case "popular":
            setPopular(res);
            break;
          case "top":
            setTop(res);
            break;
          case "upcoming":
            setUpcoming(res);
            break;
        }
      });
    }
  };

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <>
      <Header></Header>
      <Content
        data={{
          now: now,
          popular: popular,
          top: top,
          upcoming: upcoming,
        }}
      ></Content>
      <Footer></Footer>
    </>
  );
}

export default App;
