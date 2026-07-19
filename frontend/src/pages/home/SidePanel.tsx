import { useState } from 'react';
import { Pizza, Hamburger, Cookie, Coffee, Beer, Star } from 'lucide-react';
import { shops, bestPicks } from '../../data/shops';
import { homeImages } from '../../assets/images/home';
import styles from './SidePanel.module.css';

const CATEGORIES = [
  { label: '한식', icon: Pizza },
  { label: '일식/돈까스', icon: Hamburger },
  { label: '중식', icon: Cookie },
  { label: '카페/디저트', icon: Coffee },
  { label: '술집', icon: Beer },
  { label: '단골맛집', icon: Star },
];

const FILTERS = ['영업 중', '별점 4.5+', '혼밥가능', '주차장 완비', '안심식당'];

type Props = {
  onSelectShop: (id: string) => void;
};

export default function SidePanel({ onSelectShop }: Props) {
  const [activeCategory, setActiveCategory] = useState('한식');
  const [activeFilters, setActiveFilters] = useState<string[]>(['영업 중']);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter],
    );
  };

  return (
    <aside className={styles.sidePanel}>
      <div className={styles.panelHeader}>
        <h1 className={styles.panelTitle}>대학로 맛집 탐색</h1>
        <p className={styles.panelSubtitle}>전북대학교 캠퍼스 근처의 숨겨진 맛집을 골라보세요.</p>
      </div>

      <div className={styles.categoryGrid}>
        {[CATEGORIES.slice(0, 3), CATEGORIES.slice(3, 6)].map((row, i) => (
          <div className={styles.categoryRow} key={i}>
            {row.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className={`${styles.categoryChip} ${
                  activeCategory === label ? styles.categoryChipActive : ''
                }`}
                onClick={() => setActiveCategory(label)}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.filters}>
        <p className={styles.filtersTitle}>상세 조건 필터</p>
        <div className={styles.filterPills}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterPill} ${
                activeFilters.includes(filter) ? styles.filterPillActive : ''
              }`}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bestPicks}>
        <div className={styles.pickHeader}>
          <span className={styles.pickHeaderTitle}>실시간 인기 맛집 Pick</span>
          <button className={styles.pickHeaderMore}>전체보기</button>
        </div>
        <div className={styles.pickList}>
          {bestPicks.map((pick, i) => {
            const shop = shops.find((s) => s.id === pick.shopId)!;
            return (
              <button
                key={pick.shopId}
                className={styles.pickItem}
                onClick={() => onSelectShop(shop.id)}
              >
                <img
                  className={styles.pickThumb}
                  src={homeImages[`pick-${i + 1}.png`]}
                  alt={shop.name}
                />
                <div className={styles.pickInfo}>
                  <div className={styles.pickTitleRow}>
                    <span className={styles.pickRank}>{pick.rank}위</span>
                    <span className={styles.pickName}>{shop.name}</span>
                    <span className={styles.pickCategory}>
                      {shop.category} · {shop.subcategory}
                    </span>
                  </div>
                  <span className={styles.pickDistance}>{pick.distance}</span>
                  <div className={styles.pickStatsRow}>
                    <span className={styles.pickRating}>
                      <Star size={12} fill="#fbbf24" color="#fbbf24" />
                      {shop.rating}
                    </span>
                    <span className={styles.pickReviewCount}>리뷰 {shop.reviewCount}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
