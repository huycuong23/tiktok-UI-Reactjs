import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-backg')}></div>
            <div className={cx('sidebar-scrool')}>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
                <h2>Sidebar</h2>
            </div>
        </aside>
    );
}

export default Sidebar;
