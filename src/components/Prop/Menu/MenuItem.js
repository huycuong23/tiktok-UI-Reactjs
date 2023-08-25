import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({data, onClick}) {
    const classes = cx("button-item", {
        linetop: data.linetop
    })
    return <Button onClick={onClick} className={classes} to={data.to} iconleft={data.icon} tranparent>{data.title}</Button>;
}

export default MenuItem;