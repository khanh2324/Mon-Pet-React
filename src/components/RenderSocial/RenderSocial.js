import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import styles from './RenderSocial.module.scss';

const cx = classNames.bind(styles);

function RenderSocial({ items = []}) {
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <a key={index} href={item.href} className={cx("content-social-wrap")} id={cx(item.name)}>
                    <FontAwesomeIcon className={cx("icon")} icon ={item.icon} />
                </a>
            )
        })
    }

    return ( 
        <div className={`d-flex ` + cx("content-social")}>
            {renderItems()}
        </div>
    );
}

RenderSocial.propTypes = {
    items: PropTypes.array,
}
export default RenderSocial;



