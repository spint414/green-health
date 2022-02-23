import medicineDetail from "./medicineDetail.module.scss";
import { useParams } from "react-router-dom";
import drugs from "../../../data/drugs";
import { useMemo } from "react";
import { Result } from "antd";

const MedicineDetail = () => {
  const { slug } = useParams();

  const post = useMemo(() => {
    const filter = drugs.filter((post) => post.slug === slug);

    if (filter.length > 0) {
      return filter[0];
    }

    return undefined;
  }, [slug]);

  if (!post) {
    return (
      <div className={medicineDetail["container-404"]}>
        <Result title="404" subTitle="KHÔNG TÌM THẤY BÀI VIẾT" status="404" />
      </div>
    );
  }

  return (
    <div className={medicineDetail["container"]}>
      <div className={medicineDetail["inner"]}>
        <h1>{post.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default MedicineDetail;
