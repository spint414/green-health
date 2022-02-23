import newsDetail from "./newsDetail.module.scss";
import { useParams } from "react-router-dom";
import posts from "../../../data/posts";
import { useMemo } from "react";
import { Result } from "antd";

const NewsDetail = () => {
  const { slug } = useParams();

  const post = useMemo(() => {
    const filter = posts.filter((post) => post.slug === slug);

    if (filter.length > 0) {
      return filter[0];
    }

    return undefined;
  }, [slug]);

  if (!post) {
    return (
      <div className={newsDetail["container-404"]}>
        <Result title="404" subTitle="KHÔNG TÌM THẤY BÀI VIẾT" status="404" />
      </div>
    );
  }

  return (
    <div className={newsDetail["container"]}>
      <div className={newsDetail["inner"]}>
        <h1>{post.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default NewsDetail;
