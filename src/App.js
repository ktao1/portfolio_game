import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/portfolio_game" exact>
          <Home />
        </Route>
        <Route path="/portfolio_game/Project" exact>
          <Project />
        </Route>
        <Route path="/portfolio_game/About" exact>
          <About />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
