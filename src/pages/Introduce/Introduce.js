import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import OldLogoIntroduce from '~/layouts/components/OldLogoIntroduce'
import Image from "~/components/Image";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <>
            <div className={cx("introduce")}>
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className={cx('introduce-wrap')}>
                            <div className={cx("introduce-title")}>Mon's Pet là:</div>
                            <div className={cx("introduce-text")}>
                                <strong>Mon’s Pet</strong> được xây dựng dựa trên tiêu
                                chí là cổng thông tin khổng lồ và hoàn toàn miễn phí về
                                các vấn đề xunh quanh động vật , đặc biệt là thú cưng,
                                cụ thể như các bệnh về chó mèo, các thực phẩm dinh dưỡng
                                dành cho thú cưng, cách chăm sóc và điều trị bệnh cho
                                chó mèo… Tất cả những thông tin tại Monspet được sưu tầm
                                và tham khảo từ nhiều nguồn khác nhau có chọn lọc, bên
                                cạnh đó còn là trải nghiệm thực tế của chúng tôi trong
                                quá trình nuôi thú cưng để đem đến cho độc giả những
                                thông tin chính xác và hữu ích nhất.
                            </div>
        
                            <div className={cx("introduce-text")}>
                                <strong>Monspet.com</strong> còn là nơi kết nối, truyền
                                tải thông tin từ bác sĩ thú y tới người đọc nhằm cung
                                cấp đến cho người nuôi động vật, thú cưng những thông
                                tin chính xác nhất, được kiểm duyệt từ đội ngũ bác sĩ
                                thú y đầy uy tín. Chúng tôi thành lập Monspet dựa trên
                                tình yêu thương dành cho động vật, thú nuôi với mong
                                muốn tất cả các bé chó mèo, thú nuôi sẽ được chăm sóc,
                                cứu chữa kịp thời, và không một bé nào phải “ra đi” vì
                                chủ nuôi hay người đang cần thông tin lại không được
                                cung cấp thông tin một cách chính xác và đầy đủ.
                            </div>
                        </Col>
                        <Col lg={6} sm={12} className={cx('introduce-wrap')}>
                            <div className={cx("introduce-logo")}>
                                <Image src={images.logoIntroduce} />
                            </div>
                        </Col>
                        <Col lg={6} sm={12} className={cx('introduce-wrap')}>
                            <div className={cx("introduce-header")}>Sứ mệnh</div>
                            <div className={cx("introduce-text")}>
                                Sứ mệnh của chúng tôi là mang đến cho độc giả, những
                                người yêu thương thú cưng những thông tin nhanh chóng và
                                chính xác nhất. Nhằm đảm bảo và giảm thiểu những trường
                                hợp vì thiếu thông tin mà gây ra những việc hậu quả đáng
                                tiếc.
                            </div>
                            <div className={cx("introduce-text")}>
                                <strong>Mon‘s Pet</strong> cam kết mang lại cho độc giả
                                một trải nghiệm tốt nhất trong ngành chăm sóc thú cưng.
                                Chúng tôi cũng như các chủ nuôi – hay những người yêu
                                quý động vật, đều dành một tình yêu to lớn cho những
                                người bạn bốn chân. Monspet sẽ luôn đồng hành cùng với
                                mọi người để giúp những người bạn bốn chân của chúng ta
                                nhận ra rằng chúng đang được yêu thương và quý trọng như
                                thế nào..
                            </div>
                        </Col>
                        <Col lg={6} sm={12} className={cx('introduce-wrap')}>
                            <div className={cx("introduce-header")}>Tầm nhìn</div>
                            <div className={cx("introduce-text")}>
                                Chúng tôi mong muốn <strong>Mon‘s Pet</strong> sẽ trở
                                thành địa chỉ tìm kiếm thông tin đáng tin cậy cho những
                                người quan tâm và yêu thương động vật. Và quan trọng
                                hơn, Monspet sẽ là người bạn đồng hành thân cậy với mọi
                                người trong quá trình chăm sóc thú nuôi.
                            </div>
                            <div className={cx("introduce-text")}>
                                Chúng tôi sẽ không ngừng nỗ lực và phát triển, phủ rộng
                                thông tin đến mọi miền đất nước, đến những nơi cần chúng
                                tôi trong hành trình chăm sóc động vật – thú cưng..
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <OldLogoIntroduce />
        </>
    );
}

export default Introduce;
