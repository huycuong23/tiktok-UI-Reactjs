import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { Link } from 'react-router-dom';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import PropUp from '~/layouts/components/Sidebar/Menu/PropUp';

const cx = classNames.bind(styles);

function SuggestedAccount({ data, onClick }) {
    return (
        <PropUp data={data}>
            <Link to={'/@' + data.nickname} onClick={onClick} className={cx('wrapper')}>
                <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && (
                            <FontAwesomeIcon className={cx('check-circle')} icon={faCheckCircle} />
                        )}
                    </p>
                    <span className={cx('user-name')}>@{data.nickname}</span>
                </div>
            </Link>
        </PropUp>
    );
}
SuggestedAccount.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};
export default SuggestedAccount;
