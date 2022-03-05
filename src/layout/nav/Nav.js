import "./style.scss";
import React, { useState } from "react";
import {
  Call,
  LogoGH,
  Search,
} from "../../assets/svg/index";
import { NavBanner } from "../../assets/img/index";
import { Input, Drawer } from "antd";
import { paths } from "../../constant";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { AlignRightOutlined } from "@ant-design/icons/lib/icons";

const Nav = () => {
  let location = useLocation();
  const [visible, setVisible] = useState(false);
  const hidden = () => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

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
          <AlignRightOutlined
            className="menu-btn"
            onClick={() => setVisible(true)}
          />
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
      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
        className="menu-collapse"
        footer={null}
        closable={false}
        width={360}
      >
        <ul className="ul">
          <li
            onClick={() => {
              hidden();
            }}
            className={clsx(
              location.pathname === paths.chung_toi ? "active" : " "
            )}
          >
            <Link to={paths.chung_toi}>Về chúng tôi</Link>
          </li>
          <li
            onClick={() => {
              hidden();
            }}
            className={clsx(
              location.pathname === paths.san_pham ? "active" : " "
            )}
          >
            <Link to={paths.san_pham}>Sản phẩm</Link>
          </li>
          <li
            onClick={() => {
              hidden();
            }}
            className={clsx(
              location.pathname === paths.duoc_lieu ? "active" : " "
            )}
          >
            <Link to={paths.duoc_lieu}>Dược Liệu</Link>
          </li>
          <li
            onClick={() => {
              hidden();
            }}
            className={clsx(
              location.pathname === paths.tin_tuc ? "active" : " "
            )}
          >
            <Link to={paths.tin_tuc}>Tin tức</Link>
          </li>
          <li
            onClick={() => {
              hidden();
            }}
            className={clsx(
              location.pathname === paths.lien_he ? "active" : " "
            )}
          >
            <Link to={paths.lien_he}>Liên hệ</Link>
          </li>
        </ul>
      </Drawer>
    </section>
  );
};

export default Nav;
