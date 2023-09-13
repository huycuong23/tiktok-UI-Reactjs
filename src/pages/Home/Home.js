import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('container')}>
            <header className={cx('header')}>
                <Image className={cx('avatar')} alt="avatar" />
                <div className={cx('header-info')}>
                    <div>
                        <div className={cx('user-name')}>
                            <span className={cx('name')}>
                                <span>{'name'}</span>
                                {/* {data.tick && (
                            <FontAwesomeIcon className={cx('check-circle')} icon={faCheckCircle} />
                        )} */}
                            </span>
                            <span className={cx('user-name')}>{'nickname'}</span>
                        </div>
                        <p className={cx('title')}>Title</p>
                    </div>
                    <Button className={cx('button')} primary outline>
                        Follow
                    </Button>
                </div>
            </header>
        </div>
    );
}

export default Home;
