import { BrowserRouter, Route, Switch } from "react-router-dom";
import { paths } from "../constant";
import { Home } from "../pages/index";
import { Nav } from "../layout/index";

const RootRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Switch>
        <Route exact path={paths.trang_chu} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
