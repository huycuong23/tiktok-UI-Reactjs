import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src="https://vapa.vn/wp-content/uploads/2022/12/anh-avatar-cute-054.jpg" alt="Phuong" />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>Nguyen Van B</span>
                    <FontAwesomeIcon className={cx("check-circle")} icon={faCheckCircle} />
                </p>
                <span className={cx("user-name")}>@NgvanB</span>
            </div>
        </div>
     );
}

export default AccountItem;