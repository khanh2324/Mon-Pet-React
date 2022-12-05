import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Image from "~/components/Image";
import images from "~/assets/images";
import config from "~/config";
import Button from "~/components/Button";
import MenuNav from "~/components/MenuNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const PET_SUBNAV = [
    {
        title: "Mèo",
    },
    {
        title: "Chó",
    },
    {
        title: "Chim",
    },
    {
        title: "Hamter",
    },
    {
        title: "Các Loài Động Vật Khác",
    },
];

const MENU_NAV = [
    {
        title: "Trang Chủ",
        className: "outline",
        to: "/",
        active: true,
    },
    {
        title: "Giới Thiệu",
        className: "outline",
        to: "/introduce",
    },
    {
        title: "Chuyên mục thú cưng",
        className: "outline",
        icon: <FontAwesomeIcon icon ={faChevronDown} />,
        subNav: true,
    },
    {
        title: "Tin Tức",
        className: "outline",
        to: "/news",
    },
];

function Header() {
    return (
        <div className={cx("header")}>
            <div className="grid wide">
                <div className={cx("container")}>
                    <Link to={config.routes.home} className={cx("logo-link")}>
                        <Image
                            src={images.headerLogo}
                            className={cx("logo")}
                            alt="Mon Pet"
                        />
                    </Link>

                    <div className={cx("header-nav")}>
                        <MenuNav items={MENU_NAV} />
                        
                        <Button outline leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}></Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;
