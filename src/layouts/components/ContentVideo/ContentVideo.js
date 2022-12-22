import classNames from "classnames/bind";
import styles from "./ContentVideo.module.scss";
import Container from "react-bootstrap/Container";

const cx = classNames.bind(styles);

function ContentVideo() {
    return ( 
        <div className={cx("content__video")}>
            <Container>
                <div className={cx("content__video-heading")}>
                    <div className={cx("content__video-heading-text")}>Xem thêm một số videos thú vị về động vật - thú cưng</div>
                    <h2 className={cx("content__video-header")}>videos</h2>
                </div>

                <div className={cx("content__video-main")}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_1FY5kL_zXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Container>
        </div>
    );
}

export default ContentVideo;