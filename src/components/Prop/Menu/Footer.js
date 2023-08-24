import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';


const cx = classNames.bind(styles);
function Footer({ title, Logout }) {
    
    return (
        <Button onClick={Logout} className={cx("button-item", "footer")} iconleft={<FontAwesomeIcon icon={faSignOut} />} tranparent>{title}</Button>
    );
}

export default Footer;

