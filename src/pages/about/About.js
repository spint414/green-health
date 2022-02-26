import "./style.scss";
import {
  AboutBanner,
  People,
  Vip,
  Vip2,
  Vip3,
} from "../../assets/img";

const About = () => {
  return (
    <section className="about">
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${AboutBanner})` }}
      >
        <div className="container">
          <h1>green health</h1>
        </div>
      </div>

      <div className="about-introduce">
        <div className="container">
          <div
            className="img"
            style={{ backgroundImage: `url(${People})` }}
          ></div>
          <p>
            Với sự thấu hiểu tiềm năng của thảo dược, chúng tôi chuyên nghiên
            cứu, khai thác và nuôi trồng những loại thảo dược tốt nhất với mục
            tiêu mang tới cho người dùng những sản phẩm chăm sóc sức khỏe được
            tạo ra từ tinh hoa dược liệu Việt Nam kết hợp với công nghệ sản xuất
            đạt chuẩn thế giới. Green health mong muốn mang đến những chế độ
            dinh dưỡng phù hợp nhất giúp khách hàng chăm sóc sức khỏe ngay khi
            cơ thể bình thường. để hạn chế tối đa khả năng phải đối mặt với bệnh
            tật.
          </p>
        </div>
      </div>

      <div className="about-divider" />

      <div className="about-detail">
        <div className="container">
          <div className="about-vision">
            <h2>Mục tiêu</h2>
            <p>
              Green Health đặt mục tiêu trở thành đơn vị sản xuất dược liệu lớn
              nhất Đông Nam Á vào năm 2030
            </p>
            <br />
            <h2>Tầm nhìn & sứ mệnh</h2>
            <p>
              Green Health luôn hướng tới giá trị cho người dùng, chúng tôi luôn
              cải tiến sản phẩm nhằm mang tới hiệu quả tối ưu nhất với chi phí
              hợp lý nhất để mỗi người dân Việt Nam có thể tiếp cận và sở hữu
              nền tảng sức khỏe tuyệt vời hơn mỗi ngày.
            </p>
          </div>
          <div className="about-team">
            <h2>Đội ngũ</h2>
            <div className="boss">
              <div className="boss-wrap">
                <img src={Vip} alt="" />
                <h3>PhD. Hanh Nguyen</h3>
                <span>Founder - CEO</span>
              </div>
              <div className="boss-wrap">
                <img src={Vip2} alt="" />
                <h3>BS NGUYỄN MẠNH TUẤN</h3>
                <span>Co- Founder</span>
              </div>
              <div className="boss-wrap">
                <img src={Vip3} alt="" />
                <h3>TS.BS. NGUYỄN THỊ KIM NGA</h3>
                <span>Co- Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
