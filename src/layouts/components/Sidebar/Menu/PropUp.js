import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Prop';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Button from '~/components/Button/Button';
import Image from '~/components/Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(style);
const PropUp = ({ children, data }) => {
    return (
        <div>
            <Tippy
                delay={[700, 0]}
                interactive={true}
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('box')} tabIndex="-1" {...attrs}>
                        <Wrapper>
                            <div className={cx('header')}>
                                <Image
                                    className={cx('avatar')}
                                    src={data.avatar}
                                    alt="avatar user"
                                />
                                <Button className={cx("button")} primary to={'/@' + data.nickname}>
                                    Follow
                                </Button>
                            </div>
                            <div className={cx('info')}>
                                <p className={cx('name')}>
                                    <span>{data.full_name}</span>
                                    {data.tick && (
                                        <FontAwesomeIcon
                                            className={cx('check-circle')}
                                            icon={faCheckCircle}
                                        />
                                    )}
                                </p>
                                <span className={cx('user-name')}>{data.nickname}</span>
                            </div>
                            <div className={cx("follow")}>
                                <p className={cx("follow-text")}>{data.followers_count} <span>Followers</span></p>
                                <p className={cx("follow-text")}>{data.likes_count} <span>Likes</span></p>
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
};

export default PropUp;
