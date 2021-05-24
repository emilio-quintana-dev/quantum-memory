import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import WordBank from "./components/WordBank";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import About from "./components/About";

import randomWords from "random-words";

import GlobalStyle from "./globalStyles";

function App() {
  const [words, setWords] = useState<string[]>(randomWords(10));
  const [inputs, setInputs] = useState<string[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <GlobalStyle />

      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />

      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Landing
              setLoggedIn={setLoggedIn}
              setWords={setWords}
            />
          )}
        />

        <Route
          path="/login"
          exact
          render={() => <Login setLoggedIn={setLoggedIn} />}
        />

        <Route path="/about">
          <About />
        </Route>

        <Route
          path="/register"
          exact
          render={() => <SignUp setLoggedIn={setLoggedIn} />}
        />

        <Route
          path="/bank"
          exact
          render={() => <WordBank words={words} />}
        />

        <Route
          path="/quiz"
          exact
          render={() => <Quiz setInputs={setInputs} />}
        />

        <Route
          path="/results"
          exact
          render={() =>
            <Results
              words={words}
              inputs={inputs}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
            />
          }
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default React.memo(App);
