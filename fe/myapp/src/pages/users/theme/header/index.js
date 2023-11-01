import styles from "./index.module.css";

const Header = () => {
  return (
    <div style={{ width: "100vw", background: "#fff", boxShadow: "0 0 3px" }}>
      <div className={`${styles.header} grid`}>
        <div className={styles.logo}>
          <span style={{ color: "red" }}>H </span>
          <span style={{ color: "green" }}>M </span>
          <span style={{ color: "blue" }}>C</span>
        </div>
        <div style={{ height: "100%" }}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="/" className={`${styles.navLink} active`}>
                Trang chủ
              </a>
            </li>
            <li className={styles.item}>
              <a href="san-pham" className={styles.navLink}>
                Sản phẩm
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.navLink}>
                Giày nam
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.navLink}>
                Giày nữ
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.navLink}>
                Big sale
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.navLink}>
                Tin tức
              </a>
            </li>
            <li className={styles.item}>
              <a href="#" className={styles.navLink}>
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
