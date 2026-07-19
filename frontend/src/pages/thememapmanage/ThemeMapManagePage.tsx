import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MapPin, Heart, Pencil, Trash2 } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import cafeImg from '../../assets/images/thememapmanage/cafe.png';
import hombapImg from '../../assets/images/thememapmanage/hombap.png';
import pubImg from '../../assets/images/thememapmanage/pub.png';
import styles from './ThemeMapManagePage.module.css';

const INITIAL_MAPS = [
  {
    id: 'cafe',
    category: '카페',
    title: '전북대 근처 숨은 감성 카페 모음',
    registeredAt: '2024.12.15',
    places: 5,
    likes: 23,
    public: true,
    photo: cafeImg,
  },
  {
    id: 'hombap',
    category: '밥집',
    title: '혼밥하기 좋은 가성비 식당 TOP5',
    registeredAt: '2024.11.20',
    places: 5,
    likes: 45,
    public: true,
    photo: hombapImg,
  },
  {
    id: 'pub',
    category: '술집',
    title: '구정문 밤샘 필수, 비밀 야식 맛집',
    registeredAt: '2025.01.05',
    places: 3,
    likes: 0,
    public: false,
    photo: pubImg,
  },
];

export default function ThemeMapManagePage() {
  const navigate = useNavigate();
  const [maps, setMaps] = useState(INITIAL_MAPS);

  const togglePublic = (id: string) => {
    setMaps((prev) => prev.map((m) => (m.id === id ? { ...m, public: !m.public } : m)));
  };

  const deleteMap = (id: string) => {
    setMaps((prev) => prev.filter((m) => m.id !== id));
  };

  const publicCount = maps.filter((m) => m.public).length;
  const privateCount = maps.length - publicCount;
  const totalLikes = maps.reduce((sum, m) => sum + m.likes, 0);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbMuted}>테마지도</span>
            <span className={styles.breadcrumbSep}>{'>'}</span>
            <span className={styles.breadcrumbActive}>내 테마지도 관리</span>
          </div>
          <h1 className={styles.pageTitle}>내 테마지도 관리</h1>
          <p className={styles.pageSubtitle}>
            내가 발굴하고 큐레이션한 전북대 구정문, 신정문의 테마 맛집 리스트를 한눈에 모아보세요.
          </p>
        </div>
        <button className={styles.createBtn} onClick={() => navigate('/theme-map/create')}>
          <Plus size={16} />
          새 테마지도 만들기
        </button>
      </div>

      <div className={styles.mainBody}>
        <div className={styles.statsCard}>
          <div className={styles.statBlock}>
            <span className={styles.statLabel}>전체 테마지도</span>
            <span className={styles.statValue}>{maps.length}개</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statBlock}>
            <span className={styles.statLabel}>공개 지도</span>
            <span className={`${styles.statValue} ${styles.statValueAccent}`}>{publicCount}개</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statBlock}>
            <span className={styles.statLabel}>비공개 지도</span>
            <span className={`${styles.statValue} ${styles.statValueMuted}`}>{privateCount}개</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statBlock}>
            <span className={styles.statLabel}>누적 공감수</span>
            <span className={styles.statHeartRow}>
              <Heart size={18} fill="#ff6b35" color="#ff6b35" />
              <span className={styles.statValue}>{totalLikes}</span>
            </span>
          </div>
        </div>

        <div className={styles.list}>
          {maps.map((map) => (
            <div className={`${styles.card} ${!map.public ? styles.cardSelected : ''}`} key={map.id}>
              <img className={styles.cardImg} src={map.photo} alt={map.title} />
              <div className={styles.cardBody}>
                <div className={styles.cardMetaRow}>
                  <span
                    className={`${styles.categoryTag} ${!map.public ? styles.categoryTagMuted : ''}`}
                  >
                    {map.category}
                  </span>
                  <span
                    className={`${styles.visibilityTag} ${!map.public ? styles.visibilityTagMuted : ''}`}
                  >
                    {map.public ? '전체 공개' : '비공개'}
                  </span>
                  <span className={styles.registeredDate}>등록일: {map.registeredAt}</span>
                </div>
                <p className={styles.cardTitle}>{map.title}</p>
                <div className={styles.cardStatsRow}>
                  <span className={styles.cardStatItem}>
                    <MapPin size={14} />
                    수록 장소 {map.places}곳
                  </span>
                  {map.likes > 0 && (
                    <span className={styles.cardStatItem}>
                      <Heart size={14} fill="#ff6b35" color="#ff6b35" />
                      <span className={styles.cardStatHeart}>{map.likes}</span>
                    </span>
                  )}
                </div>
              </div>
              <div className={styles.cardActions}>
                <div className={styles.toggleGroup}>
                  <button
                    className={`${styles.toggleTrack} ${!map.public ? styles.toggleTrackOff : ''}`}
                    onClick={() => togglePublic(map.id)}
                    aria-label="공개 여부 전환"
                  >
                    <span className={styles.toggleKnob} />
                  </button>
                  <span className={styles.toggleLabel}>{map.public ? '공개' : '비공개'}</span>
                </div>
                <button className={styles.editBtn}>
                  <Pencil size={14} />
                  편집
                </button>
                <button className={styles.deleteBtn} onClick={() => deleteMap(map.id)}>
                  <Trash2 size={14} />
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
