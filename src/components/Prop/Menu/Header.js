import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    
    return (
        <header className={cx("header")}>
            <button className={cx("back-btn")} onClick={onBack}>
                <FontAwesomeIcon style={{backgroundColor: 'transparent'}} icon={faChevronLeft} />
            </button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    );
}
Header.propTypes = {
    title: PropTypes.node,
    onBack: PropTypes.func,
}
export default Header;

