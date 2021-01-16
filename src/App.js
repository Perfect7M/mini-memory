import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Game from "./pages/game/Game";
import Leaderboards from "./pages/leaderboards/Leaderboards";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/leaderboards">
          <Leaderboards />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
