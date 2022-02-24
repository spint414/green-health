import {
  DongTrungHaThao,
  DongTrungHaThao2,
  DongTrungHaThao3,
  CaoKhoLinhChi,
  CaoDinhLang,
  BachThuat,
  BachThuat2,
  DangSam
} from "./img";

const drugs = [
  {
    slug: `loi-ich-cua-cao-kho-linh-chi`,
    title: `Lợi ích của Cao Khô Linh Chi`,
    featureImg: CaoKhoLinhChi,
    excerpt: `Theo sách Thần nông bản thảo và Bản thảo cương mục: "Thanh chi tính bình
    không độc, chủ trị sáng mắt, bổ can khí, an thần, tăng trí nhớ,...".
    `,
    content: `
    <div class="image">
        <img src="${CaoKhoLinhChi}" alt="">
    </div>
    <br>
    <h2>Tác dụng :</h2>
    <p>
      Theo sách Thần nông bản thảo và Bản thảo cương mục: "Thanh chi tính bình
      không độc, chủ trị sáng mắt, bổ can khí, an thần, tăng trí nhớ, chữa bệnh
      thuộc huyết và thần kinh tim. Hoàng chi vị ngọt, tính bình, không độc, làm
      mạnh hệ thống miễn dịch. Hắc chi vị mặn, tính bình không độc, chủ trị bí
      tiểu tiện, sỏi thận, bệnh ở cơ quan bài tiết. Bạch chi vị cay, tính bình,
      chủ trị hen, ích phế khí. Tử chi vị ngọt, tính ôn, không độc, chủ trị đau
      nhức khớp xương, gân cốt".
    </p>
    <br />
    <p>
      Theo sách Trung dược học: "Linh chi có tác dụng dưỡng tâm an thần, chỉ
      khái bình suyễn, bổ khí dưỡng huyết, chủ trị các chứng tâm thần bất an,
      khái thấu háo suyễn, khí huyết bất túc, tỳ vị hư nhược".
    </p>
    <br />
    <h2>Chỉ định :</h2>
    <p>
      Thuốc có tác dụng an thần, làm giảm hưng phấn của thần kinh trung ương.
      Cồn Linh chi có tác dụng chống co giật do điện, giảm đau.
    </p>
    <br />
    <p>
      Có tác dụng chỉ khái hóa đàm, bình suyễn nhưng theo báo cáo kết quả thực
      nghiệm có khác nhau.
    </p>
    <br />
    <p>
      Có tác dụng bảo vệ gan, giải độc, hạ đường huyết và chống tác dụng của
      chất phóng xạ. Còn có tác dụng bảo vệ dạ dày loét thực nghiệm.
    </p>
    <br />
    <p>
      Có tác dụng cường tim, hạ huyết áp, nâng cao ngưỡng oxy, giúp cơ tim chịu
      đựng được trạng thái thiếu máu, hạ lipid huyết, chống xơ cứng động mạch.
    </p>
    <br />
    <p>
      Lượng polysaccarit cao có trong Linh chi, tăng cường sự miễn dịch của cơ
      thể, có tác dụng chống tế bào ung thư.
    </p>
    <br />
    <p>
      Germanium giúp khí huyết lưu thông, các tế bào hấp thu oxy tốt hơn. Acid
      ganoderic có tác dụng chống dị ứng và chống viêm.
    </p>
    <br />
    <h2>Liều lượng - cách dùng:</h2>
    <p>
      Liều thường dùng: 5 - 15g, thuốc bột mịn mỗi lần 1,5 - 3g, thuốc viên,
      viên nang ( Thuốc Trung quốc mỗi nang có 300 - 350mg đông khô nấm Linh
      chi), liều dùng 1 - 2 nang một ngày. Cũng có dạng thuốc tiêm bắp, dạng trà
      Nhân sâm phối hợp Linh chi.
    </p>
    <br>
    <span> Nguồn: thuocbietduoc.com.vn</span>
    `,
  },
  {
    slug: `loi-ich-cua-cao-kho-linh-chi`,
    title: `Lợi ích của Cao Khô Linh Chi`,
    featureImg: CaoKhoLinhChi,
    excerpt: `Theo sách Thần nông bản thảo và Bản thảo cương mục: "Thanh chi tính bình
    không độc, chủ trị sáng mắt, bổ can khí, an thần, tăng trí nhớ,...".
    `,
    content: `
    <div class="image">
        <img src={CaoKhoLinhChi} alt="">
    </div>
    <br>
    <h2>Tác dụng :</h2>
    <p>
      Theo sách Thần nông bản thảo và Bản thảo cương mục: "Thanh chi tính bình
      không độc, chủ trị sáng mắt, bổ can khí, an thần, tăng trí nhớ, chữa bệnh
      thuộc huyết và thần kinh tim. Hoàng chi vị ngọt, tính bình, không độc, làm
      mạnh hệ thống miễn dịch. Hắc chi vị mặn, tính bình không độc, chủ trị bí
      tiểu tiện, sỏi thận, bệnh ở cơ quan bài tiết. Bạch chi vị cay, tính bình,
      chủ trị hen, ích phế khí. Tử chi vị ngọt, tính ôn, không độc, chủ trị đau
      nhức khớp xương, gân cốt".
    </p>
    <br />
    <p>
      Theo sách Trung dược học: "Linh chi có tác dụng dưỡng tâm an thần, chỉ
      khái bình suyễn, bổ khí dưỡng huyết, chủ trị các chứng tâm thần bất an,
      khái thấu háo suyễn, khí huyết bất túc, tỳ vị hư nhược".
    </p>
    <br />
    <h2>Chỉ định :</h2>
    <p>
      Thuốc có tác dụng an thần, làm giảm hưng phấn của thần kinh trung ương.
      Cồn Linh chi có tác dụng chống co giật do điện, giảm đau.
    </p>
    <br />
    <p>
      Có tác dụng chỉ khái hóa đàm, bình suyễn nhưng theo báo cáo kết quả thực
      nghiệm có khác nhau.
    </p>
    <br />
    <p>
      Có tác dụng bảo vệ gan, giải độc, hạ đường huyết và chống tác dụng của
      chất phóng xạ. Còn có tác dụng bảo vệ dạ dày loét thực nghiệm.
    </p>
    <br />
    <p>
      Có tác dụng cường tim, hạ huyết áp, nâng cao ngưỡng oxy, giúp cơ tim chịu
      đựng được trạng thái thiếu máu, hạ lipid huyết, chống xơ cứng động mạch.
    </p>
    <br />
    <p>
      Lượng polysaccarit cao có trong Linh chi, tăng cường sự miễn dịch của cơ
      thể, có tác dụng chống tế bào ung thư.
    </p>
    <br />
    <p>
      Germanium giúp khí huyết lưu thông, các tế bào hấp thu oxy tốt hơn. Acid
      ganoderic có tác dụng chống dị ứng và chống viêm.
    </p>
    <br />
    <h2>Liều lượng - cách dùng:</h2>
    <p>
      Liều thường dùng: 5 - 15g, thuốc bột mịn mỗi lần 1,5 - 3g, thuốc viên,
      viên nang ( Thuốc Trung quốc mỗi nang có 300 - 350mg đông khô nấm Linh
      chi), liều dùng 1 - 2 nang một ngày. Cũng có dạng thuốc tiêm bắp, dạng trà
      Nhân sâm phối hợp Linh chi.
    </p>
    <br>
    <span> Nguồn: thuocbietduoc.com.vn</span>
    `,
  },
  {
    slug: `cong-dung-cua-bach-truat`,
    title: `Công dụng của Bạch Truật`,
    featureImg: BachThuat,
    excerpt: `Bạch truật tên khoa học là Atractylodes macrocephala Koidz. Đây là loại cây thảo sống lâu năm...`,
    content: `
    <h2>1. Bạch truật là gì?</h2>
    <p>
      Bạch truật tên khoa học là <i>Atractylodes macrocephala</i> Koidz. Đây là
      loại cây thảo sống lâu năm, được dùng làm thuốc trong hệ thống y học cổ
      truyền của nhiều quốc gia nhất là khu vực Đông Á. Vị thuốc bạch truật là
      phần rễ khô của cây bạch truật.
    </p>
    <br />
    <p>
      Vị thuốc bạch truật có màu trắng ngà, chắc, thơm nồng. Bạch truật có vị
      ngọt đắng, hơi cay, tính ôn.
    </p>
    <br />
    <div class="image">
      <img src="${BachThuat}" alt="" />
    </div>
    <br />
    <p>Có 2 loại:</p>
    <br />
    <ul>
      <li><p>Vân đầu truật: củ béo to, có dầu</p></li>
      <br />
      <li>
        <p>
          Cẩu đầu truật: củ gầy, hơi khô, trắng, dược tính mạnh hơn vân truật.
        </p>
      </li>
    </ul>
    <br />
    <p>
      Các nhà khoa học đã tìm ra hơn 79 hợp chất được phân lập từ bạch truật bao
      gồm: sesquiterpenoids, triterpenoids, polyacetylenes, coumarin,
      phenylpropanoids, flavonoid, steroid, benzoquinones, polysaccharid…
    </p>
    <br />
    <h2>2. Bạch truật có tác dụng gì?</h2>
    <p>Trong y học cổ truyền bạch truật có tác dụng:</p>
    <br />
    <ul>
      <li><p>Bổ tỳ, táo thấp</p></li>
      <br />
      <li><p>Lợi tiểu tiện, sinh tân dịch</p></li>
      <br />
      <li><p>Chữa tiêu chảy</p></li>
      <br />
      <li><p>Tiêu thủy thũng</p></li>
      <br />
      <li><p>An thai</p></li>
      <br />
      <li><p>Chữa chứng tê bì</p></li>
      <br />
      <li><p>Chữa các chứng liên quan đến mồ hôi</p></li>
    </ul>
    <br />
    <p>
      Gần đây nhiều nghiên cứu khoa học đã chứng minh những công dụng tuyệt vời
      của bạch truật.
    </p>
    <br />
    <p>
      Năm 2018, một nghiên cứu của Đại học y khoa Chiết giang đăng trên Tạp chí
      Ethnopharmacology đã phát hiện
    </p>
    <br />
    <ul>
      <li>
        <p>
          Thuốc được dùng cho các trường hợp mệt mỏi, chán ăn, nôn mửa, tiêu
          chảy, hay ra mồ hôi trộm ở người suy nhược. Bạch truật đôi khi được
          dùng trong thời kỳ mang thai cùng với các loại thảo mộc khác để giảm
          bớt chứng ốm nghén.
        </p>
      </li>
      <br />
      <li>
        <p>
          Chiết xuất thô và các hợp chất tinh khiết của bạch truật được sử dụng
          để điều trị suy giảm chức năng đường tiêu hóa, ung thư, viêm khớp,
          loãng xương, suy nhược lách, chuyển động bất thường của thai nhi, bệnh
          Alzheimer, và béo phì.
        </p>
      </li>
      <br />
      <li>
        <p>
          Các chất chiết xuất này có các tác dụng dược lý khác nhau, bao gồm
          hoạt động chống khối u, hoạt động chống viêm, hoạt động chống lão hóa,
          hoạt động chống oxy hóa, hoạt động chống loãng xương, hoạt động bảo vệ
          thần kinh và hoạt động điều hòa miễn dịch, cũng như cải thiện chức
          năng tiêu hóa và điều hòa hormon tuyến sinh dục.
        </p>
      </li>
    </ul>
    <br />
    <h3>2.1 Cải thiện chức năng tiêu hóa</h3>
    <p>Nghiên cứu của Đại học Kyung Hee 2018 tái khẳng định</p>
    <br />
    <ul>
      <li>
        <p>
          Bạch truật đã được sử dụng để điều trị các khiếm khuyết chức năng
          trong hệ tiêu hóa như chán ăn, chướng bụng và tiêu chảy.
        </p>
      </li>
      <br />
      <li>
        <p>
          Theo y học cổ truyền Trung Quốc, bạch truật kiện tỳ (tăng cường chức
          năng cho lách) bằng cách giải quyết tình trạng lưu giữ bất thường thức
          ăn trong đường tiêu hóa.
        </p>
      </li>
      <br />
      <li>
        <p>
          Các hoạt chất trong dịch chiết bạch truật tăng cường biệt hóa bạch cầu
          đơn nhân do thioglycollate trong phúc mạc và ức chế nồng độ TNF- α và
          IL-6 do LPS gây ra trong huyết thanh do vậy có tác dụng chống viêm
          đường tiêu hóa rõ rệt.
        </p>
      </li>
    </ul>
    <br />
    <h3>2.2 Tác dụng chống viêm, kháng virus, chống lại khối u</h3>
    <p>
      <i>Bạch truật</i> đã được sử dụng từ lâu như một loại thuốc kiện tỳ, trừ
      thấp và long đờm trong các bài thuốc y học cổ truyền.
    </p>
    <br />
    <p>
      Nghiên cứu của Đại học Y học cổ truyền Thượng Hải cho thấy Atractylone là
      thành phần chính của bạch truật có dược lực học thể hiện hoạt động
    </p>
    <br />
    <ul>
      <li>
        <p>Chống ung thư hiệu quả hơn trong tế bào HepG2, MCG803 và HCT-116</p>
      </li>
      <br />
      <li><p>Tác dụng kháng vi-rút đơn giản đối với vi-rút H3N2</p></li>
      <br />
      <li>
        <p>
          Hoạt động chống viêm bằng cách ức chế sản xuất nitric oxide (NO) do
          lipopolysaccharide (LPS) tạo ra trong tế bào ANA-1.
        </p>
      </li>
    </ul>
    <br />
    <p>
      Kết quả nghiên cứu hoạt động chống khối u cho thấy bạch truật hoạt động
      tốt hơn trong các trường hợp ung thư dạ dày, ung thư ruột và ung thư gan.
    </p>
    <br />
    <div class="image">
      <img src="${BachThuat2}" alt="" />
    </div>
    <br />
    <h3>2.3 An thai</h3>
    <p>
      Theo y học cổ truyền bạch truật có tác dụng an thai. Bài thuốc Lục vị cầm
      truật (Lục vị gia hoàng cầm, bạch truật) là bài thuốc đầu tay trong y học
      cổ truyền dùng để an thai nhất là trong các trường hợp phụ nữ mang thai bị
      nhiệt
    </p>
    <br />
    <p>Mới đây</p>
    <br />
    <ul>
      <li><p>Đại học Y khoa Hắc Long Giang và Đại học Toho – NB</p></li>
      <br />
      <li><p>Trường khoa học đời sống Quảng Châu</p></li>
    </ul>
    <br />
    <p>
      đều đã nghiên cứu và kết luận thành phần dầu dễ bay hơi của bạch truật có
      chứa atractylone có tác dụng ức chế chuyển động tự phát của tử cung, làm
      giảm lực co bóp của tử cung từ đó ức chế chuyển dạ sớm, hạn chế sinh non.
    </p>
    <br />
    <p>
      Ngoài ra bạch truật còn chứa inulin – một hoạt chất mới dùng trong điều
      trị chứng táo bón nhất. Táo bón là vấn đề thường gặp ở phụ nữ và cũng là
      nguyên nhân khá phổ biến dẫn đến sinh non ở những tháng cuối thai kỳ.
    </p>
    <br />
    <h3>2.4 Tác dụng an thần</h3>
    <p>
      Y học cổ truyền quan niệm một hệ tiêu hóa khỏe mạnh là bí quyết để có giấc
      ngủ chất lượng.
    </p>
    <br />
    <p>
      Đại học Vienna – Áo đã nghiên cứu về tác dụng an thần của bạch truật, kết
      quả đăng trên tạp chí quốc tế về sinh học thần kinh. Các nhà khoa học phát
      hiện thành phần hóa học chính Bạch truật atractylenolide II và III có khả
      năng điều biến tích cực đối với dòng clorua do GABA gây ra. Kết quả này
      cho thấy Bạch truật có thể là một loại thảo mộc hiệu quả để sử dụng lâm
      sàng như một loại thuốc an thần và thôi miên.
    </p>
    <br />
    <h3>2.5 Bạch truật trị nám, bạch truật làm trắng da</h3>
    <p>
      Trên thị trường chăm sóc da hiện nay, có hai loại chính để làm trắng da từ
      góc độ đặc tính của các chất phụ gia: vitamin C hoặc các dẫn xuất của nó
      và arbutin; hoặc thành phần thảo dược thiên nhiên. Về cơ bản, cơ chế hoạt
      động của các chất phụ gia này là ức chế hoạt động của tyrosinase và / hoặc
      sự phát triển của tế bào hắc tố để đạt được hiệu quả làm trắng da. Thống
      kê về các thành phần thảo dược có trong các sản phẩm làm trắng da cho thấy
      có hơn 20 loại được sử dụng thường xuyên nhất trong đó có Bạch truật.
    </p>
    <br />
    <p>
      Trong phần lớn các công thức làm trắng da thì bạch truật đóng vai trò là
      “vua”, tức là đóng vai trò quan trọng nhất trong công thức và chịu trách
      nhiệm điều trị làn da xỉn màu hoặc các mảng tăng sắc tố.
    </p>
    <br />
    <p>
      Trong một nghiên cứu về các loại thảo dược Châu Á có tác dụng làm trắng da
      của Viện dược liệu Trung Quốc có trích dẫn thông tin từ cuốn sách Lý
      thuyết về bản chất y học, ghi lại rằng phần thân rễ của cây Bạch truật có
      thể cải thiện làn da sẫm màu.
    </p>
    <br />
    <h2>3. Lưu ý khi sử dụng bạch truật</h2>
    <p>
      Bạch truật có nhiều cách bào chế. Trước khi dùng bạch truật có thể chế
      nhiều cách để tăng tính có lợi:
    </p>
    <br />
    <ul>
      <li><p>Sao với cám để bổ tỳ</p></li>
      <br />
      <li><p>Tẩm sữa người rồi sao để tư âm</p></li>
      <br />
      <li><p>Trộn với đất thổ rồi sao để chỉ tả chữa tiêu chảy</p></li>
      <br />
    </ul>
    <br />
    <p>Những người không nên dùng bạch truật</p>
    <br />
    <ul>
      <li><p>Hen suyễn</p></li>
      <br />
      <li><p>Âm hư táo khát: táo bón, miệng khô họng khát</p></li>
      <br />
      <li><p>Tiểu dắt</p></li>
      <br />
      <li><p>Cơ thể mọc mụn mủ</p></li>
      <br />
      <li><p>Viêm ruột cấp do nhiễm trùng</p></li>
    </ul>
    <br />
    <p>
      Để sử dụng bạch truật an toàn và hiệu quả, trước khi sử dụng bạn nên tham
      khảo ý kiến của bác sĩ chuyên khoa.
    </p>
    <br />
    <span> Nguồn: thaythuocvietnam.vn </span>
    `,
  },
  {
    slug: `cong-dung-cua-cao-dinh-lang`,
    title: `Công dụng của Cao Đinh Lăng`,
    featureImg: CaoDinhLang,
    excerpt: `Chiết xuất cao dược liệu cao đinh lăng là dược liệu được bào chế từ rễ hoặc củ của cây đinh lăng. Đinh lăng còn gọi là cây gỏi cá...`,
    content: `
    <h2>Cao đinh lăng là gì?</h2>
    <p>
      Chiết xuất cao dược liệu
      <a href="http://novaco.vn/cao-dinh-lang-s87.html">cao đinh lăng</a> là
      dược liệu được bào chế từ rễ hoặc củ của cây đinh lăng. Đinh lăng còn gọi
      là cây gỏi cá (vì nhân dân thường lấy lá để ăn gỏi cá, nhưng tên đinh lăng
      phổ biến hơn) là một loại cây nhỏ, thân nhẵn, không có gai, thường cao 0,8
      – 1,5m. Lá kép 3 lần sẻ lông chim dài 20 – 40cm, không có lá kèm rõ. Lá
      chét có cuống gầy dài 3 -10mm, phiến lá chét có răng cưa không đều, lá có
      mùi thơm. Cụm hoa hình chùy ngắn 7 – 18mm gồm nhiều tán, mang nhiều hoa
      nhỏ. Tràng 5, nhị 5 với chỉ nhị gầy, bầu hạ 2 ngăn có dìa trắng nhạt. Quả
      dẹt dài 3 – 4mm, dày 1mm có vòi tồn tại.
    </p>
    <br />
    <p>
      Đinh lăng là một cây được trồng phổ biến làm cảnh ở khắp nước ta, mọc cả ở
      Lào và miền Nam Trung Quốc. Trước đây không thấy dùng làm thuốc, gần đây
      do sự nghiên cứu tác dụng bổ mới bắt đầu được dùng. Thường đào rễ, rửa
      sạch đất cát, phơi hay sấy khô.
    </p>
    <br />
    <p>Ta thường dùng rễ hay vỏ rễ phơi khô hoặc sấy khô của cây đinh lăng.</p>
    <br />
    <h2>Các thành phần hóa học trong cao đinh lăng</h2>
    <p>
      Trong đinh lăng đã tìm thấy có các alcaloit, glucozit, saponin, tanin,
      vitamin B1, các axit amin trong đó có lyzin, xystei, và methionin là những
      axit amin không thể thay thế được.
    </p>
    <br />
    <p>
      Trong rễ và củ đinh lăng có chứa nhiều Saponin có tác dụng như Nhân sâm,
      nhiều Vitamin, ngoài ra rễ đinh lăng còn chứa khoảng 13 loại axit amin
      không thể thay thế, rất cần thiết cho cơ thể con người, nhờ hoạt chất
      trong củ đinh lăng giúp cho tăng trí nhớ cho não bộ, một số đơn vị dược
      trong nước đã ứng dụng cách nấu cao đinh lăng mới để chiết tách các hoạt
      chất trong cây đinh lăng dùng làm thuốc bổ não.
    </p>
    <br />
    <h2>Công dụng và liều dùng</h2>
    <p>
      Trên cơ sở các kết quả nghiên cứu lâm sàng cho thấy với liều 0,23 đến
      0,50g bột <a href="http://novaco.vn/cao-duoc-lieu/">cao dược liệu</a> cao
      đinh lăng một ngày dưới dạng thuốc sắc hoặc ngâm rượu có thể tăng cường
      sức khỏe dẻo dai.
    </p>
    <br />
    <p>
      Trong nhân dân ngoài công dụng ăn gỏi cá, có nơi dùng đinh lăng để chữa
      ho, ra máu, thông tiểu, thông sữa, kiết lỵ nặng. Tại Ấn Độ người ta cũng
      dùng đinh lăng để chữa sốt, làm săn da.
    </p>
    <br />
    <p>Các đơn thuốc có đinh lăng</p>
    <br />
    <p>- Chữa bệnh mỏi mệt, biếng hoạt động</p>
    <br />
    <p>
      Rễ đinh lăng phơi khô thái mỏng 0,50g, thêm 100ml nước, đun sôi trong 15
      phút, chia 2 hay 3 lần uống trong ngày.
    </p>
    <br />
    <p>- Thông tia sữa, căng vú sữa</p>
    <br />
    <p>
      Rễ cây đinh lăng 30 – 40g. Thêm 500ml nước sắc còn 250ml. Uống nóng. Uống
      luôn 2 – 3 ngày, vú hết nhức, sữa chảy bình thường.
    </p>
    <br />
    <p>- Chữa vết thương</p>
    <br />
    <p>
      Giã nát lá đinh lăng và đắp lên vùng vết thương. Sau 2 – 3 ngày vết thương
      sẽ lành.
    </p>
    <br />
    <h2>Các lợi ích sức khỏe của cao đinh lăng</h2>
    <h3>Chất chống oxy hóa mạnh có thể làm giảm viêm</h3>
    <p>
      Đinh lăng có đặc tính chống oxy hóa và chống viêm có lợi. Một số nghiên
      cứu trong ống nghiệm đã chỉ ra rằng chiết xuất nguyên liệu dược phẩm cao
      đinh lăng và các hợp chất alcaloit, saponin,có thể ức chế tình trạng viêm
      và tăng khả năng chống oxy hóa trong tế bào.
    </p>
    <br />
    <p>
      Hoạt động chống oxy hóa và các dấu hiệu ứng suất oxy hóa có thể giúp giảm
      stress oxy hóa bằng cách tăng hoạt động của enzym chống oxy hóa.
    </p>
    <br />
    <h3>Có thể có lợi cho chức năng não</h3>
    <p>
      Đinh lăng có thể giúp cải thiện các chức năng của não như trí nhớ, hành vi
      và tâm trạng. Các hợp chất alcaloit, glucozit, saponin, tanin và hợp chất
      K, có thể bảo vệ não chống lại các tổn thương do các gốc tự do gây ra.
    </p>
    <br />
    <p>
      Một nghiên cứu khác đã kiểm tra liều lượng đơn lẻ 200 hoặc 400 mg chiết
      xuất đinh lăng cho thấy ảnh hưởng đến hoạt động tinh thần, sự mệt mỏi về
      tinh thần và lượng đường trong máu ở 30 người lớn khỏe mạnh trước và sau
      khi kiểm tra tâm thần 10 phút.
    </p>
    <br />
    <p>
      Liều 200 mg, trái ngược với liều 400 mg, có hiệu quả hơn trong việc cải
      thiện hoạt động trí óc và mệt mỏi trong quá trình thử nghiệm
    </p>
    <br />
    <p>
      Có thể đinh lăng hỗ trợ sự hấp thụ đường trong máu của các tế bào, có thể
      giúp tăng cường hiệu suất và giảm mệt mỏi về tinh thần. Tuy nhiên, không
      rõ tại sao liều thấp hơn lại hiệu quả hơn liều cao hơn.
    </p>
    <br />
    <p>
      Các nghiên cứu khác đã phát hiện ra những tác động tích cực đến chức năng
      và hành vi của não ở những người bị bệnh Alzheimer.
    </p>
    <br />
    <h3>Có thể cải thiện chứng rối loạn cương dương</h3>
    <p>
      Đinh lăng và các chiết xuất
      <a
        href="http://novaco.vn/nguyen-lieu-duoc-pham-thuc-pham-chuc-nang-s137.html"
        >nguyên liệu dược</a
      >
      từ thảo dược này có thể cải thiện các triệu chứng của rối loạn cương dương
      bằng cách giảm stress oxy hóa trong các mô và tăng cường lưu lượng máu
      trong cơ dương vật.
    </p>
    <br />
    <p>
      Nghiên cứu đã chỉ ra rằng chiết xuất đinh lăng có thể là một sự thay thế
      hữu ích để điều trị rối loạn cương dương ở nam giới. Có vẻ như các hợp
      chất trong nó có thể bảo vệ chống lại stress oxy hóa trong các mạch máu và
      mô ở dương vật và giúp phục hồi chức năng bình thường.
    </p>
    <br />
    <p>
      Ngoài ra, các nghiên cứu đã chỉ ra rằng chiết xuất đinh lăng có thể thúc
      đẩy sản xuất oxit nitric, một hợp chất giúp cải thiện sự thư giãn cơ ở
      dương vật và tăng lưu thông máu.
    </p>
    <br />
    <h3>Có thể tăng cường hệ thống miễn dịch</h3>
    <p>
      Đinh lăng có thể tăng cường hệ thống miễn dịch . Một số nghiên cứu khám
      phá tác động của nó đối với hệ thống miễn dịch đã tập trung vào bệnh nhân
      ung thư đang điều trị bằng phẫu thuật hoặc hóa trị. Những người này đã có
      những cải thiện đáng kể trong các chức năng miễn dịch và ít tái phát các
      triệu chứng hơn. Sau ba tháng, những người dùng chiết xuất đinh lăng có
      các dấu hiệu hệ thống miễn dịch tốt hơn những người trong nhóm đối chứng
      hoặc giả dược.
    </p>
    <br />
    <p>
      Hơn nữa, một nghiên cứu cho thấy những người dùng đinh lăng có thể có cơ
      hội sống không bệnh trong 5 năm sau phẫu thuật chữa bệnh cao hơn tới 35%
      và tỷ lệ sống sót cao hơn tới 38% so với những người không dùng nó. Có vẻ
      như chiết xuất đinh lăng cũng có thể tăng cường tác dụng của việc tiêm
      chủng chống lại các bệnh như cúm.
    </p>
    <br />
    <h3>Có thể có lợi ích tiềm năng chống lại bệnh ung thư</h3>
    <p>
      Saponin trong đinh lăng dường như điều chỉnh chứng viêm, bảo vệ chống oxy
      hóa và duy trì sức khỏe của tế bào, có thể giúp giảm nguy cơ mắc một số
      loại ung thư. Các nghiên cứu những người thường xuyên sử dụng các sản phẩm
      từ đinh lăng có thể ít mắc một số loại ung thư như ung thư môi, miệng,
      thực quản, dạ dày, ruột kết, gan và phổi hơn những người không dùng.
    </p>
    <br />
    <p>
      Đinh lăng cũng có thể giúp cải thiện sức khỏe của bệnh nhân đang hóa trị,
      giảm tác dụng phụ và tăng cường tác dụng của một số loại thuốc điều trị.
    </p>
    <br />
    <p>
      Trong khi các nghiên cứu về vai trò của Đinh lăng trong việc ngăn ngừa ung
      thư cho thấy một số lợi ích, chúng vẫn chưa kết luận được (37Nguồn tin
      cậy).
    </p>
    <br />
    <h3>Có thể chống lại sự mệt mỏi và tăng mức năng lượng</h3>
    <p>
      Đinh lăng đã được chứng minh là giúp chống lại mệt mỏi và tăng cường năng
      lượng. Nhiều nghiên cứu trên động vật đã liên kết một số thành phần trong
      chiết xuất đinh lăng, như polysaccharides và oligopeptide, saponin, tanin
      với stress oxy hóa thấp hơn và sản xuất năng lượng cao hơn trong tế bào,
      có thể giúp chống lại sự mệt mỏi.
    </p>
    <br />
    <p>
      Những người được cho dùng chiết xuất nguyên liệu tpcn cao đinh lăng ít mệt
      mỏi về thể chất và tinh thần, cũng như giảm căng thẳng oxy hóa, so với
      những người dùng giả dược.
    </p>
    <br />
    <div class="image">
      <img src="${CaoDinhLang}" alt="" />
      <span
        >Rễ chứa nhiều saponin là nguyên liệu chính để điều chế cao đinh
        lăng</span
      >
    </div>
    <h3>Có thể làm giảm lượng đường trong máu</h3>
    <p>
      Đinh lăng dường như có lợi trong việc kiểm soát lượng đường trong máu ở
      những người mắc và không mắc bệnh tiểu đường. Nó đã được chứng minh là có
      tác dụng cải thiện chức năng tế bào tuyến tụy, thúc đẩy sản xuất insulin
      và tăng cường hấp thu đường huyết trong các mô.
    </p>
    <br />
    <p>
      Hơn nữa, các nghiên cứu cho thấy chiết xuất đinh lăng giúp bảo vệ bằng
      cách chống oxy hóa làm giảm các gốc tự do trong tế bào của những người bị
      bệnh tiểu đường.
    </p>
    <br />
    <span> Nguồn: http://novaco.vn/ </span> 
    `,
  },
  {
    slug: `cong-dung-cua-dang-sam`,
    title: `Công dụng của Đẳng Sâm`,
    featureImg: DangSam,
    excerpt: `Trong đông y, đẳng sâm có vị ngọt, tính bình mang lại tác dụng qui vào kinh phế, túc thái âm, kinh thù. Nhờ vậy, sâm sở hữu những công dụng tuyệt vời như sau...`,
    content: `
    <h2>Đẳng sâm có tác dụng gì?</h2>
    <p>
      Theo nghiên cứu khoa học, người ta tìm thấy trong thành phần của loại sâm
      này có chứa một số thành phần hóa học sau: insulin, alkaloid, sucrose,
      glucose, saponin, fructose, choline, tangshenoside,…
    </p>
    <br />
    <p>
      Trong đông y, đẳng sâm có vị ngọt, tính bình mang lại tác dụng qui vào
      kinh phế, túc thái âm, kinh thù. Nhờ vậy, sâm sở hữu những công dụng tuyệt
      vời như sau:
    </p>
    <br />
    <div class="image">
      <img src="${DangSam}" alt="" />
    </div>
    <br />
    <ul>
      <li>Tăng cường sức đề kháng</li>
    </ul>
    <br />
    <p>
      Theo kết quả thực nghiệm cho thấy, sử dụng loại thảo dược này thường xuyên
      sẽ góp phần nâng cao sức đề kháng, điều trị hiệu quả chứng suy nhược cơ
      thể, mệt mỏi,… Đồng thời, các hoạt chất có trong đẳng sâm còn có khả năng
      gây ức chế và hưng phấn lên vỏ não. Điều này giúp gia tăng tế bào có lợi,
      củng cố sức đề kháng cho cơ thể.
    </p>
    <br />
    <ul>
      <li>Kích thích tiêu hóa</li>
    </ul>
    <br />
    <p>
      Dịch tiết ra từ đẳng sâm được nghiên cứu là có tác dụng rất tốt cho hệ
      tiêu hóa. Chúng giúp tái tạo hàng rào bảo vệ hệ tiêu hóa, kích thích sản
      sinh vi khuẩn có lợi. Từ đó hỗ trợ điều trị tốt các chứng bệnh như trào
      ngược dạ dày, chướng bụng đầy hơi,…
    </p>
    <br />
    <ul>
      <li>Ngăn ngừa bệnh về tim mạch và huyết áp</li>
    </ul>
    <br />
    <p>
      Để kiểm chứng công dụng này của loại thảo dược, người ta đã tiêm dẫn chất
      có chứa đẳng sâm vào mạch thỏ. Quá trình thí nghiệm cho thấy rằng, nhịp độ
      co bóp của tim thỏ được cải thiện đáng kể và lưu lượng máu cũng được khơi
      thông.
    </p>
    <br />
    <ul>
      <li>Giảm nguy cơ mắc bệnh về máu</li>
    </ul>
    <br />
    <p>
      Sử dụng loại thảo dược này thường xuyên sẽ giúp làm giảm lượng bạch cầu,
      tăng hồng cầu đáng kể. Do vậy, có thể nói đẳng sâm là dược liệu rất tốt
      cho máu.
    </p>
    <br />
    <ul>
      <li>Chống suy nhược ở người già</li>
    </ul>
    <br />
    <p>
      Trong thành phần của sâm có chứa rất nhiều hoạt chất tốt cho xương khớp,
      chúng giúp bảo vệ các mô xương, ngăn chặn quá trình lão hóa sớm.
    </p>
    <br />
    <ul>
      <li>Đẳng sâm điều trị sốt xuất huyết</li>
    </ul>
    <br />
    <p>
      Loại sâm này có vị ngọt, tính lành, vì thế rất phù hợp trong điều trị bệnh
      sốt xuất huyết. Chỉ cần sử dụng sâm trong 1 tháng, người bệnh sẽ thấy cơ
      thể khoan khoái hơn nhiều, sắc mặt cũng hồng hào hơn.
    </p>
    <span> Nguồn: tamminhduong.com </span>
    `,
  },
  {
    slug: `dong-trung-ha-thao-co-tac-dung-gi`,
    title: `Động trùng hạ thảo có tác dụng gì?`,
    featureImg: DongTrungHaThao,
    excerpt: `
    Đông trùng hạ thảo, một chi nấm ký sinh, phát triển trên cơ thể ấu trùng của côn trùng. Khi những loại nấm ký sinh này tấn công vật chủ, chúng sẽ thay thế mô của nó và nảy mầm những thân dài,...`,
    content: `
    <h2>1. Đông trùng hạ thảo</h2>
    <p>
      Đông trùng hạ thảo, một chi nấm ký sinh, phát triển trên cơ thể ấu trùng
      của côn trùng. Khi những loại nấm ký sinh này tấn công vật chủ, chúng sẽ
      thay thế mô của nó và nảy mầm những thân dài, mảnh mọc bên ngoài cơ thể
      vật chủ. Phần còn lại của côn trùng và nấm đã được thu hái bằng tay, phơi
      khô và sử dụng trong Y học cổ truyền Trung Quốc trong nhiều thế kỷ để điều
      trị mệt mỏi, ốm yếu, hoặc đông trùng hạ thảo bổ thận và ham muốn tình dục
      thấp. Các chất bổ sung và các sản phẩm có chứa chiết xuất từ đông trùng hạ
      thảo ngày càng trở nên phổ biến do được biết đến với nhiều lợi ích cho sức
      khỏe.
    </p>
    <br />
    <p>
      Trong số hơn 400 loài Đông trùng hạ thảo được tìm thấy, thì có hai loài đã
      trở thành tâm điểm của nghiên cứu sức khỏe: Cordyceps sinensis và
      Cordyceps militaris. Tuy nhiên, phần lớn kết quả của các nghiên cứu này
      chỉ giới hạn ở các nghiên cứu trên động vật hoặc phòng thí nghiệm, vì vậy
      các chuyên gia y tế hiện không thể đưa ra kết luận về tác động của chúng
      đối với con người. Tuy nhiên, lợi ích sức khỏe tiềm năng của chúng rất hứa
      hẹn.
    </p>
    <br />
    <h2>2. Lợi ích của đông trùng hạ thảo</h2>
    <h3>2.1. Đông trùng hạ thảo có thể tăng hiệu suất tập thể dục</h3>
    <p>
      Đông trùng hạ thảo được biết đến với công dụng giúp cơ thể tăng cường sản
      xuất phân tử adenosine triphosphate (ATP), chất cần thiết để cung cấp năng
      lượng cho cơ bắp, nhằm cải thiện cách cơ thể sử dụng oxy, đặc biệt là
      trong khi tập thể dục.
    </p>
    <br />
    <p>
      Các nhà nghiên cứu đã kiểm tra tác động của đông trùng hạ thảo đối với khả
      năng tập thể dục ở 30 người lớn tuổi khỏe mạnh bằng cách sử dụng xe đạp
      tĩnh. Những người tham gia sẽ sử dụng 3 gam mỗi ngày của một dòng Đông
      trùng hạ thảo tổng hợp được gọi là CS-4 hoặc một viên thuốc giả dược trong
      sáu tuần. Vào cuối nghiên cứu, VO2 tối đa đã tăng 7% ở những người tham
      gia dùng CS-4, trong khi những người tham gia dùng viên giả dược không có
      thay đổi. VO2 tối đa là phép đo được sử dụng để xác định mức độ thể chất.
    </p>
    <br />
    <p>
      Trong một nghiên cứu tương tự, 20 người lớn tuổi khỏe mạnh được sử dụng 1
      gam CS-4 hoặc một viên thuốc giả dược trong 12 tuần.
    </p>
    <br />
    <p>
      Trong khi các nhà nghiên cứu không tìm thấy sự thay đổi về VO2 tối đa ở cả
      hai nhóm nghiên cứu, những đối tượng tham gia được cung cấp CS-4 đã cải
      thiện hiệu suất tập thể dục.
    </p>
    <br />
    <p>
      Hay nghiên cứu về kiểm tra tác động của hỗn hợp nấm ký sinh có chứa đông
      trùng hạ thảo đối với hiệu suất tập thể dục ở những người trẻ tuổi. Sau ba
      tuần, VO2 tối đa của những người tham gia đã tăng 11% so với giả dược.
    </p>
    <br />
    <p>
      Tuy nhiên, nghiên cứu hiện tại cho thấy đông trùng hạ thảo không mang lại
      hiệu quả trong việc cải thiện hiệu suất tập thể dục ở các vận động viên
      được đào tạo.
    </p>
    <br />
    <h3>2.2. Tính chất chống lão hóa</h3>
    <p>
      Người cao tuổi thường hay sử dụng Đông trùng hạ thảo để giảm cảm giác mệt
      mỏi và tăng cường sức mạnh và ham muốn tình dục. Các nhà nghiên cứu cho
      rằng hàm lượng chất chống oxy hóa của đông trùng hạ thảo có thể giải thích
      tiềm năng chống lão hóa của chúng.
    </p>
    <br />
    <p>
      Một số nghiên cứu đã tìm thấy kết quả đông trùng hạ thảo có thể làm tăng
      chất chống oxy hóa nhằm giúp cải thiện trí nhớ và chức năng tình dục. Chất
      chống oxy hóa bao gồm các phân tử chống lại tổn thương tế bào bằng cách
      trung hòa các gốc tự do, có thể góp phần gây ra bệnh tật và lão hóa.
    </p>
    <br />
    <div class="image">
      <img src="${DongTrungHaThao}" alt="" />
      <span>Đông trùng hạ thảo có khả năng làm gia tăng chất chống oxy</span>
    </div>
    <br />
    <p>
      Một nghiên cứu khác cho thấy đông trùng hạ thảo kéo dài tuổi thọ của ruồi
      giấm, củng cố thêm niềm tin rằng chúng có lợi ích chống lão hóa.
    </p>
    <br />
    <p>
      Tuy nhiên, vẫn chưa có căn cứ khoa học cho biết đông trùng hạ thảo có
      những lợi ích chống lão hóa tương tự ở người hay không.
    </p>
    <br />
    <h3>2.3. Tác dụng chống khối u tiềm năng</h3>
    <p>
      Tiềm năng của Đông trùng hạ thảo để làm chậm sự phát triển của các khối u
      đã tạo ra sự quan tâm đáng kể trong những năm gần đây. Các nhà nghiên cứu
      tin rằng đông trùng hạ thảo có thể phát huy tác dụng chống khối u theo một
      số cách thể hiện qua kết quả trong ống nghiệm: Đông trùng hạ thảo đã được
      chứng minh có khả năng ức chế sự phát triển của nhiều loại tế bào ung thư
      ở người, trong đó có bệnh ung thư phổi, ruột kết, da và gan.
    </p>
    <br />
    <p>
      Các nghiên cứu sử dụng đông trùng hạ thảo thực hiện trên chuột cho kết quả
      có tác dụng chống khối u đối với ung thư hạch, ung thư hắc tố và ung thư
      phổi. Đông trùng hạ thảo cũng có thể đảo ngược các tác dụng phụ liên quan
      đến quá trình điều trị ung thư. Một trong những tác dụng phụ này: Giảm
      bạch cầu.
    </p>
    <br />
    <p>
      Cần phân biệt rõ ràng giữa với bệnh bạch cầu ung thư, giảm bạch cầu là
      tình trạng số lượng tế bào bạch cầu (bạch cầu) giảm, khi đó sẽ giảm khả
      năng bảo vệ của cơ thể và tăng nguy cơ nhiễm trùng.
    </p>
    <br />
    <p>
      Tác động của đông trùng hạ thảo đối với những con chuột bị mắc chứng giảm
      bạch cầu sau khi xạ trị và điều trị bằng Taxol, một loại thuốc hóa trị
      liệu phổ biến.
    </p>
    <br />
    <p>
      Hơn nữa, Đông trùng hạ thảo cũng đã đảo ngược tình trạng giảm bạch cầu. Từ
      đó cho thấy đông trùng hạ thảo có thể giúp giảm các biến chứng liên quan
      đến một số phương pháp điều trị ung thư. Tuy nhiên, điều quan trọng cần
      lưu ý là những nghiên cứu này được thực hiện trên động vật và ống nghiệm,
      không phải con người.
    </p>
    <br />
    <p>
      Tác động của Đông trùng hạ thảo đối với việc giảm bạch cầu và phát triển
      khối u ở người vẫn chưa được biết, vì vậy các chuyên gia y tế hiện không
      thể đưa ra kết luận.
    </p>
    <br />
    <h3>
      2.4. Đông trùng hạ thảo có tác dụng giúp quản lý bệnh tiểu đường loại 2
    </h3>
    <p>
      Bệnh đái tháo đường, căn bệnh gây bởi tình trạng cơ thể không sản xuất
      hoặc không đáp ứng với hormone insulin, thường vận chuyển đường glucose
      vào tế bào của bạn để tạo năng lượng.
    </p>
    <br />
    <p>
      Khi cơ thể không sản xuất đủ nhu cầu insulin hoặc phản ứng tốt với nó,
      glucose không thể đi vào các tế bào, vì vậy nó sẽ ở lại trong máu. Theo
      thời gian, trong máu sẽ có quá nhiều glucose có thể gây ra các vấn đề sức
      khỏe nghiêm trọng. Do đó, đối với những người mắc bệnh tiểu đường là đảm
      bảo lượng đường trong máu của họ được kiểm soát tốt.
    </p>
    <br />
    <p>
      Đông trùng hạ thảo có thể giữ cho hàm lượng đường trong máu ở mức cân bằng
      và khỏe mạnh bằng cách bắt chước hoạt động của insulin. Trong một số
      nghiên cứu trên chuột mắc bệnh tiểu đường, Đông trùng hạ thảo đã được
      chứng minh là làm giảm lượng đường trong máu.
    </p>
    <br />
    <p>
      Một số bằng chứng nghiên cứu tìm thấy cho kết quả rằng đông trùng hạ thảo
      cũng có thể bảo vệ chống lại bệnh thận, một biến chứng phổ biến của bệnh
      tiểu đường. Trong một đánh giá của 22 nghiên cứu với 1.746 người bị bệnh
      thận mãn tính, những đối tượng được bổ sung đông trùng hạ thảo đã cải
      thiện chức năng thận.
    </p>
    <br />
    <p>
      Các tác giả của bài tổng quan nói rằng nhiều nghiên cứu có chất lượng
      thấp. Vì vậy, không thể đưa ra kết luận nào về tác dụng của Đông trùng hạ
      thảo đối với chức năng thận ở người bị bệnh thận mãn tính.
    </p>
    <br />
    <h3>2.5. Lợi ích có thể có đối với sức khỏe tim mạch</h3>
    <p>
      Đông trùng hạ thảo sử dụng điều trị chứng loạn nhịp tim được chấp thuận ở
      Trung Quốc, tình trạng nhịp tim quá chậm, quá nhanh hoặc không đều. Nghiên
      cứu cho thấy Đông trùng hạ thảo làm giảm đáng kể chấn thương tim ở đối
      tượng mắc bệnh thận mãn tính. Tổn thương tim do bệnh thận mãn tính được
      cho là làm tăng nguy cơ suy tim, vì vậy việc giảm những tổn thương này có
      thể giúp tránh được kết quả này.
    </p>
    <br />
    <div class="image">
      <img src="${DongTrungHaThao2}" alt="" />
      <span
        >Một số nghiên cứu cho thấy đông trùng hạ thảo có lợi với tim mạch</span
      >
    </div>
    <br />
    <p>
      Các nhà nghiên cứu cho rằng những phát hiện lợi ích đối với tim mạch do
      hàm lượng adenosine của Đông trùng hạ thảo. Đông trùng hạ thảo cũng có thể
      có tác dụng có lợi đối với hàm lượng cholesterol. Các nghiên cứu đã chỉ ra
      rằng đông trùng hạ thảo làm giảm cholesterol LDL- nhân tố có thể làm tăng
      nguy cơ mắc bệnh tim bằng cách dẫn đến sự tích tụ cholesterol trong động
      mạch. Tương tự, đông trùng hạ thảo đã được chứng minh làm giảm mức chất
      béo trung tính ở chuột.
    </p>
    <br />
    <p>
      Triglyceride, chất béo được tìm thấy trong máu của bạn. Mức độ cao có liên
      quan đến nguy cơ mắc bệnh tim nhiều hơn. Tuy nhiên vẫn chưa có đủ bằng
      chứng để xác định liệu đông trùng hạ thảo có lợi cho sức khỏe tim mạch ở
      người hay không.
    </p>
    <br />
    <h3>2.6. Có thể giúp chống lại chứng viêm</h3>
    <p>
      Sử dụng đông trùng hạ thảo được cho rằng giúp chống lại chứng viêm trong
      cơ thể. Mặc dù một số chứng viêm tốt cho cơ thể, nhưng quá nhiều có thể
      dẫn đến các bệnh như bệnh tim và ung thư.
    </p>
    <br />
    <p>
      Nghiên cứu đã chỉ ra rằng khi các tế bào của con người tiếp xúc với đông
      trùng hạ thảo, các protein đặc biệt làm tăng phản ứng viêm trong cơ thể sẽ
      bị ức chế.
    </p>
    <br />
    <p>
      Nhờ những tác dụng tiềm năng này, các nhà nghiên cứu tin rằng đông trùng
      hạ thảo có thể dùng như một loại thuốc hoặc chất bổ sung chống viêm hữu
      ích.
    </p>
    <br />
    <p>
      Đông trùng hạ thảo đã được chứng minh là có tác dụng giảm viêm trong đường
      hô hấp của chuột, khiến chúng trở thành một liệu pháp tiềm năng cho bệnh
      <a href="https://www.vinmec.com/vi/benh/hen-suyen-4684/">hen suyễn</a>.
      Tuy nhiên, các loại nấm có vẻ kém hiệu quả hơn các loại thuốc thường được
      kê đơn được sử dụng để giảm đau cho các vùng bị viêm trên cơ thể.
    </p>
    <br />
    <p>
      Đông trùng hạ thảo cũng có thể phát huy được công dụng của nó tại chỗ. Một
      nghiên cứu cho thấy nó làm giảm viêm da khi bôi tại chỗ trên chuột, chứng
      tỏ thêm đặc tính chống viêm của nó. Các đặc tính chống viêm tiềm ẩn của
      Đông trùng hạ thảo vẫn chưa được quan sát thấy ở người.
    </p>
    <br />
    <div class="image">
      <img src="${DongTrungHaThao3}" alt="" />
      <span>Đông trùng hạ thảo cũng có tác dụng kháng viêm</span>
    </div>
    <br />
    <h2>3. Uống bổ sung đông trùng hạ thảo</h2>
    <p>
      Uống đông trùng hạ thảo có tác dụng gì đối với sức khỏe? phần lớn sử dụng
      bổ sung đông trùng hạ thảo CS-4. Liều lượng thường được sử dụng trong
      nghiên cứu trên người là 1.000–3.000 mg mỗi ngày. Phạm vi này không liên
      quan đến các tác dụng phụ và đã được phát hiện là có một số lợi ích sức
      khỏe nhất định.
    </p>
    <br />
    <h3>Tác dụng phụ và an toàn</h3>
    <p>
      Chưa có nghiên cứu nào kiểm tra tính an toàn của đông trùng hạ thảo trên
      người. Tuy nhiên, một lịch sử sử dụng lâu dài trong Y học cổ truyền Trung
      Quốc cho thấy chúng không độc hại. Trên thực tế, chính phủ Trung Quốc đã
      phê duyệt Cordyceps CS-4 để sử dụng trong bệnh viện và công nhận nó là một
      loại thuốc tự nhiên, an toàn
    </p>
    <br />
    <p>
      Các nghiên cứu trên động vật và phòng thí nghiệm cho thấy đông trùng hạ
      thảo có tiềm năng cải thiện sức khỏe tim mạch và chống lại chứng viêm, ung
      thư, tiểu đường và lão hóa. Tuy nhiên, nhiều nghiên cứu trong số này có
      chất lượng kém và kết quả không thể mở rộng cho con người. Hơn nữa, đã có
      những nghiên cứu trên người về tác dụng của Đông trùng hạ thảo đối với
      hiệu suất tập thể dục. Các loại nấm đã được phát hiện có khả năng tăng
      cường sử dụng năng lượng và oxy trong quá trình tập thể dục. Hiện tại,
      không có sự thống nhất về liều lượng mà mọi người nên sử dụng để gặt hái
      những lợi ích sức khỏe tiềm năng của nó, hoặc mức độ an toàn của nó.
    </p>
    <br />
    <span> Nguồn: Vinmec </span>
    `,
  },
];

export default drugs;
