import classNames from 'classnames/bind';
import React, { useEffect, useState, useRef } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { Wrapper as PropWrapper } from '~/components/Prop';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Search() {
    const [searchResults, setSreachresults] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(true);
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSreachresults([1, 4, 6]);
        }, 0);
    });
    const hanldeHideResults = () => setShowResults(false)
    return (
        <HeadLessTippy
            interactive={true}
            visible={showResults && searchResults.length > 0}
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
            onClickOutside={hanldeHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className={cx('search-inp')}
                    type="text"
                    placeholder="Search accounts and videos "
                    spellCheck={false}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchText &&
                    ((
                        <button
                            onClick={() => {
                                setSearchText('');
                                inputRef.current.focus();
                            }}
                            className={cx('search-clr')}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    ) || <FontAwesomeIcon className={cx('search-ld')} icon={faSpinner} />)}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;