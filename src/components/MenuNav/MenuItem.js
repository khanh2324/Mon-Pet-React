import className from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';


import Button from "~/components/Button";
import styles from './MenuNav.module.scss';

const cx = className.bind(styles);

function MenuItem({data,onClick }) {
    // const classes = cx('menu-item', {
    //     separate: data.separate
    // });
    // const renderItem = () => {
    //     <div className={cx('')}
    // }
    // const renderTyppy = () => {
    //     if (data.child == true) {
    //         return (
    //             <Tippy
    //                 delay={[0,700]}
    //                 interactive
    //                 placement='bottom-end'
    //                 render={}
    //             ></Tippy>
    //         )
    //     }
    // }
    return (
        <Button 
            className={data.className}
            rightIcon={data.icon}
            to={data.to}
            active={data.active}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;