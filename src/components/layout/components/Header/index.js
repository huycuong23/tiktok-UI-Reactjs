import styles from './Header.module.scss';
import images from '~/assets/images';
import Sreach from '~/components/layout/components/Search';
import Button from '~/components/Button';
import Menu from '~/components/Prop/Menu';
import Image from '~/components/Image';
import routesConfig from '~/config/routes';

import classNames from 'classnames/bind';
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faGear,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

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
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: routesConfig.profile,
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: 'Get Coin',
            to: routesConfig.getcoin,
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: routesConfig.setting,
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            linetop: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.root} className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </Link>
                <Sreach />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay="[100, 300]">
                                <button className={cx('upload')}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    <p>Tải lên</p>
                                </button>
                            </Tippy>
                            <Tippy content="Messenger" placement="bottom" delay="[100, 300]">
                                <button>
                                    <FontAwesomeIcon
                                        className={cx('messeger')}
                                        icon={faPaperPlane}
                                    />
                                </button>
                            </Tippy>
                            <Tippy content="Notification" placement="bottom" delay="[100, 300]">
                                <button>
                                    <FontAwesomeIcon
                                        className={cx('notication-box')}
                                        icon={faEnvelope}
                                    />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                className={cx('actions-upload')}
                                icon={<FontAwesomeIcon icon={faPlus} />}
                                tranparent
                                to="/upload"
                            >
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEM}
                        onChange={handleChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                                alt="avatar"
                                className={cx('avatar')}
                            />
                        ) : (
                            <div className={cx('actions_more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
