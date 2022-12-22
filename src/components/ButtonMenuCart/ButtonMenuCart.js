import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBagShopping,
    faBasketShopping,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import styles from "./ButtonMenuCart.module.scss";
import Button from "~/components/Button";
const cx = classNames.bind(styles);

const MENU_BTN = [
    {
        title: "Đồ cho Pet Độc lạ",
        href: "https://bom.so/Q2SCfh",
        icon: <FontAwesomeIcon icon={faBagShopping} />,
    },
    {
        title: "Đồ cho Pet Giá rẻ",
        href: "https://bom.so/D2oyiU",
        icon: <FontAwesomeIcon icon={faBasketShopping} />,
    },
    {
        title: "Facebook Page",
        href: "https://www.facebook.com/monspet/",
        icon: <FontAwesomeIcon icon={faFacebookF} />,
    },
];

function ButtonMenuCart() {
    const [toggleMenuCart, setToggleMenuCart] = useState(false);

    let showAnimation = 'showMenuLink ease 0.3s'
    let hideAnimation = 'hideMenuLink ease 0.3s';

    const handlerToggle = () => {
        let MenuBtn = document.querySelector(".menu-btn");
        let Btn = document.querySelector(".main-btn");
        let Title = document.querySelector(".main-title");

        if (toggleMenuCart) {
            setToggleMenuCart(false);
            MenuBtn.style.opacity = '0';
            Title.style.opacity = '1';
            MenuBtn.style.animation = hideAnimation;
            Btn.classList.remove('turn');
        } else {
            setToggleMenuCart(true);
            MenuBtn.style.opacity = '1';
            Title.style.opacity = '0';
            MenuBtn.style.animation = showAnimation;
            Btn.classList.add('turn');
        }
    };

    const renderItems = () => {
        return MENU_BTN.map((item, index) => {
            return (
                <div className={cx("wrap")} key={index}>
                    <div className={cx("title")}>{item.title}</div>
                    <Button
                        primary
                        small
                        leftIcon={item.icon}
                        href={item.href}
                    ></Button>
                </div>
            );
        });
    };

    return (
        <div className={cx("btn-menu-cart")}>
            <div className={cx("menu-btn") + " menu-btn"}>{renderItems()}</div>

            <div className={cx("btn-cart")}>
                <div className={cx("wrap")}>
                    <div className={cx("title")  + " main-title"}>Pet Shopping</div>
                    <Button
                        className='main-btn'
                        primary
                        onClick={handlerToggle}
                        leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                    ></Button>
                </div>
            </div>
        </div>
    );
}

ButtonMenuCart.propTypes = {};
export default ButtonMenuCart;
