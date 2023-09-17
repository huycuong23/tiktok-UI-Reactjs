import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faComment,
    faHeart,
    faMusic,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import PropUp from '~/layouts/components/Sidebar/Menu/PropUp';

const cx = classNames.bind(styles);
function Home() {
    const user = {
        avatar: "c",
        full_name: "c",
        tick: "c",
        nickname: "c",
        followers_count: "c",
        likes_count: "c",
    }
    return (
        <>
            <div className={cx('container')}>
                   <PropUp data={user}>
                        <Image
                            src="https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-avatar-nu-de-thuong.jpg"
                            className={cx('avatar')}
                            alt="avatar"
                        />
                   </PropUp>
        
                    <div className={cx('content')}>
                        <div className={cx('content-info')}>
                            <div className={cx('info')}>
                                <p>thanhlong68301</p>
                                <p>thanh long meme lo</p>
                            </div>
                        <div className={cx('title')}>
                            <p>#meme</p>
                        </div>
                        <div className={cx('music')}>
                            <div className={cx('music-icon')}>
                                <FontAwesomeIcon icon={faMusic} />
                            </div>
                            <p>original sound - verde - CAIN</p>
                        </div>
                        <div className={cx('source')}>
                            <iframe className={cx("video")} src="https://www.youtube.com/embed/5R8EeRYW-74?si=PGBXiekikFG8_Zlg&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className={cx('react')}>
                                <div className={cx("react-icon")}>
                                    <div className={cx("icon")}><FontAwesomeIcon icon={faHeart} /></div>
                                    <p>1000</p>
                                </div>
                                <div className={cx("react-icon")}>
                                    <div className={cx("icon")}><FontAwesomeIcon icon={faComment} /></div>
                                    <p>1000</p>
                                </div>
                                <div className={cx("react-icon")}>
                                    <div className={cx("icon")}><FontAwesomeIcon icon={faBookmark} /></div>
                                    <p>1000</p>
                                </div>
                                <div className={cx("react-icon")}>
                                    <div className={cx("icon")}><FontAwesomeIcon icon={faShare} /></div>
                                    <p>1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className={cx('button')} outline primary>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx("end-video-line")}></div>
        </>
    );
}

export default Home;
