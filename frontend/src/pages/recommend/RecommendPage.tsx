import { useState, useRef } from 'react';
import {
  Play,
  ChevronRight,
  Compass,
  ChevronDown,
  Pizza,
  Cookie,
  Hamburger,
  Coffee,
  Beer,
  Bookmark,
  Star,
  Utensils,
} from 'lucide-react';
import {
  MENU_POOL,
  SLOT_SHOPS,
  CATEGORIES,
  RESTAURANTS,
  MENU_TABS,
  TODAY_SHOPS,
} from './data';
import styles from './RecommendPage.module.css';

const CATEGORY_ICONS: Record<string, typeof Pizza> = {
  한식: Pizza,
  중식: Cookie,
  '일식/돈까스': Hamburger,
  양식: Cookie,
  세계요리: Pizza,
  '카페/디저트': Coffee,
  술집: Beer,
};

export default function RecommendPage() {
  const [menuResult, setMenuResult] = useState('제육볶음');
  const [spinning, setSpinning] = useState(false);
  const [activeCategory, setActiveCategory] = useState('한식');
  const [activeMenuTab, setActiveMenuTab] = useState('칼국수');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    let ticks = 0;
    intervalRef.current = setInterval(() => {
      setMenuResult(MENU_POOL[Math.floor(Math.random() * MENU_POOL.length)]);
      ticks += 1;
      if (ticks > 15) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setMenuResult(MENU_POOL[Math.floor(Math.random() * MENU_POOL.length)]);
        setSpinning(false);
      }
    }, 80);
  };

  return (
    <div className={styles.page}>
      <div className={styles.mainBody}>
        <section className={styles.hero}>
          <div className={styles.heroHeader}>
            <span className={styles.heroTag}>오늘 뭐 먹지?</span>
            <h1 className={styles.heroTitle}>오늘의 메뉴가 고민되나요?</h1>
            <p className={styles.heroSubtitle}>
              전북대 대학로 최고의 맛집 메뉴들을 무작위로 돌려서 골라드릴게요!
            </p>
          </div>

          <div className={styles.slotRow}>
            <div className={styles.slotMachine}>
              <div className={styles.slotDisplay}>
                <span className={styles.slotDisplayLabel}>SELECTING TODAY&apos;S FEAST</span>
                <div className={styles.slotResult}>
                  <span className={styles.slotBracket}>[</span>
                  <span className={styles.slotMenuName}>{menuResult}</span>
                  <span className={styles.slotBracket}>]</span>
                </div>
                <span className={styles.slotHint}>
                  {spinning ? '메뉴를 고르는 중...' : `맛있는 오늘의 선택, ${menuResult} 당첨!`}
                </span>
              </div>
              <button className={styles.spinBtn} onClick={spin} disabled={spinning}>
                <Play size={16} />
                다시 돌리기 (SPIN)
              </button>
            </div>

            <div className={styles.resultArea}>
              <div className={styles.resultHeader}>
                <h2 className={styles.resultTitle}>
                  오늘의 추천 메뉴 <span className={styles.resultTitleAccent}>&quot;{menuResult}&quot;</span>{' '}
                  추천 맛집!
                </h2>
                <p className={styles.resultSubtitle}>
                  전북대 학생들이 가장 사랑하는 {menuResult} 맛집 3선
                </p>
              </div>
              <div className={styles.miniShopList}>
                {SLOT_SHOPS.map((shop) => (
                  <div className={styles.miniShopCard} key={shop.name}>
                    <img className={styles.miniShopThumb} src={shop.photo} alt={shop.name} />
                    <div className={styles.miniShopInfo}>
                      <div className={styles.miniShopTitleRow}>
                        <span className={styles.miniShopName}>{shop.name}</span>
                        <span className={styles.miniShopCategory}>{shop.category}</span>
                      </div>
                      <span className={styles.miniShopDistance}>{shop.distance}</span>
                      <div className={styles.miniShopRating}>
                        <Star size={12} fill="#fbbf24" color="#fbbf24" />
                        <span className={styles.miniShopRatingValue}>{shop.rating}</span>
                        <span className={styles.miniShopRatingCount}>({shop.reviewCount})</span>
                      </div>
                    </div>
                    <button className={styles.goButton} aria-label="이동">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.categorySection}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.sectionTitleBlock}>
              <h2 className={styles.sectionTitle}>카테고리별 맛집 추천</h2>
              <p className={styles.sectionSubtitle}>
                원하는 음식 분야를 골라 전북대 골목의 대표 맛집을 확인해 보세요.
              </p>
            </div>
            <div className={styles.headerFilters}>
              <button className={styles.filterChip}>
                <Compass size={14} />
                내 반경 500m 이내
              </button>
              <button className={styles.filterChip}>
                영업 중인 곳만
                <ChevronDown size={12} />
              </button>
            </div>
          </div>

          <div className={styles.categoryChips}>
            {CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat];
              return (
                <button
                  key={cat}
                  className={`${styles.categoryChip} ${
                    activeCategory === cat ? styles.categoryChipActive : ''
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <Icon size={18} />
                  {cat}
                </button>
              );
            })}
          </div>

          <div className={styles.restaurantGrid}>
            {RESTAURANTS.map((r) => (
              <div className={styles.restaurantCard} key={r.name}>
                <img className={styles.restaurantImg} src={r.photo} alt={r.name} />
                <div className={styles.restaurantBody}>
                  <div className={styles.restaurantHeaderRow}>
                    <div>
                      <div className={styles.restaurantTagRow}>
                        <span className={styles.restaurantTag}>{r.tag}</span>
                        <span className={styles.restaurantDot}>•</span>
                        <span className={styles.restaurantDistance}>{r.distance}</span>
                      </div>
                      <p className={styles.restaurantName}>{r.name}</p>
                    </div>
                    <button className={styles.bookmarkBtn} aria-label="북마크">
                      <Bookmark size={16} />
                    </button>
                  </div>
                  <p className={styles.restaurantAddress}>{r.address}</p>
                  <div className={styles.restaurantDivider} />
                  <div className={styles.restaurantFooterRow}>
                    <div>
                      <p className={styles.restaurantMenuLabel}>대표메뉴</p>
                      <p className={styles.restaurantMenuName}>{r.menu}</p>
                    </div>
                    <div className={styles.restaurantPriceRatingBlock}>
                      <span className={styles.restaurantPrice}>{r.price}</span>
                      <div className={styles.restaurantRatingRow}>
                        <Star size={12} fill="#fbbf24" color="#fbbf24" />
                        <span className={styles.restaurantRatingValue}>{r.rating}</span>
                        <span className={styles.restaurantRatingCount}>({r.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.todaySection}>
          <div className={styles.todayHeader}>
            <h2 className={styles.sectionTitle}>오늘의 추천메뉴</h2>
            <p className={styles.sectionSubtitle}>
              요일 및 시간대별 최적화된 대학로의 추천 요리 컬렉션입니다.
            </p>
          </div>

          <div className={styles.menuTabRow}>
            {MENU_TABS.map((tab) => (
              <button
                key={tab.name}
                className={`${styles.menuTab} ${
                  activeMenuTab === tab.name ? styles.menuTabActive : ''
                }`}
                onClick={() => setActiveMenuTab(tab.name)}
              >
                {tab.name}
                <span
                  className={`${styles.menuTabCount} ${
                    activeMenuTab === tab.name ? styles.menuTabCountActive : ''
                  }`}
                >
                  {tab.count}곳
                </span>
              </button>
            ))}
          </div>

          <div className={styles.selectedRecs}>
            <div className={styles.selectedRecsHeader}>
              <Utensils size={18} />
              현재 선택된 추천메뉴 <span className={styles.selectedRecsAccent}>&quot;{activeMenuTab}&quot;</span>{' '}
              관련 유명 가게 리스트
            </div>
            <div className={styles.horizontalRow}>
              {TODAY_SHOPS.map((shop) => (
                <div className={styles.horizontalShopItem} key={shop.name}>
                  <img className={styles.horizontalShopImg} src={shop.photo} alt={shop.name} />
                  <div className={styles.horizontalShopDetails}>
                    <div>
                      <p className={styles.horizontalShopName}>{shop.name}</p>
                      <p className={styles.horizontalShopAddress}>{shop.address}</p>
                    </div>
                    <div className={styles.horizontalSpecRow}>
                      <div>
                        <p className={styles.specLabel}>주요메뉴</p>
                        <p className={styles.specValue}>{shop.menu}</p>
                      </div>
                      <div className={styles.restaurantPriceRatingBlock}>
                        <span className={styles.restaurantPrice}>{shop.price}</span>
                        <div className={styles.restaurantRatingRow}>
                          <Star size={12} fill="#fbbf24" color="#fbbf24" />
                          <span className={styles.restaurantRatingValue}>{shop.rating}</span>
                          <span className={styles.restaurantRatingCount}>
                            ({shop.reviewCount})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBrandBlock}>
          <span className={styles.footerBrandName}>전북대맛집</span>
          <p className={styles.footerBrandDesc}>
            전북대학교 학생들이 추천하고 엄선하는 대학로 미식 지도 서비스. 동아리 프로젝트에서
            시작되어 로컬 푸디들의 찐 보물 지도가 되기까지.
          </p>
          <span className={styles.footerCopyright}>
            © 2026 전북대학교 대학로 소모임 프로젝트 · Designed for Local Foodies
          </span>
        </div>
        <div className={styles.footerLinkGroups}>
          <div className={styles.footerLinkGroup}>
            <span className={styles.footerLinkGroupTitle}>서비스</span>
            <span className={styles.footerLink}>홈</span>
            <span className={styles.footerLink}>카테고리 탐색</span>
            <span className={styles.footerLink}>실시간 랭킹</span>
          </div>
          <div className={styles.footerLinkGroup}>
            <span className={styles.footerLinkGroupTitle}>커뮤니티</span>
            <span className={styles.footerLink}>맛기록 타임라인</span>
            <span className={styles.footerLink}>친구 찾기</span>
            <span className={styles.footerLink}>마이 리스트</span>
          </div>
          <div className={styles.footerLinkGroup}>
            <span className={styles.footerLinkGroupTitle}>고객 지원</span>
            <span className={styles.footerLink}>이용약관</span>
            <span className={styles.footerLink}>개인정보처리방침</span>
            <span className={styles.footerLink}>제휴 및 문의</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
