import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu from './Menu';
import { MenuItem } from './Menu';
import config from '~/config/config';
import { faCompass, faHouse, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccount from '~/components/SuggestedAccount';
import { Suggest as SuggestService } from '~/services/SuggestAccountService';
import { useEffect, useState } from 'react';
import Footer from './Footer';

const cx = classNames.bind(styles);
function Sidebar() {
    const [accounts, setAccounts] = useState([]);
    const [all, setAll] = useState('less');
    useEffect(() => {
        const fetchApi = async () => {
            const AccountItem = await SuggestService('h', all);
            setAccounts(AccountItem);
        };
        fetchApi();
    }, [all]);
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-scrool')}>
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
                <hr className={cx('line')} />
                <div className={cx('suggest')}>
                    <h3 className={cx('heading-suggest')}>Các tài khoản đang follow</h3>
                    {accounts &&
                        accounts.map((account) => (
                                <SuggestedAccount key={account.id} data={account} />
                        ))}
                    <div>
                        {all === 'less' ? (
                            <h3
                                onClick={() => {
                                    setAll('more');
                                }}
                                className={cx('footer-suggest')}
                            >
                                See all
                            </h3>
                        ) : (
                            <h3
                                onClick={() => {
                                    setAll('less');
                                }}
                                className={cx('footer-suggest')}
                            >
                                See less
                            </h3>
                        )}
                    </div>
                </div>
                <hr className={cx('line')} />
                <div className={cx('sidebar-footer')}>
                    <Footer title="Giới thiệu" to="/" />
                    <Footer title="Bảng tin" href="./" />
                    <Footer title="Liên hệ" href="./" />
                    <Footer title="Sự nghiệp" href="./" />
                </div>
                <div className={cx('sidebar-footer')}>
                    <Footer title="TikTok for Good" to="/" />
                    <Footer title="Quảng cáo" href="./" />
                    <Footer title="Developers" href="./" />
                    <Footer title="Minh bạch" href="./" />
                    <Footer title="TikTok Embeds" href="./" />
                    <Footer title="TikTok Rewards" href="./" />
                </div>
                <div className={cx('sidebar-footer')}>
                    <Footer title="Trợ giúp" to="/" />
                    <Footer title="An toàn" href="./" />
                    <Footer title="Điều khoản" href="./" />
                    <Footer title="Quyền riêng tư" href="./" />
                    <Footer title="Cổng thông tin Tác giả" href="./" />
                    <Footer title="Hướng dẫn Cộng đồng" href="./" />
                </div>
                <div className={cx('sidebar-footer')}>
                    <Footer title="Thêm" to="/" />
                </div>
                <div className={cx('sidebar-footer')}>
                    <Footer title="© 2023 TikTok" />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
