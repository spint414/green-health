import { Form, Input, Row } from "antd";
import { Banner5 } from "../../assets/img";
import {
  Envelop,
  FacebookCl,
  InstagramCl,
  LinkedinCl,
  Location,
  Phone,
  YoutubeCl,
} from "../../assets/svg";
import "./style.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-info">
        <div className="container">
          <div className="social-info">
            <h1>Liên hệ</h1>
            <p>Gửi email hoặc liên hệ qua các kênh mạng xã hội</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/GreenHealthSJC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookCl />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeCl />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramCl />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinCl />
              </a>
            </div>
          </div>

          <div className="wrap">
            <div style={{ width: "100%" }} className="inner">
              <Row align="middle">
                <Location />
                <span>Trụ sở</span>
              </Row>

              <p>Lô 22, Số 35 Lê Văn Thiêm, Q. Thanh Xuân, TP. Hà Nội</p>
            </div>

            <div className="inner">
              <Row align="middle">
                <Phone />
                <span>Hotline</span>
              </Row>

              <p>1900 920 878</p>
            </div>

            <div className="inner">
              <Row align="middle">
                <Envelop />
                <span>Email</span>
              </Row>

              <p>contact@ghp.com.vn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="form-send" style={{ backgroundImage: `url(${Banner5})` }}>
        <div className="layer">
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.5196579332967!2d105.80363461667176!3d20.998928362060763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca2cd3fffff%3A0xd2d82eaa29579516!2zMzUgTMOqIFbEg24gVGhpw6ptLCBUaGFuaCBYdcOibiBUcnVuZywgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1640171581846!5m2!1svi!2s"
              allowfullscreen=""
              loading="lazy"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                // minHeight: 400,
              }}
              title="map"
            ></iframe>
            <div>
              <h2>Gửi ý tưởng hoặc đề nghị của bạn tại đây</h2>
              <Form>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Hãy điền đầy đủ họ và tên" },
                  ]}
                >
                  <Input placeholder="Họ và tên" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Hãy điền đầy đủ số điện thoại" },
                  ]}
                >
                  <Input placeholder="Số điện thoại" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Hãy điền đầy đủ email" }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="content"
                  rules={[
                    { required: true, message: "Hãy điền đầy đủ nội dung" },
                  ]}
                >
                  <Input placeholder="Nội dung" />
                </Form.Item>
                <Form.Item htmlFor="submit">
                  <button>Gửi ngay</button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
