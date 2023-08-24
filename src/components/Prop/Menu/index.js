import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PropWrapper } from '~/components/Prop';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import Footer from './Footer';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange, currentUser }) {
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
            delay={[50, 700]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PropWrapper>
                        {history.length > 1 && (
                            <Header
                                onBack={() => setHistory((prev) => prev.splice(-1))}
                                title={'Language'}
                            />
                        )}
                        {history.length > 1 && <div className={cx('content-select')}></div>}
                        {renderItems()}
                        {currentUser ? <Footer title={"Log out"}/> : null}
                    </PropWrapper>
                </div>
            )}
            onHide={()=> setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
