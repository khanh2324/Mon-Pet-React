import className from "classnames/bind";
import styles from "./MenuNav.module.scss";


import MenuItem from './MenuItem'
const cx = className.bind(styles);


const PET_SUBNAV = [
    {
        title: "Mèo",
        className: "subnav",
        classNameMobile: "mobile",
    },
    {
        title: "Chó",
        className: "subnav",
        classNameMobile: "mobile",
    },
    {
        title: "Chim",
        className: "subnav",
        classNameMobile: "mobile",
    },
    {
        title: "Hamter",
        className: "subnav",
        classNameMobile: "mobile",
    },
    {
        title: "Các Loài Động Vật Khác",
        className: "subnav",
        classNameMobile: "mobile",
    },
];

function MenuNav({ children, items = [], menuMobile = false }) {

    const renderItems = () => {
        return items.map((item, index) => {
            return (
               <MenuItem
                    key={index}
                    subNav={PET_SUBNAV}
                    data={item}
                    menuMobile = {menuMobile}
                />
            );
        });
    };

    return (
        <>
            {renderItems()}
        </>
    );
}

export default MenuNav;
