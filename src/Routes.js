import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./pages/about/about";
import { Info } from "./pages/info/info";
import { Home } from "./pages/home/home";
import { Header } from "./header";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/info" component={Info} />
      </Switch>
    </BrowserRouter>
  );
};
