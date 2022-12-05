import classNames from "classnames/bind";
import styles from "./Commit.module.scss";

import Image from "~/components/Image";
import images from "~/assets/images";
const cx = classNames.bind(styles);

function Commit() {
    return ( 
        <div className={cx("commit")}>
                <div className={cx("grid wide")}>
                    <div className={cx("col l-12 m-12")}>
                        <div className={cx("commit__heading")}>
                            <h1 className={cx("commit-header")}>Cam kết</h1>
                            <div className={cx("commit-text")}>Mons’ Pet .Com được định hình là trang web thông tin hàng đầu về động vật, thú cưng. Chúng tôi cam kết tất cả nội dung cung cấp trên trang đều được trích dịch từ các nguồn web nước ngoài rõ ràng, có ý kiến và trích dẫn thú y. Từ đó mang lại những giải pháp chính xác nhất cho người xem.</div>
                        </div>
        
                        <div className={ `row `+ cx("commit__content")}>
                            <div className={`col l-4 m-4 c-12 ` + cx("commit__content-wrap")}>  
                                <div className={cx("commit__content-icon")}>
                                    <Image src={images.penCommit}/>
                                </div>
                                <div className={cx("commit__content-header")}>Nội dung</div>
                                <div className={cx("commit__content-text")}>Nội dung chất lượng, chính xác, có nguồn uy tín, có thú y xem xét.</div>
                            </div>
                            <div className={`col l-4 m-4 c-12 ` + cx("commit__content-wrap")}>
                                <div className={cx("commit__content-icon")}>
                                    <Image src={images.boxCommit}/>
                                </div>
                                <div className={cx("commit__content-header")}>Sản phẩm</div>
                                <div className={cx("commit__content-text")}>Sản phẩm được gợi ý công bằng, được phân tích review chi tiết chính xác.</div>
                            </div>
                            <div className={`col l-4 m-4 c-12 ` + cx("commit__content-wrap")}>
                                <div className={cx("commit__content-icon")}>
                                    <Image src={images.loaCommit}/>
                                </div>
                                <div className={cx("commit__content-header")}>Hỗ trợ</div>
                                <div className={cx("commit__content-text")}>Hỗ trợ hết mình, hướng dẫn những nguồn khám bệnh thú cưng uy tín, chất lượng.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default Commit;