import styles from './Header.module.scss';
import images from '~/assets/images';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </div>
                <div className={cx('search')}>
                    <input
                        className={cx('search-inp')}
                        type="text"
                        placeholder="Search accounts and videos "
                        spellCheck={false}
                    />
                    <button className={cx('search-clr')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('search-ld')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('notication')}>
                    <button className={cx('upload')}>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Tải lên</p>
                    </button>
                    <FontAwesomeIcon className={cx('messeger')} icon={faPaperPlane} />
                    <FontAwesomeIcon className={cx('notication-box')} icon={faEnvelope} />
                    <img
                        src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                        alt="avatar"
                        className={cx('avatar')}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;
