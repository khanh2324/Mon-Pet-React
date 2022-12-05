import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import Introduce from "~/layouts/components/Introduce";
import Slider from "~/layouts/components/Slider";
import Commit from "~/layouts/components/Commit";
import ContentVideo from "~/layouts/components/ContentVideo";
import LinkProduct from "~/layouts/components/LinkProduct";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('content')}>
            <Slider />
            <div className={cx("grid wide")}>
                <div className={cx('col l-12')}>
                    <Introduce />
                </div>
            </div>
            <Commit />
            <ContentVideo />
            <div className={cx('grid wide')}>
                <LinkProduct />
            </div>
        </div>
    );
}

export default Home;