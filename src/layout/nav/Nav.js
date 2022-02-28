import "./style.scss";
import { Call, LogoGH, Search } from "../../assets/svg/index";
import { NavBanner } from "../../assets/img/index";
import { Input } from "antd";
import { paths } from "../../constant";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Nav = () => {
  let location = useLocation();

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
              <span className="span">Hotline: 0968876850 </span>
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
            <li
              className={clsx(
                location.pathname === paths.chung_toi ? "active" : " "
              )}
            >
              <Link to={paths.chung_toi}>Về chúng tôi</Link>
            </li>
            <li>
              <div className="vl"></div>
            </li>
            <li
              className={clsx(
                location.pathname === paths.san_pham ? "active" : " "
              )}
            >
              <Link to={paths.san_pham}>Sản phẩm</Link>
            </li>
            <li>
              <div className="vl"></div>
            </li>
            <li
              className={clsx(
                location.pathname === paths.duoc_lieu ? "active" : " "
              )}
            >
              <Link to={paths.duoc_lieu}>Dược liệu</Link>
            </li>
            <li>
              <div className="vl"></div>
            </li>
            <li
              className={clsx(
                location.pathname === paths.tin_tuc ? "active" : " "
              )}
            >
              <Link to={paths.tin_tuc}>Tin tức</Link>
            </li>
            <li>
              <div className="vl"></div>
            </li>
            <li
              className={clsx(
                location.pathname === paths.lien_he ? "active" : " "
              )}
            >
              <Link to={paths.lien_he}>Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Nav;
