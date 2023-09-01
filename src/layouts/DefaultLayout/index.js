import styles from './DefaltLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node
}
export default DefaultLayout;
