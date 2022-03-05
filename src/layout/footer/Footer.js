import "./style.scss";
import {
  Grey,
  Youtube,
  Facebook,
  LogoGH2,
  CallWhite,
  ComputerWhite,
  MessWhite,
  Zalo,
} from "../../assets/svg/index";
import { FooterBanner, BoCT } from "../../assets/img/index";
import { Col, Row, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { paths } from "../../constant";

const Footer = () => {
  return (
    <section className="footer">
      <div
        className="wrap-footer"
        style={{
          backgroundImage: "url(" + FooterBanner + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <Row gutter={[0, 20]}>
            <Col sm={24} lg={12}>
              <div className="company">
                <div className="company-logo">
                  <LogoGH2 />
                </div>
                <p>Công ty cổ phần green health vietnam</p>
                <div className="company-info">
                  <div className="company-text">
                    <Grey />
                    <span>Lô 22 - Số 35 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
                  </div>
                  <div className="company-text">
                    <Grey />
                    <span>0968876850</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={24} lg={12}>
              <div className="contact">
                <div className="about-left">
                  <p className="line">Về chúng tôi</p>
                  <ul>
                    <li>
                      <span>
                        <Link to={paths.chung_toi}>Giới thiệu</Link>
                      </span>
                    </li>
                    <li>
                      <Link to={paths.san_pham}>Sản phẩm</Link>
                    </li>
                    <li>
                      <span>
                        <Link to={paths.duoc_lieu}>Dược liệu</Link>
                      </span>
                    </li>
                    <li>
                      <span>
                        <Link to={paths.tin_tuc}>Tin tức</Link>
                      </span>
                    </li>
                    <li>
                      <span>
                        <Link to={paths.lien_he}>Liên hệ</Link>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="about-right">
                  <p>Theo dõi tin tức và sản phẩm mới nhất</p>
                  <div className="input-group">
                    <Input.Group compact>
                      <Input
                        style={{
                          width: "60%",
                          height: "40px",
                          fontSize: "16px",
                        }}
                        placeholder="Địa chỉ email"
                      />
                      <Button
                        type="primary"
                        style={{ width: "40%", height: "38px" }}
                      >
                        ĐĂNG KÝ
                      </Button>
                    </Input.Group>
                  </div>
                  <p className="line">Kênh truyền thông</p>
                  <div className="media-group">
                    <div className="media-logo">
                      <div>
                        <a href="https://www.facebook.com/GreenHealthSJC">
                          <Facebook />
                        </a>
                      </div>
                      <div>
                        <Youtube />
                      </div>
                    </div>
                    <div>
                      <img src={BoCT} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="side-bar">
        <div className="icon">
          <ComputerWhite />
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/GreenHealthSJC">
            <MessWhite />
          </a>
        </div>
        <div className="icon">
          <a href="tel:0968876850">
            <CallWhite />
          </a>
        </div>
        <div className="icon">
          <Zalo />
        </div>
      </div>
    </section>
  );
};

export default Footer;
