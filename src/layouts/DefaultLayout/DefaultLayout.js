import className from 'classnames/bind'
import styles from './DefaultLayout.module.scss';

import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";

const cx = className.bind(styles);


function DefaultLayout({ children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;