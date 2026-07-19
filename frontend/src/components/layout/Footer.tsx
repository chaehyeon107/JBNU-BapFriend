import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brandBlock}>
        <span className={styles.brandName}>전북대맛집</span>
        <span className={styles.copyright}>
          © 2026 전북대학교 대학로 소모임 프로젝트 · Designed for Local Foodies
        </span>
      </div>
      <div className={styles.linkRow}>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
        <span>고객센터</span>
      </div>
    </footer>
  );
}
