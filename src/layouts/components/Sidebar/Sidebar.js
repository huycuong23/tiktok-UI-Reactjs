import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu from './Menu';
import { MenuItem } from './Menu';
import config from '~/config/config';
import { faCompass, faHouse, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<FontAwesomeIcon icon={faHouse} />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon icon={faUser} />}
                />
                <MenuItem
                    title="Discover"
                    to={config.routes.discover}
                    icon={<FontAwesomeIcon icon={faCompass} />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<FontAwesomeIcon icon={faVideo} />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
