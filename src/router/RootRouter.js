import { BrowserRouter, Route, Switch } from "react-router-dom";
import { paths } from "../constant";
import { Home } from "../pages/index";
import { Nav, Footer } from "../layout/index";

const RootRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Switch>
        <Route exact path={paths.trang_chu} component={Home} />
      </Switch>
    <Footer/>
    </BrowserRouter>
  );
};

export default RootRouter;
