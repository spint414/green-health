import { Divider, Row, Tabs } from "antd";
import { memo, useState } from "react";
import news from "./news.module.scss";
import cn from "classnames";
import moment from "moment";
import { paths } from "../../constant";
import { useHistory } from "react-router-dom";
import posts from "../../data/posts";

const News = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const history = useHistory();
  
  posts.sort(function(a,b) {
    a = a.date.split('/').reverse().join('');
    b = b.date.split('/').reverse().join('');
    return a < b ? 1 : a > b ? -1 : 0;
  });

  return (
    <div className={news["container"]}>
      <h1>Tin tức</h1>

      <div id={news["block-1"]}>
        <div
          className={cn(news["left-col"], currentTab === "2" && news["tab-2"])}
        >
          <Tabs type="card" onChange={(val) => setCurrentTab(val)}>
            <Tabs.TabPane tab="Tin mới" key="1">
              {posts.slice(0, 5).map((post) => (
                <CompSm post={post} history={history} />
              ))}
            </Tabs.TabPane>

            <Tabs.TabPane tab="Đọc nhiều" key="2">
              {posts.slice(0, 5).map((post) => (
                <CompSm post={post} history={history} />
              ))}
            </Tabs.TabPane>
          </Tabs>
        </div>

        <div className={news["right-col"]}>
          <img
            src={posts[0].featureImg}
            alt=""
            onClick={() => history.push(paths.tin_tuc_nSlug + posts[0].slug)}
          />

          <h3 onClick={() => history.push(paths.tin_tuc_nSlug + posts[0].slug)}>
            {posts[0].title}
          </h3>

          <p>{posts[0].excerpt}</p>
        </div>
      </div>

      <Divider className={news["divider"]} />

      <div id={news["block-2"]}>
        <div className={news["left-col"]}>
          {posts.slice(1, 6).map((post) => (
            <CompMd post={post} history={history} />
          ))}
        </div>

        <div className={news["right-col"]}>
          {posts.slice(6, 11).map((post) => (
            <CompMd post={post} history={history} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

const CompSm = memo(({ post, history }) => (
  <Row
    key={post.id}
    wrap={false}
    className={news["post"]}
    onClick={() => history.push(paths.tin_tuc_nSlug + post.slug)}
  >
    <p>
      <span className={news["day"]}>{moment(post.date, "DD/MM/YYYY").format("DD/")}</span>

      {moment(post.date, "DD/MM/YYYY").format("MM")}

      <span className={news["year"]}>{moment(post.date, "DD/MM/YYYY").format("YYYY")}</span>
    </p>

    <div>
      <h3>{post.title}</h3>
      <span className={news["excerpt"]}>{post.excerpt}</span>
    </div>
  </Row>
));

const CompMd = memo(({ post, history }) => (
  <div key={post.key} className={news["post-md"]}>
    <h3 onClick={() => history.push(paths.tin_tuc_nSlug + post.slug)}>
      {post.title}
    </h3>

    <div className={news["content"]}>
      <img
        src={post.featureImg}
        alt=""
        onClick={() => history.push(paths.tin_tuc_nSlug + post.slug)}
      />

      <p>{post.excerpt}</p>
    </div>
  </div>
));
