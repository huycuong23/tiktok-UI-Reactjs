import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { Link } from "react-router-dom";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "~/components/Image";

const cx = classNames.bind(styles);
function AccountItem({data, onClick}) {
    return ( 
        <Link to={"/"+data.nickname} onClick={onClick} className={cx("wrapper")}>
            <Image className={cx("avatar")} src={data.avatar} alt="avatar" />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx("check-circle")} icon={faCheckCircle} />}
                </p>
                <span className={cx("user-name")}>@{data.nickname}</span>
            </div>
        </Link>
     );
}

export default AccountItem;