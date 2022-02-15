import "./style.scss";
import React, { useRef } from "react";
import {
  LogoAV,
  LogoLVFH,
  LogoMD,
  LogoVD,
  PurpleFlower,
  Spoon,
  Jar,
  BannerGreenmeal,
  HomeBS,
} from "../../assets/img/index";
import { Decoration, Left, Right } from "../../assets/svg/index";
import { Col, Row, Button } from "antd";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

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
      img: HomeBS,
    },
    {
      img: HomeBS,
    },
    {
      img: HomeBS,
    },
    {
      img: HomeBS,
    },
    {
      img: HomeBS,
    },
    {
      img: HomeBS,
    },
  ];

  return (
    <section className="Home">
      <div className="banner">
        <img src={Jar} alt="" />
      </div>
      <div className="introduction">
        <div className="container">
          <h2>Giới thiệu chung về Green Health</h2>
          <Decoration />
          <Row>
            <Col xs={24} sm={24} xl={12}>
              <img src={Spoon} alt="" />
            </Col>
            <Col xs={24} sm={24} xl={12}>
              <div className="introduction-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
                  luctus ut etiam sit mi tincidunt nisl massa. Ultricies
                  vestibulum, ultricies id nunc duis neque. Lectus maecenas sit
                  vel sit. Nisl in lobortis nibh neque at a imperdiet. Lorem id
                  sit amet in mattis feugiat feugiat. In semper vulputate rutrum
                  vitae tortor massa id. Laoreet tellus mauris gravida maecenas
                  nisl vestibulum auctor ut mauris. Amet mauris nec, volutpat
                  morbi. Sed hendrerit nunc tincidunt auctor urna fermentum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
                  luctus ut etiam sit mi tincidunt nisl massa. Ultricies
                  vestibulum, ultricies id nunc duis neque.
                </p>
                <a className="buttona" href="!#">
                  <Button>Xem thêm &#8594;</Button>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container specialist">
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
                  <div className="des">
                    <div className="r1">
                      <p className="c1">Tên bác sĩ:</p>&nbsp;
                      <p className="c2">Nguyễn Thu M</p>
                    </div>
                    <div className="r1">
                      <p className="c1">Chuyên khoa:</p>&nbsp;
                      <p className="c2">Nhi khoa</p>
                    </div>
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

      <div
        className="green-meal"
        style={{
          backgroundImage: "url(" + BannerGreenmeal + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="warp-green-meal">
            <p>thực phẩm chức năng</p>
            <h2>Green Meal</h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
              luctus ut etiam sit mi tincidunt nisl massa. Ultricies vestibulum,
              ultricies id nunc duis neque. Lectus maecenas sit vel sit. Nisl in
              lobortis nibh neque at a imperdiet. Lorem id sit amet in mattis
              feugiat feugiat. In semper vulputate rutrum vitae tortor massa id.
            </p>
            <a className="buttona" href="!#">
              <Button>Đặt hàng ngay</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="partner">
        <div className="container">
          <h2>Đối tác của chúng tôi</h2>
          <div className="partner-group">
            <img className="logoAV" src={LogoAV} alt="" />
            <img className="logoVD" src={LogoVD} alt="" />
            <img className="logoLVFH" src={LogoLVFH} alt="" />
            <img className="logoMD" src={LogoMD} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
