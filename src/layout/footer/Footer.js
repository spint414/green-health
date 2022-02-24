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
import { Col, Row } from "antd";

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
                <div className="company-text">
                  <Grey />
                  <span>Lô 22 - Số 35 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
                </div>
                <div className="company-text">
                  <Grey />
                  <span>1900 920 878</span>
                </div>
              </div>
            </Col>
            <Col sm={24} lg={12}>
              <div className="contact">
                <div className="about">
                  <p>Về chúng tôi</p>
                  <ul>
                    <li>
                      <span>Giới thiệu</span>
                    </li>
                    <li>
                      <span>Sản phẩm</span>
                    </li>
                    <li>
                      <span>Dược liệu</span>
                    </li>
                    <li>
                      <span>Tin tức</span>
                    </li>
                    <li>
                      <span>Liên hệ</span>
                    </li>
                  </ul>
                </div>

                <div className="media">
                  <p>Kênh truyền thông</p>
                  <div className="media-logo">
                    <div>
                      <Facebook />
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
            </Col>
          </Row>
        </div>
      </div>

      <div className="side-bar">
        <div className="icon">
          <ComputerWhite />
        </div>
        <div className="icon">
          <MessWhite />
        </div>
        <div className="icon">
          <CallWhite />
        </div>
        <div className="icon">
          <Zalo />
        </div>
      </div>
      
    </section>
  );
};

export default Footer;
