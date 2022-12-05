import className from "classnames/bind";
import styles from "./MenuNav.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import Button from "~/components/Button";
// import MenuItem from './MenuItem'
const cx = className.bind(styles);
//default value
// const defaultFn = () => {}
// , onChange = defaultFn

function MenuNav({ children, items = [] }) {
    // const [history, setHistory] = useState([{ data: items}]);
    // const current = history[history.length - 1];

    // const renderItems = () => {
    //     return current.data.map((item, index) => {
    //         const isParent = !!item.children;
    //         return (
    //             <MenuItem
    //                 key={index}
    //                 data={item}
    //                 onClick={() => {
    //                     if (isParent) {
    //                         setHistory((prev) => [...prev, item.children]);
    //                     }else {
    //                         onChange(item)
    //                     }
    //                 }}
    //             />
    //         )
    //     })
    // }

    const renderItems = () => {
        return items.map((item, index) => {
            // const isParent = !!item.child;
            // const renderSubNav = (item) =>{
            //     if(isParent){
            //         <Tippy
            //             interactive
            //             render={(attrs) => (
            //                 <div>
            //                     Hello
            //                 </div>
            //             )}
            //         >

            //         </Tippy>
            //     }else{
            //         return (
            //             item.title
            //         )
            //     }
            // }

            return (
                <Button
                    key={index}
                    className={item.className}
                    rightIcon={item.icon}
                    active={item.active}
                >
                    {item.title}
                </Button>
            );
        });
    };

    return <div>{renderItems()}</div>;
}

export default MenuNav;
