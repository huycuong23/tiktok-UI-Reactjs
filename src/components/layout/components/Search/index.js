import classNames from 'classnames/bind';
import React, { useEffect, useState, useRef } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.module.scss';
import { Wrapper as PropWrapper } from '~/components/Prop';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import { search as searchServices } from '~/apiServices/searchServices';

const cx = classNames.bind(styles);
function Search() {
    const [searchResults, setSreachresults] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const debouncedSearch = useDebounce(searchText, 500);

    const inputRef = useRef();
    useEffect(() => {
        if (!debouncedSearch.trim()) {
            setSreachresults([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const searchRs = await searchServices(debouncedSearch);
            setSreachresults(searchRs);
            
            setLoading(false);
        };
        fetchApi();
    }, [debouncedSearch]);
    const hanldeHideResults = () => setShowResults(false);
    const handleOnchangeInput = (e) => {
        const value = e.target.value;
        if(value.startsWith(" ") ) {
            return;
        }
        setSearchText(value);
    }
    return (
        <HeadLessTippy
            interactive={true}
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResults.map((result) => {
                            return (
                                <AccountItem
                                    key={result.id}
                                    data={result}
                                    onClick={() => {
                                        setShowResults(false);
                                    }}
                                />
                            );
                        })}
                    </PropWrapper>
                </div>
            )}
            onClickOutside={hanldeHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchText}
                    onChange={handleOnchangeInput}
                    className={cx('search-inp')}
                    type="text"
                    placeholder="Search accounts and videos "
                    spellCheck={false}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchText && !loading && (
                    <button
                        onClick={() => {
                            setSearchText('');
                            inputRef.current.focus();
                        }}
                        className={cx('search-clr')}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('search-ld')} icon={faSpinner} />}
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadLessTippy>
    );
}

export default Search;
