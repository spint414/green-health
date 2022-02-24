import "./style.scss";
import {
  AboutBanner,
  Award,
  Award2,
  Award3,
  People,
  SepHanh,
  SepHoan,
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
            Green Health là dự án khởi nghiệp với thế mạnh là đội ngũ sáng lập bao
            gồm các Tiến Sĩ, Thạc Sĩ tu nghiệp tại Pháp, chuyên nghiên cứu và
            phát triển công nghệ mới áp dụng trong lĩnh vực y tế, sản phẩm y tế
            chất lượng, dễ tiếp cận, phục vụ cộng đồng. Tham gia tư vấn và hỗ
            trợ cùng chúng tôi là nhóm các bác sĩ, chuyên gia trong lĩnh vực Y
            tế ở Việt Nam và Pháp.
            <br />
            <br />
            Chúng tôi hiểu rõ những bất cập mà hệ thống y tế ở Việt nam đang gặp
            phải. Green Health mong muốn đem khả năng của mình góp phần xóa bỏ những
            khuyết điểm đó. Làm chủ công nghệ và hiểu được giá trị to lớn mà
            công nghệ hiện đại có thể mang lại cho hệ thống chăm sóc sức khỏe
            cùng với cộng đồng bác sĩ giỏi, có tâm, có tài và nhiệt huyết.
          </p>
        </div>
      </div>

      <div className="about-divider" />

      <div className="about-detail">
        <div className="container">
          <div className="about-vision">
            <h2>Mục tiêu</h2>
            <p>
              Chúng tôi hướng đến trở thành hệ sinh thái chăm sóc sức khoẻ ứng
              dụng công nghệ tiên tiến lớn nhất Việt Nam.
            </p>
            <br />
            <h2>Tầm nhìn & sứ mệnh</h2>
            <p>
              Green Health hướng đến trở thành hệ sinh thái chăm sóc sức
              khỏe ứng dụng công nghệ tiên tiến lớn nhất Việt Nam.
              <br />
              <br />
              Chúng tôi cam kết mang đến cho cộng đồng nền y tế hiện đại hơn,
              tiện lợi hơn với mức chi tiêu cho hoạt động khám, chữa bệnh thấp
              hơn.
            </p>
          </div>
          <div className="about-team">
            <h2>Đội ngũ</h2>
            <div className="boss">
              <div className="boss-wrap">
                <img src={SepHanh} alt="" />
                <h3>PhD. Hanh Nguyen</h3>
                <span>Founder - CEO</span>
              </div>
              <div className="boss-wrap">
                <img src={SepHoan} alt="" />
                <h3>Msc. Hoan Dinh</h3>
                <span>Co-Founder - CTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-divider" />

      <div className="about-award">
        <div className="container">
          <h2>Giải thưởng</h2>
          <div className="img-wrap">
            <img src={Award} alt="" />
            <img src={Award2} alt="" />
            <img src={Award3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
