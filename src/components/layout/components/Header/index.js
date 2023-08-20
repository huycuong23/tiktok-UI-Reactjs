import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PropWrapper } from '~/components/Prop';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Prop/Menu';

import classNames from 'classnames/bind';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const handleChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
            // changer language handle
            break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={false}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PropWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PropWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                {/* <div className={cx('notication')}>
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
                </div> */}
                <div className={cx('actions')}>
                    <Button
                        className={cx('actions-upload')}
                        icon={<FontAwesomeIcon icon={faPlus} />}
                        tranparent
                        to="/upload"
                    >
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEM} onChange={handleChange}>
                        <div className={cx('actions_more')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
