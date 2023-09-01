import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PropWrapper } from '~/components/Prop';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Menu({ hideOnClick = false, children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, i) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={i}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            hideOnClick={hideOnClick}
            delay={[50, 200]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PropWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => setHistory((prev) => prev.splice(-1))}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PropWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
MenuItem.propTypes = {
    hideOnClick: PropTypes.bool,
    children: PropTypes.node,
    items: PropTypes.array,
    onChange: PropTypes.func,
};
export default Menu;
