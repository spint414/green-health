import "./style.scss";
import React, { useRef } from "react";
import {
  BVQD,
  BVHN,
  BVDA,
  HomeContact,
  Spoon,
  Jar,
  HomeDN,
  HomeDN2,
  HomeDN3,
  GreenMealBox,
  ProductBG,
  ProductBGHalf,
  Bud,
  CNQT,
  CNYT,
  GreenBG2,
  GreenBG3,
  Production,
} from "../../assets/img/index";
import {
  Decoration,
  Left,
  Right,
  GreenMealGold,
  Number1GM,
  Number2GM,
  Number3GM,
} from "../../assets/svg/index";
import { Col, Row, Button, Form, Input } from "antd";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import posts from "../../data/posts";
import { paths } from "../../constant";
import { Link } from "react-router-dom";

const Home = () => {
  const customeSlider1 = useRef();

  const gotoNext1 = () => {
    customeSlider1.current.slickNext();
  };

  const gotoPrev1 = () => {
    customeSlider1.current.slickPrev();
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  const doingubslist = [
    {
      img: HomeDN,
      name: "BS. Nguyễn Mạnh Tuấn",
      info: "Phó Giám đốc chuyên môn, Bệnh viện Đa khoa Hà Nội",
    },
    {
      img: HomeDN2,
      name: "TS. BS. Nguyễn Thị Kim Nga",
      info: "Viện trưởng viện nghiên cứu Bách Khang Niên",
    },
    {
      img: HomeDN3,
      name: "PhD. Nguyẽn Văn Hạnh",
      info: "15 năm hoạt động trong ngành Công Nghệ  Y Tế",
    },
    {
      img: HomeDN,
      name: "BS. Nguyễn Mạnh Tuấn",
      info: "Phó Giám đốc chuyên môn, Bệnh viện Đa khoa Hà Nội",
    },
    {
      img: HomeDN2,
      name: "TS. BS. Nguyễn Thị Kim Nga",
      info: "Viện trưởng viện nghiên cứu Bách Khang Niên",
    },
    {
      img: HomeDN3,
      name: "PhD. Nguyẽn Văn Hạnh",
      info: "15 năm hoạt động trong ngành Công Nghệ  Y Tế",
    },
  ];

  const settingsnew = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    autoplay: false,
    dots: false,
    speed: 500,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    responsive: [
      {
        arrows: false,
        breakpoint: 1700,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 8000,
        },
      },
      {
        arrows: false,
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 8000,
          dots: false,
        },
      },
      {
        arrows: false,
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 8000,
        },
      },
    ],
  };

  return (
    <section className="Home">
      <div className="home-banner">
        <img src={Jar} alt="" />
      </div>
      <div className="home-introduction">
        <div className="container">
          <h2>Giới thiệu chung về Green Health</h2>
          <Decoration />
          <Row>
            <Col xs={24} sm={24} xl={12}>
              <div className="img">
                <img src={Spoon} alt="" />
              </div>
            </Col>
            <Col xs={24} sm={24} xl={12}>
              <div className="introduction-text">
                <p>
                  Với sự thấu hiểu tiềm năng của thảo dược, chúng tôi chuyên
                  nghiên cứu, khai thác và nuôi trồng những loại thảo dược tốt
                  nhất với mục tiêu mang tới cho người dùng những sản phẩm chăm
                  sóc sức khỏe được tạo ra từ tinh hoa dược liệu Việt Nam kết
                  hợp với công nghệ sản xuất đạt chuẩn thế giới. Green health
                  mong muốn mang đến những chế độ dinh dưỡng phù hợp nhất giúp
                  khách hàng chăm sóc sức khỏe ngay khi cơ thể bình thường. để
                  đẩy lùi bệnh tật hết mức có thể.
                </p>
                <div className="button">
                  <Link to={paths.chung_toi}>
                    <Button>Xem thêm &#8594;</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="home-specialist">
        <div className="container">
          <h2>Đội ngũ chuyên gia</h2>
          <Decoration />
          <Row>
            <Col span={2} className="left">
              <div className="icon" onClick={() => gotoPrev1()}>
                <Right />
              </div>
            </Col>
            <Col span={20}>
              <Slider {...settings} ref={customeSlider1}>
                {doingubslist.map((e, i) => (
                  <div className="group" key={i}>
                    <img src={e.img} alt="" />
                    <div className="name">
                      <p>{e.name}</p>
                    </div>
                    <div className="des">
                      <p>{e.info}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
            <Col span={2} className="right">
              <div className="icon" onClick={() => gotoNext1()}>
                <Left />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="home-clean">
        <Row>
          <Col sm={24} md={12}>
            <div className="img">
              <img src={Bud} alt="" />
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div
              className="warp-clean"
              style={{
                backgroundImage: "url(" + GreenBG2 + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="clean-content">
                <Link to={paths.duoc_lieu}>
                  <h2>Vùng dược liệu sạch</h2>
                </Link>
                <p>
                  Hiểu được tầm quan trọng của dược liệu tới hiệu quả và dược
                  tính của mỗi sản phẩm, toàn bộ các sản phẩm của Green Health
                  đều sử dụng nguồn dược liệu được nuôi trồng, thu hái theo
                  những tiêu chuẩn khắt khe nhất.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="home-facility">
        <Row>
          <Col sm={24} md={12}>
            <div
              className="warp-facility"
              style={{
                backgroundImage: "url(" + GreenBG3 + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="facility-content">
                <h2>Dây chuyền hiện đại</h2>
                <p>
                  Green Health ứng dụng các công nghệ điều chế, chiết xuất mới
                  nhất, giúp quá trình sản xuất sản phẩm được đảm bảo về thời
                  gian xử lý cũng như chất lượng đầu ra nhanh chóng, tối ưu.
                  Chúng tôi tự hào và cam kết về chất lượng trao tới tay khách
                  hàng doanh nghiệp cũng như từng cá nhân.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className="img">
              <img src={Production} alt="" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="home-product">
        <h2>Sản phẩm của chúng tôi</h2>
        <div className="hl"></div>

        <div
          className="warp-product"
          style={{
            backgroundImage: "url(" + ProductBG + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Row>
            <Col xs={24} sm={24} xl={12}>
              <div className="img">
                <img src={GreenMealBox} alt="" />
              </div>
            </Col>
            <Col xs={24} sm={24} xl={12}>
              <div
                className="product-text"
                style={{
                  backgroundImage: "url(" + ProductBGHalf + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="warp-product-text">
                  <p className="title">Thực phẩm chức năng</p>
                  <div className="greenmeal-svg">
                    <GreenMealGold />
                  </div>
                  <div className="section">
                    <Number1GM />
                    <div className="text">
                      <p>Thành phần dinh dưỡng cao cấp</p>
                      <p>
                        Được tinh lọc từ tảo biển và các loại dược liệu quý,
                        mang tới hiệu quả vượt trội, an toàn tuyệt đối.
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <Number2GM />
                    <div className="text">
                      <p>Hỗ trợ tăng sức đề kháng</p>
                      <p>
                        Cải thiện sức khỏe, gia tăng đề kháng giúp cơ thể chống
                        lại bệnh tật, gia tăng tốc độ phục hồi sau điều trị.
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <Number3GM />
                    <div className="text">
                      <p>Tăng cường chức năng cơ thể</p>
                      <p>
                        Tăng cường chức năng gan, thận, phổi, đặc biệt là tiêu
                        hóa. Hỗ trợ tích cực tới quá trình trao đổi chất.
                      </p>
                    </div>
                  </div>
                  <Link to={paths.san_pham}>
                    <Button>Xem chi tiết sản phẩm</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="home-certification">
        <h2>Chứng nhận của chúng tôi</h2>
        <div className="hl"></div>
        <div className="certification-group">
          <Row justify="center" gutter={[90, 30]}>
            <Col>
              <img className="CNYT" src={CNYT} alt="" />
            </Col>
            <Col>
              <img className="CNQT" src={CNQT} alt="" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="home-partner">
        <h2>Đối tác của chúng tôi</h2>
        <div className="hl"></div>
        <div className="partner-group">
          <Row justify="center" gutter={[100, 30]}>
            <Col>
              <img className="BVHN" src={BVHN} alt="" />
            </Col>
            <Col>
              <img className="BVQD" src={BVQD} alt="" />
            </Col>
            <Col>
              <img className="BVDA" src={BVDA} alt="" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="home-form">
        <div
          className="form-image"
          style={{
            backgroundImage: "url(" + HomeContact + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="form-content">
          <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>

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

      <div className="home-news">
        <h2>Tin tức</h2>
        <Slider {...settingsnew}>
          {posts.map((x, i) => (
            <div className="group">
              <div key={i} className="img-card">
                <Link className="a" to={`${paths.tin_tuc}/${x.slug}`}>
                  <img className="img" src={x.featureImg} alt="" />
                  <div className="card-body">
                    <p>{x.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Home;
