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
  GreenBG,
  GreenBG2,
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
        breakpoint: 640,
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
      name: "BS. Nguy???n M???nh Tu???n",
      info: "Ph?? Gi??m ?????c chuy??n m??n, B???nh vi???n ??a khoa H?? N???i",
    },
    {
      img: HomeDN2,
      name: "TS. BS. Nguy???n Th??? Kim Nga",
      info: "Vi???n tr?????ng vi???n nghi??n c???u B??ch Khang Ni??n",
    },
    {
      img: HomeDN3,
      name: "PhD. Nguy???n V??n H???nh",
      info: "15 n??m ho???t ?????ng trong ng??nh C??ng Ngh???  Y T???",
    },
    {
      img: HomeDN,
      name: "BS. Nguy???n M???nh Tu???n",
      info: "Ph?? Gi??m ?????c chuy??n m??n, B???nh vi???n ??a khoa H?? N???i",
    },
    {
      img: HomeDN2,
      name: "TS. BS. Nguy???n Th??? Kim Nga",
      info: "Vi???n tr?????ng vi???n nghi??n c???u B??ch Khang Ni??n",
    },
    {
      img: HomeDN3,
      name: "PhD. Nguy???n V??n H???nh",
      info: "15 n??m ho???t ?????ng trong ng??nh C??ng Ngh???  Y T???",
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
      {/* <div className="home-banner">
        <img src={Jar} alt="" />
      </div> */}
      <div
        className="home-banner"
        style={{
          backgroundImage: "url(" + Jar + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          height: "720px",
        }}
      ></div>
      <div className="home-introduction">
        <div className="container">
          <h2>Gi???i thi???u chung v??? Green Health</h2>
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
                  V???i s??? th???u hi???u ti???m n??ng c???a th???o d?????c, ch??ng t??i chuy??n
                  nghi??n c???u, khai th??c v?? nu??i tr???ng nh???ng lo???i th???o d?????c t???t
                  nh???t v???i m???c ti??u mang t???i cho ng?????i d??ng nh???ng s???n ph???m ch??m
                  s??c s???c kh???e ???????c t???o ra t??? tinh hoa d?????c li???u Vi???t Nam k???t
                  h???p v???i c??ng ngh??? s???n xu???t ?????t chu???n th??? gi???i. Green health
                  mong mu???n mang ?????n nh???ng ch??? ????? dinh d?????ng ph?? h???p nh???t gi??p
                  kh??ch h??ng ch??m s??c s???c kh???e ngay khi c?? th??? b??nh th?????ng ?????
                  ?????y l??i b???nh t???t h???t m???c c?? th???.
                </p>
                <div className="button">
                  <Link to={paths.chung_toi}>
                    <Button>Xem th??m &#8594;</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="home-specialist">
        <div className="container">
          <h2>?????i ng?? chuy??n gia</h2>
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
                backgroundImage: "url(" + GreenBG + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="clean-content">
                <Link to={paths.duoc_lieu}>
                  <h2>V??ng d?????c li???u s???ch</h2>
                </Link>
                <p>
                  Hi???u ???????c t???m quan tr???ng c???a d?????c li???u t???i hi???u qu??? v?? d?????c
                  t??nh c???a m???i s???n ph???m, to??n b??? c??c s???n ph???m c???a Green Health
                  ?????u s??? d???ng ngu???n d?????c li???u ???????c nu??i tr???ng, thu h??i theo
                  nh???ng ti??u chu???n kh???t khe nh???t.
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
                backgroundImage: "url(" + GreenBG2 + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="facility-content">
                <h2>D??y chuy???n hi???n ?????i</h2>
                <p>
                  Green Health ???ng d???ng c??c c??ng ngh??? ??i???u ch???, chi???t xu???t m???i
                  nh???t, gi??p qu?? tr??nh s???n xu???t s???n ph???m ???????c ?????m b???o v??? th???i
                  gian x??? l?? c??ng nh?? ch???t l?????ng ?????u ra nhanh ch??ng, t???i ??u.
                  Ch??ng t??i t??? h??o v?? cam k???t v??? ch???t l?????ng trao t???i tay kh??ch
                  h??ng doanh nghi???p c??ng nh?? t???ng c?? nh??n.
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
        <h2>S???n ph???m c???a ch??ng t??i</h2>
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
                  <p className="title">Th???c ph???m ch???c n??ng</p>
                  <div className="greenmeal-svg">
                    <GreenMealGold />
                  </div>
                  <div className="section">
                    <Number1GM />
                    <div className="text">
                      <p>Th??nh ph???n dinh d?????ng cao c???p</p>
                      <p>
                        ???????c tinh l???c t??? t???o bi???n v?? c??c lo???i d?????c li???u qu??,
                        mang t???i hi???u qu??? v?????t tr???i, an to??n tuy???t ?????i.
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <Number2GM />
                    <div className="text">
                      <p>H??? tr??? t??ng s???c ????? kh??ng</p>
                      <p>
                        C???i thi???n s???c kh???e, gia t??ng ????? kh??ng gi??p c?? th??? ch???ng
                        l???i b???nh t???t, gia t??ng t???c ????? ph???c h???i sau ??i???u tr???.
                      </p>
                    </div>
                  </div>
                  <div className="section">
                    <Number3GM />
                    <div className="text">
                      <p>T??ng c?????ng ch???c n??ng c?? th???</p>
                      <p>
                        T??ng c?????ng ch???c n??ng gan, th???n, ph???i, ?????c bi???t l?? ti??u
                        h??a. H??? tr??? t??ch c???c t???i qu?? tr??nh trao ?????i ch???t.
                      </p>
                    </div>
                  </div>
                  <Link to={paths.san_pham}>
                    <Button>Xem chi ti???t s???n ph???m</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="home-certification">
        <h2>Ch???ng nh???n c???a ch??ng t??i</h2>
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
        <h2>?????i t??c c???a ch??ng t??i</h2>
        <div className="hl"></div>
        <div className="partner-group">
          <Row justify="center">
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
          <h2>LI??N H??? V???I CH??NG T??I</h2>

          <Form>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "H??y ??i???n ?????y ????? h??? v?? t??n" }]}
            >
              <Input placeholder="H??? v?? t??n" />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "H??y ??i???n ?????y ????? s??? ??i???n tho???i",
                },
              ]}
            >
              <Input placeholder="S??? ??i???n tho???i" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "H??y ??i???n ?????y ????? email" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="content"
              rules={[{ required: true, message: "H??y ??i???n ?????y ????? n???i dung" }]}
            >
              <Input placeholder="N???i dung" />
            </Form.Item>

            {/* <Form.Item htmlFor="submit"> */}
            <Button>G???i ngay</Button>
            {/* </Form.Item> */}
          </Form>
        </div>
      </div>

      <div className="home-news">
        <h2>Tin t???c</h2>
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
