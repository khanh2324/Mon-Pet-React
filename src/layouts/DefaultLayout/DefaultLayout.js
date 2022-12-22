import className from 'classnames/bind'
import styles from './DefaultLayout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";
import Button from '~/components/Button';
import ButtonMenuCart from '~/components/ButtonMenuCart';

const cx = className.bind(styles);


function DefaultLayout({ children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Footer />
            <Button 
                scroll
                href="#header"
                leftIcon={<FontAwesomeIcon icon={faChevronUp} />}
            >
            </Button>

            <ButtonMenuCart />
        </div>
    );
}

export default DefaultLayout;