import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Heart, Star } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import { PICK_CARDS, CATEGORIES, THEME_MAPS, PREVIEW } from './data';
import styles from './ThemeMapPage.module.css';

export default function ThemeMapPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedThemeId, setSelectedThemeId] = useState('hombap-top5');

  const visibleThemes =
    activeCategory === '전체'
      ? THEME_MAPS
      : THEME_MAPS.filter((t) => t.category === activeCategory);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div>
          <h1 className={styles.heroTitle}>전북대맛집 PICK 추천 테마지도! 🗺️</h1>
          <p className={styles.heroSubtitle}>
            대학로 터줏대감들이 깐깐하게 엄선하여 만든 테마별 맛집 랭킹 지도를 확인해보세요.
          </p>
        </div>
        <div className={styles.pickCards}>
          {PICK_CARDS.map((card) => (
            <button className={styles.pickCard} key={card.title}>
              <img className={styles.pickCardImg} src={card.photo} alt={card.title} />
              <div className={styles.pickCardBody}>
                <div className={styles.pickCardBadgeRow}>
                  <span className={styles.pickCardBadge}>전북대맛집 PICK</span>
                  <span className={styles.pickCardMeta}>
                    <MapPin size={12} />
                    {card.count}곳
                  </span>
                </div>
                <div>
                  <p className={styles.pickCardTitle}>{card.title}</p>
                  <p className={styles.pickCardDesc}>{card.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className={styles.mainBody}>
        <main className={styles.explorer}>
          <div className={styles.explorerHeader}>
            <div>
              <h2 className={styles.explorerTitle}>사용자 테마지도 탐색</h2>
              <p className={styles.explorerSubtitle}>
                전북대인들이 직접 탐험하고 완성한 다양한 일상지도를 구경해보세요.
              </p>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.btnManage} onClick={() => navigate('/theme-map/manage')}>
                내 테마지도 관리
              </button>
              <button className={styles.btnCreate} onClick={() => navigate('/theme-map/create')}>
                + 새 테마지도 만들기
              </button>
            </div>
          </div>

          <div className={styles.categoryTabs}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryTab} ${
                  activeCategory === cat ? styles.categoryTabActive : ''
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.mapsGrid}>
            {visibleThemes.map((theme) => (
              <button
                key={theme.id}
                className={`${styles.themeCard} ${
                  theme.id === selectedThemeId ? styles.themeCardPicked : ''
                }`}
                onClick={() => setSelectedThemeId(theme.id)}
              >
                <img className={styles.themeCardImg} src={theme.photo} alt={theme.title} />
                <div className={styles.themeCardBody}>
                  <div className={styles.themeCardMetaRow}>
                    <span
                      className={`${styles.themeCardTag} ${
                        theme.picked ? styles.themeCardTagPicked : ''
                      }`}
                    >
                      {theme.category}
                    </span>
                    <span className={styles.themeCardAuthor}>by {theme.author}</span>
                  </div>
                  <p className={styles.themeCardTitle}>{theme.title}</p>
                  <div className={styles.themeCardDivider} />
                  <div className={styles.themeCardFooter}>
                    <span className={styles.themeCardFooterItem}>
                      <MapPin size={12} />
                      {theme.places}곳 수록
                    </span>
                    <span className={styles.themeCardFooterItem}>
                      <Heart size={12} fill="#ff6b35" color="#ff6b35" />
                      <span className={styles.themeCardHeartCount}>{theme.likes}</span>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </main>

        <aside className={styles.previewPanel}>
          <div>
            <div className={styles.previewBadgeRow}>
              <span className={styles.previewBadge}>{PREVIEW.badge}</span>
              <span className={styles.previewAuthor}>작성자: {PREVIEW.author}</span>
            </div>
            <p className={styles.previewTitle}>{PREVIEW.title}</p>
            <p className={styles.previewDesc}>{PREVIEW.desc}</p>
          </div>

          <div>
            <p className={styles.previewSectionLabel}>지도로 한눈에 보기</p>
            <div className={styles.mockMap} style={{ marginTop: 8 }}>
              <div className={styles.mockMapCampus} />
              <span className={styles.mockMapLabel}>전북대학교 캠퍼스</span>
              <div className={styles.mockMapStreet} />
              {PREVIEW.places
                .filter((p) => p.mapLabel)
                .map((p, i) => (
                  <span
                    key={p.name}
                    className={`${styles.mockMapPin} ${p.active ? styles.mockMapPinActive : ''}`}
                    style={{ left: 59 + i * 120, top: p.active ? 144 : 109 }}
                  >
                    <Star size={10} fill={p.active ? '#fff' : '#facc15'} color={p.active ? '#fff' : '#facc15'} />
                    {p.mapLabel}
                  </span>
                ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, minHeight: 0 }}>
            <p className={styles.previewSectionLabel}>테마 속 보물 맛집 ({PREVIEW.places.length}곳)</p>
            <div className={styles.placesList}>
              {PREVIEW.places.map((place) => (
                <div
                  className={`${styles.placeItem} ${place.active ? styles.placeItemActive : ''}`}
                  key={place.name}
                >
                  <img className={styles.placeThumb} src={place.photo} alt={place.name} />
                  <div className={styles.placeInfo}>
                    <div className={styles.placeTopRow}>
                      <span className={styles.placeName}>{place.name}</span>
                      <span className={styles.placePrice}>{place.price}</span>
                    </div>
                    <p className={styles.placeDesc}>{place.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}
