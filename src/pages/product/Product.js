import "./style.scss";
import React from "react";
import {
  AsianDoctor,
  Jar,
  CountrySide,
  Heart,
  CNQT,
  CNYT,
  BachTruat,
  BioGlena,
  BotMix20,
  DamWhey80,
  DangSamBac,
  DinhLang,
  DongTrungHaThao,
  DuongQuy,
  DuongThotNot,
  LinhChi,
  SuaBot,
  Tao,
  Customer,
  Customer2,
} from "../../assets/img/index";
import { Col, Row, Button, Form, Input } from "antd";
import "slick-carousel/slick/slick.css";


const Product = () => {
  return (
    <section className="Product">
      <div className="product-banner">
        <img src={Jar} alt="" />
      </div>

      <div className="product-target">
        <Row>
          <Col sm={24} md={12}>
            <div className="img">
              <img src={AsianDoctor} alt="" />
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className="warp-target">
              <div className="target-content">
                <h2>Đối tượng sử dụng</h2>
                <p>
                  Sản phẩm phù hợp với mọi đối tượng: Người bệnh, người trưởng
                  thành, phụ nữ có thai và cho con bú, trẻ em trên 2 tuổi.
                </p>
                <p className="red">Đặc biệt thích hợp cho: </p>
                <ul>
                  <li>
                    Người cần hồi phục nhanh chóng trước trong và sau quá trình
                    điều trị bệnh (sau nằm viện, sau mổ, sau sinh, sau hóa trị
                    và xạ trị....)
                  </li>
                  <li>
                    Người suy dinh dưỡng, sức đề kháng kém, có nhiều bệnh lý
                    nền.
                  </li>
                  <li>
                    Những người gặp khó khăn về đề ăn uống như: táo bón, rối
                    loạn hấp thu, đầy bụng, khó tiêu.
                  </li>
                  <li>Người đang trong quá trình tập luyện thể dục thể thao</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="product-effect">
        <Row>
          <Col sm={24} md={12}>
            <div className="warp-effect">
              <div className="effect-content">
                <h2>Hiệu quả nổi bật</h2>
                <ul>
                  <li>
                    Tăng cường chức năng gan, thận, phổi, đẩy nhanh quá trình
                    thanh lọc và đảo thải độc tố.
                  </li>
                  <li>
                    Tăng cường chức năng đường tiêu hóa giúp dễ dàng hấp thu
                    dưỡng chất một cách hiệu quả.
                  </li>
                  <li>
                    Chống oxy hóa, chống gốc tự do giúp trẻ hóa các tế bào của
                    cơ thể.
                  </li>
                  <li>
                    Hạn chế tác dụng phụ của các thuốc điều trị như: Kháng sinh,
                    hóa chất...
                  </li>
                  <li>Tăng cường miễn dịch tự nhiên của cơ thể.</li>
                  <li>
                    Tiết kiệm, giảm thiểu chi phí phải sử dụng các sản phẩm hỗ
                    trợ bồi bổ sức khỏe khác.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className="img">
              <img src={Heart} alt="" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="product-banner2">
        <img src={CountrySide} alt="" />
      </div>

      <div className="product-component">
        <div className="container">
          <div className="component-header">
            <h2>Các thành phần chính</h2>
          </div>
          <div className="warp-component">
            <Row>
              <Col xs={24} xl={12}>
                <div className="component-main">
                  <div className="left">
                    <h3>Tảo Arthrospira Platensis</h3>
                    <p>
                      Là một loại vi tảo dạng sợi xoắn màu xanh lục, chúng ta
                      chỉ có thể quan sát dưới kính hiển vi do tảo được cấu tạo
                      từ nhiều đơn bào. Chúng có tác dụng hỗ trợ, tăng cường
                      miễn dịch và điều trị bệnh lý. Đặc biệt khả năng chống oxy
                      cực kỳ cao.
                    </p>
                  </div>
                  <div className="right">
                    <img src={Tao} alt="" />
                  </div>
                </div>
              </Col>
              <Col xs={24} xl={12}>
                <div className="component-main">
                  <div className="left">
                    <img src={BioGlena} alt="" />
                  </div>
                  <div className="right">
                    <h3>BioGlena (Beta 1-3 Glucan 55%)</h3>
                    <p>
                      β-Glucan là loại hợp chất đường đơn phân tử D-glucose, nối
                      với nhau bằng liên kết β-glycoside. Đây là hợp chất không
                      tan, có hoạt tính sinh học cao. Chúng thường được triết từ
                      một số các loại nấm như Nấm Linh chi (Reishi), Nấm hương
                      (Shiitake), Maitake.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={24} xl={12}>
                <div className="component-sub">
                  <h3>Các loại dược liệu quý</h3>

                  <div className="row">
                    <div className="medical">
                      <img src={BachTruat} alt="" />
                      <h4>Bạch truật</h4>
                    </div>
                    <div className="medical">
                      <img src={DinhLang} alt="" />
                      <h4>Đinh lăng</h4>
                    </div>
                    <div className="medical">
                      <img src={LinhChi} alt="" />
                      <h4>Linh chi</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="medical">
                      <img src={DangSamBac} alt="" />
                      <h4>Đăng sâm bắc</h4>
                    </div>
                    <div className="medical">
                      <img src={DuongQuy} alt="" />
                      <h4>Đường quy</h4>
                    </div>
                    <div className="medical">
                      <img src={DongTrungHaThao} alt="" />
                      <h4>Đông trùng hạ thảo</h4>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} xl={12}>
                <div className="component-sub">
                  <h3>Các thành phần khác</h3>
                  <div className="row-feature">
                    <img src={BotMix20} alt="" />
                    <div>
                      <h4>Bột Mix 20 loại hạt</h4>
                      <p>
                        Hạt Cacao, Hạt Ỷ dĩ, Hạt Sachi, Hạt Macca, Hạt Óc chó,
                        Hạt Hạnh nhân, Hạt Chia, Hạt Sen, Hạt Đậu Hà lan, Hạt
                        Đậu đen, Hạt Đậu xanh, Hạt Đậu đỏ, Hạt Đậu ngực, Hạt Đậu
                        trắng, Hạt Đậu nành, Hạt Đậu phộng, Hạt Vừng đen, Hạt
                        Mít, Hạt Thông.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="medical">
                      <img src={SuaBot} alt="" />
                      <h4>Sửa bột nguyên kem</h4>
                    </div>
                    <div className="medical">
                      <img src={DamWhey80} alt="" />
                      <h4>Đạm Whey80%</h4>
                    </div>
                    <div className="medical">
                      <img src={DuongThotNot} alt="" />
                      <h4>Đường thốt nốt</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="product-certification">
        <h2>GREEN HEALTH CAM KẾT CHẤT LƯỢNG</h2>
        <div className="hl"></div>
        <div className="certification-group">
          <Row justify="center" gutter={[20, 30]}>
            <Col>
              <div className="certification-text">
                <p>
                  Chúng tôi tự hào mang đến kháng hàng sản phẩm dinh dưỡng đạt
                  chuẩn yêu cầu, đã được cấp:
                </p>
                <ul>
                  <li>Chứng nhận an toàn vệ sinh thực phẩm GMP.</li>
                  <li>Giấy kiểm chứng khoa học về thử nghiệm thuốc.</li>
                  <li>Chứng nhận quốc tế ISO về nhà máy.</li>
                </ul>
              </div>
              <img className="CNYT" src={CNYT} alt="" />
            </Col>
            <Col>
              <img className="CNQT" src={CNQT} alt="" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="product-customer">
        <h2>Khác hàng của chúng tôi</h2>
        <div className="hl"></div>

        <div className="card-group">
          <div className="card">
            <div className="img-card">
              <img src={Customer} alt="" />
              <div className="header">
                <h2 className="name">Nguyễn Quốc Bảo </h2>
                <span className="des">53 tuổi</span>
              </div>
              <div class="card-body">
                <p>
                  Tôi và vợ sử dụng tảo này đã 3 tháng nay, đều mới bị covid
                  khỏi nên sức khỏe đều yếu, cơ thể hay mệt mỏi, có cốc tảo uống
                  hàng ngày thấy nhanh gọn nhẹ, sức khỏe tiến triển hơn nhiều.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-card">
              <img className="Customer2" src={Customer2} alt="" />
              <div className="header">
                <h2 className="name">Đặng Gia Linh</h2>
                <span className="des">27 tuổi</span>
              </div>
              <div class="card-body">
                <p>
                  Mình để 1 hộp tảo Green meal trên văn phòng, chiều uống thay
                  bữa ăn nhẹ, vừa nhanh vừa tiện, tiết kiệm thời gian, cảm thấy
                  ăn uống hấp thu tốt hơn.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-card">
              <img src={Customer} alt="" />
              <div className="header">
                <h2 className="name">Nguyễn Mai Thảo</h2>
                <span className="des">37 tuổi</span>
              </div>
              <div class="card-body">
                <p>
                  Bé nhà mình lười ăn, còi lắm, cho cháu uống tảo này dễ hơn là
                  bắt ăn bữa phụ, sau khi uống được 1 tháng thì thấy bé thèm ăn
                  hẳn, tiêu hóa tốt hơn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-form">
        <div
          className="form-image"
          style={{
            backgroundImage: "url(" + Heart + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="form-content">
          <h2>Lorem ipsum dolor sit<br /> amet, consectetur</h2>

          <Form>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Hãy điền đầy đủ họ và tên" }]}
            >
              <Input placeholder="Họ và tên" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Hãy điền đầy đủ số điện thoại",
                },
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
              rules={[{ required: true, message: "Hãy điền đầy đủ nội dung" }]}
            >
              <Input placeholder="Nội dung" />
            </Form.Item>

            {/* <Form.Item htmlFor="submit"> */}
            <Button>Gửi ngay</Button>
            {/* </Form.Item> */}
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Product;
