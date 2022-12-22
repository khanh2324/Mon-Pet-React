import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    active = false,
    primary = false,
    outline = false,
    noBefore = false,
    subnav = false,
    mobile = false,
    scroll = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    const [showBtnScroll ,setShowBtnScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY >= 200){
                setShowBtnScroll(true);
            } else {
                setShowBtnScroll(false);
            }
            //hoặc có thể viết setShowBtnScroll(window.scrollY >= 200);
        }
    
        window.addEventListener('scroll', handleScroll);
        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    


    let Comp = 'button';
    //  xử lý vơi các trương hop the a hoac link
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if(disabled){
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete  props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        active,
        primary,
        outline,
        noBefore,
        subnav,
        mobile,
        scroll,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className, // custom class
    });

    return (

        <>
            { scroll  ? (
                <>
                    {showBtnScroll && (
                        <Comp className={classes} {...props}>
                            <span className={cx('title')}>
                                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                                {children}
                                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
                            </span>
                        </Comp>
                    )}
                </>
            ) : (
               <>
                    <Comp className={classes} {...props}>
                        <span className={cx('title')}>
                            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                            {children}
                            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
                        </span>
                    </Comp>
               </>
            )}
        </>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    active: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    noBefore: PropTypes.bool,
    subnav: PropTypes.bool,
    mobile: PropTypes.bool,
    scroll: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;
