import "./style.scss";
import { TwoPerson, ProductGM } from "../../assets/img/index";

const Product = () => {
  return (
    <div className="container1">
      <div className="inner">
        <h1>GREEN MEAL</h1>
        <p className="center">
          <i>
            Là tinh hoa được đúc kết từ kho tàng kiến thức y khoa, Green Meal tự
            hào mang tới bữa ăn bổ sung dinh dưỡng cao cấp dành cho sức khỏe
            người Việt.
          </i>
        </p>
        <br />
        <div className="image">
          <img src={ProductGM} alt="" />
        </div>
        <br />
        <h2>Sản phẩm đặc biệt phù hợp cho:</h2>
        <ol>
          <li>Người suy dinh dưỡng, sức đề kháng kém</li>
          <br />
          <li>Người vừa trải qua chấn thương, phẫu thuật</li>
          <br />
          <li>Trẻ biếng ăn, còi xương</li>
        </ol>
        <h2>Hiệu quả nổi bật: </h2>
        <ul className="dot">
          <li>
            <p>Nâng cao khả năng miễn dịch của cơ thể, hạn chế bệnh tật.</p>
          </li>
          <br />
          <li>
            <p>
              Tăng cường chức năng gan, thận, phổi, đặc biệt là đường tiêu hóa.
            </p>
          </li>
          <br />
          <li>
            <p>Tăng cường chuyển hóa các chất.</p>
          </li>
          <br />
          <li>
            <p>Cải thiện tuần hoàn máu.</p>
          </li>
          <br />
          <li>
            <p>Chống oxy hóa, trẻ hóa tế bào.</p>
          </li>
          <br />
          <li>
            <p>Cung cấp ủ năng lượng và giàu chất dinh dưỡng</p>
          </li>
          <br />
          <li>
            <p>Tăng cường hệ miễn dịch</p>
          </li>
          <br />
          <li>
            <p>Hoạt huyết, tăng cường chức năng cơ thể.</p>
          </li>
        </ul>
        <br />
        <div className="image">
          <img src={TwoPerson} alt="" />
        </div>
        <br />
        <h2>Thành phần chính:</h2>
        <p>- Tảo Arthrospira Platensis</p>
        <br />
        <p>- BioGlena (Beta 1-3 Glucan 55%)</p>
        <br />
        <h3>Các loại dược liệu quý</h3>
        <p>
          Cao khô Linh chi, Cao khô Đinh lăng, Cao khô Đông trùng hạ thảo, Cao
          khô Đằng sâm bắc, Cao khô Bạch truật, Cao khô Đương quy.
        </p>
        <br />
        <h3>Bột Mix 20 loại hạt</h3>
        <p>
          Hạt Cacao, Hạt Ỷ dĩ, Hạt Sachi, Hạt Macca, Hạt Óc chó, Hạt Hạnh nhân,
          Hạt Chia, Hạt Sen, Hạt Đậu Hà lan, Hạt Đậu đen, Hạt Đậu xanh, Hạt Đậu
          đỏ, Hạt Đậu ngực, Hạt Đậu trắng, Hạt Đậu nành, Hạt Đậu phộng, Hạt Vừng
          đen, Hạt Mít, Hạt Thông.
        </p>
        <br />
        <p>- Sữa bột nguyên kem</p>
        <br />
        <p>- Đạm Whey 80%</p>
        <br />
        <p>- Đường thốt nốt</p>
        <br />
        <p>
          Liên hệ Hotline <b>0968876850</b> để được hỗ trợ giải đáp thắc mắc về sản
          phẩm và đặt hàng nhanh chóng nhất.
        </p>
      </div>
    </div>
  );
};

export default Product;
