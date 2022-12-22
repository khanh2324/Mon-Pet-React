import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import IntroduceHome from "~/layouts/components/IntroduceHome";
import Slider from "~/layouts/components/Slider";
import Commit from "~/layouts/components/Commit";
import ContentVideo from "~/layouts/components/ContentVideo";
import LinkProduct from "~/layouts/components/LinkProduct";
import Friends from "~/layouts/components/Friends";
import NewsPost from "~/layouts/components/NewsPost";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('content')}>
            <Slider />
            <IntroduceHome />
            <Commit />
            <ContentVideo />
            <LinkProduct />
            <Friends />
            <NewsPost />
        </div>
    );
}

export default Home;