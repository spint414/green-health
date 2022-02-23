import { BrowserRouter, Route, Switch } from "react-router-dom";
import { paths } from "../constant";
import { Home, Contact, About, News, NewsDetail } from "../pages/index";
import { Nav, Footer } from "../layout/index";

const RootRouter = () => {
  return (
    <BrowserRouter>
    <Nav/>
      <Switch>
        <Route exact path={paths.trang_chu} component={Home} />
        <Route exact path={paths.lien_he} component={Contact} />
        <Route exact path={paths.chung_toi} component={About} />
        <Route exact path={paths.tin_tuc} component={News} />
        <Route exact path={paths.tin_tuc_wSlug} component={NewsDetail} />
      </Switch>
    <Footer/>
    </BrowserRouter>
  );
};

export default RootRouter;
