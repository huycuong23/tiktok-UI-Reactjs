import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function MenuItem({data, onClick}) {
    const classes = cx("button-item", {
        linetop: data.linetop
    })
    return <Button onClick={onClick} className={classes} to={data.to} iconleft={data.icon} tranparent>{data.title}</Button>;
}
MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
}
export default MenuItem;