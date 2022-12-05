import classNames from "classnames/bind";
import styles from "./ContentVideo.module.scss";

const cx = classNames.bind(styles);

function ContentVideo() {
    return ( 
        <div className={cx("content__video")}>
            <div className={cx("grid wide")}>
                <div className={cx("col l-12 m-12")}>
                    <div className={cx("content__video-heading")}>
                        <div className={cx("content__video-heading-text")}>Xem thêm một số videos thú vị về động vật - thú cưng</div>
                        <h2 className={cx("content__video-header")}>videos</h2>
                    </div>

                    <div className={`col ` + cx("content__video-main")}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_1FY5kL_zXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentVideo;