import "./style.scss";
import { Call, LogoGH, Search } from "../../assets/svg/index";
import { NavBanner } from "../../assets/img/index";
import { Input } from "antd";
import { paths } from "../../constant";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="nav">
      <div className="container">
        <div className="warp-nav-top">
          <Link to={paths.trang_chu}>
            <LogoGH />
          </Link>
          <ul>
            <li>
              <Call />
              <span className="span">Hotline: 1900 920 878 </span>
            </li>
            <li>
              <Input prefix={<Search />} placeholder="Từ khóa..." />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="container navlinks"
        style={{
          backgroundImage: "url(" + NavBanner + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="warp-nav-bottom">
          <ul>
            <li>
              <Link to={paths.chung_toi}>Liên hệ</Link>
            </li>
            <li>
              <div className="vl"></div>
            </li>
            <li>
              <a href="/">Sản phẩm</a>
            </li>
            <li>
              <div className="vl"></div>
            </li>
            <li>
              <a href="/">Dược liệu</a>
            </li>
            <li>
              <div className="vl"></div>
            </li>
            <li>
              <Link to={paths.tin_tuc}>Tin tức</Link>
            </li>
            <li>
              <div className="vl"></div>
            </li>
            <li>
              <Link to={paths.lien_he}>Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Nav;
