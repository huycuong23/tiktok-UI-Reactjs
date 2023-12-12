import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from "./Profile.module.scss"
import classNames from 'classnames/bind';
import { Profile as ProfileAPI } from '~/services/Profile';


const cx = classNames.bind(styles);
function Profile() {
    const params = useParams();
    const [profile, setProfile] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            const result = await ProfileAPI(params.user.slice(1));
            setProfile(result[0]);
        };
        fetchApi();
    }, [params.user]);
    return (
        <div>
            <header className={cx("header")}>
                <div className={cx("info")}>
                    <Image src={profile.avatar} className={cx("info-avt")}/>
                    <div className={cx("info-name")}>
                        <span><h2>{profile.full_name} </h2>
                        {profile.tick && <svg width="20" data-e2e="" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>}
                        </span>
                        <p>{profile.nickname}</p>
                        <Button primary className={cx("button-follow")}>Follow</Button>
                    </div>
                </div>
                <div className={cx("more")}>
                    <svg
                        class="css-1ss3xbd-StyledShareIcon ee7zj8d19"
                        width="24"
                        data-e2e=""
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5546 8.35111L13.3171 8.16468V7.37972V3.50006L21.4998 12.0001L13.3171 20.5001V16.3738V15.3664L12.3098 15.3738C8.838 15.3994 5.4275 17.0466 2.49983 19.5882C2.54612 19.2536 2.67769 18.641 2.94391 17.8329C3.3786 16.5132 4.01326 15.1988 4.88691 13.971C6.71045 11.4083 9.24414 9.16046 12.5546 8.35111Z"
                            stroke="#161823"
                            stroke-width="2"
                        ></path>
                    </svg>
                    <svg
                        width="24"
                        data-e2e=""
                        height="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24ZM20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24ZM36 24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28C37.7909 28 36 26.2091 36 24Z"
                        ></path>
                    </svg>
                </div>
            </header>
            <div className={cx("follow")}>
                <p>{profile.followings_count} Đang Follow</p>
                <p>{profile.followers_count} Followers</p>
                <p>{profile.likes_count} Thích</p>
            </div>
            <div className={cx("bio")}>{profile.bio}</div>
        </div>
    );
}

export default Profile;
