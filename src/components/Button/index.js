import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    onClick,
    disabled,
    rounded,
    outline,
    tranparent,
    primary,
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
    const classes = cx('Wrapper', {
        primary,
        outline,
        tranparent,
        disabled,
        rounded
    });
    return (
        <Comp {...prop} className={classes}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
