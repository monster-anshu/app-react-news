import "./App.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Component/About";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  const router = [
    "",
    "politics",
    "science",
    "health",
    "entertainment",
    "food",
    "travel",
    "tech",
    "business",
    "sports",
    "about",
  ];

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#ffff"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={3}
          transitionTime={100}
          loaderSpeed={700}
        />
        <Switch>
          {router.map((z, i) => (
            <Route exact path={"/" + z} key={i}>
              <News lode={setProgress} cat={z.length ? z : "general"} />
            </Route>
          ))}
          <Route exact path={"/about"}>
            <About />{" "}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
