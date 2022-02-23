import "./style.scss";
import { paths } from "../../constant";
import { memo } from "react";
import drugs from "../../data/drugs";
import { useHistory } from "react-router-dom";

const Medicine = () => {
  const history = useHistory();

  return (
    <section className="medicine">
      <div className="container medicine-wrap">
        <div className="left-col">
          {drugs.slice(1, 4).map((post) => (
            <CompMd post={post} history={history} />
          ))}
        </div>

        <div className="right-col">
          {drugs.slice(4, 7).map((post) => (
            <CompMd post={post} history={history} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Medicine;

const CompMd = memo(({ post, history }) => (
  <div key={post.key} className="post-md">
    <h3 onClick={() => history.push(paths.duoc_lieu_nSlug + post.slug)}>
      {post.title}
    </h3>

    <div className="content">
      <img
        src={post.featureImg}
        alt=""
        onClick={() => history.push(paths.duoc_lieu_nSlug + post.slug)}
      />

      <p>{post.excerpt}</p>
    </div>
  </div>
));
