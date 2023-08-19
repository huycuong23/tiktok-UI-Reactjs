import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PropWrapper } from '~/components/Prop';
import MenuItem from './MenuItem';
import tippy from 'tippy.js';
import 'tippy.js/animations/scale.css';

const cx = classNames.bind(styles);
tippy('.content', {
    animation: 'scale',
});
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, i) => {
            return <MenuItem key={i} data={item} />;
        });
    };
    return (
        <Tippy
            delay={[50, 700]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PropWrapper>{renderItems()}</PropWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
