import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContact}>
        <div>
          <span style={{ fontSize: "20px" }}>
            Đăng kí nhận thông tin từ chúng tôi
          </span>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            style={{
              fontSize: "20px",
              outline: "none",
              border: "1px solid transparent",
              padding: "10px 15px",
              marginLeft: "15px",
              width: "400px",
            }}
          ></input>
          <input
            type="submit"
            value="Đăng ký ngay"
            className="btn-hover_red"
            style={{
              fontSize: "20px",
              outline: "none",
              border: "1px solid transparent",
              padding: "10px 15px",
              background: "black",
              color: "#fff",
              transition: "all 0.3s",
            }}
          ></input>
        </div>
        <div className={styles.mxh}>
          <a href="https://www.facebook.com/">
            <i class="fa-brands fa-facebook-f"></i> Facebook
          </a>
          <a href="https://twitter.com/">
            <i class="fa-brands fa-twitter"></i> Twitter
          </a>
          <a href="https://www.instagram.com/">
            <i class="fa-brands fa-square-instagram"></i> Instagram
          </a>
          <a href="https://www.youtube.com/">
            <i class="fa-brands fa-youtube"></i> Youtube
          </a>
        </div>
      </div>
      <div>
        <div className={`grid ${styles.footerTop}`}>
          <div>
            <span>Danh mục</span>
            <ul>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>

          <span>Hướng dẫn</span>
          <ul>
            <li>a</li>
            <li>a</li>
          </ul>

          <span>Chính sách</span>
          <ul>
            <li>a</li>
            <li>a</li>
          </ul>

          <span>Hỗ trợ</span>
          <ul>
            <li>a</li>
            <li>a</li>
          </ul>

          <span>Thông tin liên hệ</span>
          <ul>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          Bản quyền thuộc về HMC Team|Cung cấp bởi Sapo
        </div>
      </div>
    </div>
  );
};

export default Footer;
