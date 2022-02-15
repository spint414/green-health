import "./style.scss";
import { Call, LogoGH, Search } from "../../assets/svg/index";
import { NavBanner } from "../../assets/img/index";
import { Input } from "antd";

const Nav = () => {
  return (
    <section className="nav">
      <div className="container">
        <div className="warp-nav-top">
          <LogoGH />
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
        style={{ backgroundImage: "url(" + NavBanner + ")" }}
      >
        <div className="warp-nav-bottom">
          <ul>
            <li>
              <a href="/">Về chúng tôi</a>
            </li>
            <li>
              <div class="vl"></div>
            </li>
            <li>
              <a href="/">Sản phẩm</a>
            </li>
            <li>
              <div class="vl"></div>
            </li>
            <li>
              <a href="/">Dược liệu</a>
            </li>
            <li>
              <div class="vl"></div>
            </li>
            <li>
              <a href="/">Tin tức</a>
            </li>
            <li>
              <div class="vl"></div>
            </li>
            <li>
              <a href="/">Liên hệ</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Nav;
