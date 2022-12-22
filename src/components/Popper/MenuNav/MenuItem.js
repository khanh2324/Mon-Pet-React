import className from "classnames/bind";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

import Button from "~/components/Button";
import Wrapper from "~/components/Popper";
import styles from "./MenuNav.module.scss";

const cx = className.bind(styles);

function MenuItem({ data, onClick, subNav = [], menuMobile = false }) {
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            // handle Onclick khi can
            console.log("totally custom!")
        );

        return (
            <Button
                className={data.classNameMobile}
                rightIcon={data.icon}
                active={data.active}
                to={data.to}
                onClick={decoratedOnClick}
            >
                {children}
                
            </Button>
        );
    }

    const renderSubNav = () => {
        return subNav.map((item, index) => {
            return (
                <Wrapper key={index}>
                    <Button className={item.className}>{item.title}</Button>
                </Wrapper>
            );
        });
    };

    return (
        //handle responsive
        <>
            {menuMobile ? (
                <>
                    {data.subNav ? (
                        <Accordion>
                            <Card.Header>
                                <CustomToggle eventKey="0">
                                    {data.title}
                                </CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>{renderSubNav()}</Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    ) : (
                        <Button
                            className={data.classNameMobile}
                            rightIcon={data.icon}
                            active={data.active}
                            to={data.to}
                        >
                            {data.title}
                        </Button>
                    )}
                </>
            ) : (
                // handler SubNav
                <>
                    {data.subNav ? (
                        <Tippy
                            interactive
                            offset={[0, 2]}
                            delay={[0, 200]}
                            render={renderSubNav}
                            placement="bottom"
                        >
                            <button className={cx(data.className)}>
                                {data.title}
                                {data.icon}
                            </button>
                        </Tippy>
                    ) : (
                        <Button
                            className={data.className}
                            rightIcon={data.icon}
                            active={data.active}
                            to={data.to}
                        >
                            {data.title}
                        </Button>
                    )}
                </>
            )}
        </>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
