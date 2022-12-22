import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

import Image from "~/components/Image";
import images from "~/assets/images";
import config from "~/config";
import Button from "~/components/Button";
import MenuNav from "~/components/Popper/MenuNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faChevronDown,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const MENU_NAV = [
    {
        title: "Trang Chủ",
        className: "outline",
        classNameMobile: "mobile",
        to: "/",
        active: true,
    },
    {
        title: "Giới Thiệu",
        className: "outline",
        classNameMobile: "mobile",
        to: "/introduce",
    },
    {
        title: "Chuyên mục thú cưng",
        className: "outline",
        classNameMobile: "mobile",
        to: "/",
        icon: <FontAwesomeIcon icon={faChevronDown} />,
        subNav: true,
    },
    {
        title: "Tin Tức",
        className: "outline",
        classNameMobile: "mobile",
        to: "/news",
    },
];

function Header() {
    const [toggleButton, setToggleButton] = useState(true);

    const handlerMenuMobile = () => {
        setToggleButton(!toggleButton);
    };

    return (
        <div className={cx("header")} id="header">
            <Container className="d-flex flex-nowrap align-items-center justify-content-between">
                <Col lg={3}>
                    <Link to={config.routes.home} className={cx("logo-link")}>
                        <Image
                            src={images.headerLogo}
                            className={cx("logo")}
                            alt="Mon Pet"
                        />
                    </Link>
                </Col>
                
                <Col lg={6} className={"d-none d-lg-flex " + cx("header-nav")}>
                    <MenuNav items={MENU_NAV} />

                    <Button
                        outline
                        noBefore
                        leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    ></Button>
                </Col>

                <Col md={2} sm={3} className="d-block d-lg-none align-self-center">
                    <Button
                        outline
                        noBefore
                        onClick={handlerMenuMobile}
                        leftIcon={<FontAwesomeIcon icon={faBars} />}
                    >
                        {toggleButton ? "Menu" : "Close"}
                    </Button>
                </Col>

                {toggleButton ? (
                    <></>
                ) : (
                    <div className={cx("nav-mobile")}>
                        <MenuNav items={MENU_NAV} menuMobile />
                        <Form className={"d-flex " + cx("search-mobile")}>
                            <Form.Control
                                className={cx("search-input")}
                                type="text"
                                placeholder="Search"
                            />
                            <button className={cx("search-btn")}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Form>
                    </div>
                )}
            </Container>  
        </div>
    );
}

export default Header;
