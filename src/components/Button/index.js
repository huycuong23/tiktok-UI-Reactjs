import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    className,
    to,
    href,
    children,
    onClick,
    disabled,
    rounded,
    outline,
    tranparent,
    primary,
    iconleft,
    iconright,
    ...passProps
}) {
    let Comp = 'button';
    const prop = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(prop).forEach(key => {
            if (key.startsWith("on") && typeof prop[key] == "function") {
                delete prop[key];
            }
        })
    }
    if (to) {
        prop.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
        prop.href = href;
    }
    const classes = cx('Wrapper', className, {
        primary,
        outline,
        tranparent,
        disabled,
        rounded,
    });
    return (
        <Comp {...prop} className={classes}>
            {iconleft && <span className={cx("icon")}>{iconleft}</span>}
            <span className={cx("title")}>{children}</span>
            {iconright && <span className={cx("icon")}>{iconright}</span>}
        </Comp>
    );
}
Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    tranparent: PropTypes.bool,
    primary: PropTypes.bool,
    iconleft: PropTypes.node,
    iconright: PropTypes.node,
}
export default Button;
