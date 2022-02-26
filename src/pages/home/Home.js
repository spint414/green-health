import "./style.scss";
import React, { useRef } from "react";
import {
  LogoAV,
  LogoLVFH,
  LogoMD,
  LogoVD,
  Apple,
  Spoon,
  Jar,
  HomeDN,
  HomeDN2,
  HomeDN3,
  GreenMealBox,
  ProductBG,
  ProductBGHalf,
  // Bud,
  // CNQT,
  // CNYT,
  // GreenBG,
  // GreenBG2,
  // GreenBG3,
  // Production
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
      name: "TS. Nguyễn Văn P",
      info: "Lorem ipsum dolor sit áđâsđâsdamet, consectetur adipiscing elit ut aliquam",
    },
    {
      img: HomeDN2,
      name: "TS. Nguyễn Văn P",
      info: "Lorem ipsum dolor sit áđâsđâsdamet, consectetur adipiscing elit ut aliquam",
    },
    {
      img: HomeDN3,
      name: "TS. Nguyễn Văn P",
      info: "Lorem ipsum dolor sit áđâsđâsdamet, consectetur adipiscing elit ut aliquam",
    },
    {
      img: HomeDN,
      name: "TS. Nguyễn Văn P",
      info: "Lorem ipsum dolor sit áđâsđâsdamet, consectetur adipiscing elit ut aliquam",
    },
    {
      img: HomeDN2,
      name: "TS. Nguyễn Văn P",
      info: "Lorem ipsum dolor sit áđâsđâsdamet, consectetur adipiscing elit ut aliquam",
    },
    {
      img: HomeDN3,
      name: "TS. Nguyễn Văn P",
      info: "Lorem ipsum dolor sit áđâsđâsdamet, consectetur adipiscing elit ut aliquam",
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
                <a className="buttona" href="!#">
                  <Button>Xem thêm &#8594;</Button>
                </a>
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
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <Number2GM />
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <Number3GM />
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus
                      </p>
                    </div>
                  </div>
                  <a className="buttona" href="!#">
                    <Button>Xem chi tiết sản phẩm</Button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="home-partner">
        <div className="container">
          <h2>Đối tác của chúng tôi</h2>
          <div className="hl"></div>
          <div className="partner-group">
            <Row gutter={[40, 30]}>
              <Col>
                <img className="logoAV" src={LogoAV} alt="" />
              </Col>
              <Col>
                <img className="logoVD" src={LogoVD} alt="" />
              </Col>
              <Col>
                <img className="logoLVFH" src={LogoLVFH} alt="" />
              </Col>
              <Col>
                <img className="logoMD" src={LogoMD} alt="" />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="home-form">
        <div
          className="form-image"
          style={{
            backgroundImage: "url(" + Apple + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="form-content">
          <h2>
            LIÊN HỆ
            <br className="br" />
            VỚI CHÚNG TÔI
            <br className="br" />
          </h2>

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

            <Form.Item htmlFor="submit">
              <Button>Gửi ngay</Button>
            </Form.Item>
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
