import { BrowserRouter, Route, Switch } from "react-router-dom";
import { paths } from "../constant";
import {
  Home,
  Contact,
  About,
  News,
  NewsDetail,
  Medicine,
  MedicineDetail,
  Product,
} from "../pages/index";
import ScrollToTop from "../ScrollToTop";
import { Nav, Footer } from "../layout/index";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <ScrollToTop />
      <Switch>
        <Route exact path={paths.trang_chu} component={Home} />
        <Route exact path={paths.lien_he} component={Contact} />
        <Route exact path={paths.chung_toi} component={About} />
        <Route exact path={paths.tin_tuc} component={News} />
        <Route exact path={paths.tin_tuc_wSlug} component={NewsDetail} />
        <Route exact path={paths.duoc_lieu} component={Medicine} />
        <Route exact path={paths.duoc_lieu_wSlug} component={MedicineDetail} />
        <Route exact path={paths.san_pham} component={Product} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default RootRouter;
