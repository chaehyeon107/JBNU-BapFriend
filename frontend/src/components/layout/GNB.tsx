import { NavLink } from 'react-router-dom';
import { Utensils, Search, Bell } from 'lucide-react';
import { avatarUser } from '../../assets/images/home';
import styles from './GNB.module.css';

const NAV_ITEMS = [
  { label: '홈', to: '/' },
  { label: '카테고리', to: '/category' },
  { label: '기록', to: '/record' },
  { label: '추천', to: '/recommend' },
  { label: '테마지도', to: '/theme-map' },
  { label: '친구', to: '/friends' },
  { label: '마이페이지', to: '/mypage' },
];

export default function GNB() {
  return (
    <header className={styles.gnb}>
      <div className={styles.logoArea}>
        <div className={styles.logoMark}>
          <Utensils size={18} />
        </div>
        <span className={styles.logoText}>전북대맛집</span>
      </div>

      <div className={styles.search}>
        <Search size={16} />
        <input className={styles.searchInput} placeholder="대학로 맛집, 메뉴 검색..." />
      </div>

      <nav className={styles.navMenu}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.label}</span>
                {isActive && <span className={styles.navIndicator} />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className={styles.userActions}>
        <button className={styles.notification} aria-label="알림">
          <Bell size={20} />
        </button>
        <div className={styles.profile}>
          <img className={styles.profileAvatar} src={avatarUser} alt="프로필" />
          <span className={styles.profileName}>덕진동_식신</span>
        </div>
      </div>
    </header>
  );
}
