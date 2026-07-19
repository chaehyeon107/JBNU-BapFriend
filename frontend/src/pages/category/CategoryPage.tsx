import { useState } from 'react';
import {
  Plus,
  LayoutGrid,
  Heart,
  Bookmark,
  Coffee,
  UtensilsCrossed,
  Smile,
  Pencil,
  Star,
  Award,
  MapPin,
  GripVertical,
  Trophy,
  Search,
} from 'lucide-react';
import Footer from '../../components/layout/Footer';
import shopDopamine from '../../assets/images/category/shop-dopamine.png';
import shopHappydoms from '../../assets/images/category/shop-happydoms.png';
import shopMombap from '../../assets/images/category/shop-mombap.png';
import rank1Thumb from '../../assets/images/category/rank1-thumb.png';
import rank2Thumb from '../../assets/images/category/rank2-thumb.png';
import rank3Thumb from '../../assets/images/category/rank3-thumb.png';
import styles from './CategoryPage.module.css';

type GourmetList = {
  id: string;
  icon: typeof LayoutGrid;
  name: string;
  desc: string;
  count: string;
  badge?: string;
  accent?: boolean;
  detailDesc: string;
  shops: {
    name: string;
    tag: string;
    rating: number;
    address: string;
    menu: string;
    photo: string;
  }[];
};

const GOURMET_LISTS: GourmetList[] = [
  {
    id: 'all',
    icon: LayoutGrid,
    name: '전체 보기',
    desc: '내가 수집한 전체 맛집',
    count: '34개',
    detailDesc: '',
    shops: [],
  },
  {
    id: 'favorites',
    icon: Heart,
    name: '단골가게',
    desc: '가장 자주 가는 아지트들',
    count: '12개',
    detailDesc: '',
    shops: [],
  },
  {
    id: 'professor',
    icon: Bookmark,
    name: '교수님 식사',
    desc: '',
    count: '4개',
    badge: '비공개',
    accent: true,
    detailDesc:
      '전북대학교 교수님들과 세미나, 연구실 회식 후 모시고 가기 좋은 격식 있는 전주 맛집 목록입니다.',
    shops: [
      {
        name: '도파민 (Dopamine)',
        tag: '한식 파인다이닝',
        rating: 4.9,
        address: '전주시 덕진구 대학로길 12 · 전북대 구정문에서 도보 5분',
        menu: '대표메뉴: 도파민 수제 한정식 코스 (28,000원)',
        photo: shopDopamine,
      },
      {
        name: '해피돔스 (Happydoms)',
        tag: '퓨전 한정식',
        rating: 4.7,
        address: '전주시 덕진구 권삼득로 240 · 박물관 뒤편 조용한 골목',
        menu: '대표메뉴: 영양 돌솥밥 정식 (16,000원)',
        photo: shopHappydoms,
      },
      {
        name: '엄마밥줘 (선택됨)',
        tag: '한식 백반',
        rating: 4.8,
        address: '전라북도 전주시 덕진구 명륜3길 14 · 구정문 대학로사거리 도보 3분',
        menu: '대표메뉴: 제육볶음 백반정식 (8,500원)',
        photo: shopMombap,
      },
    ],
  },
  {
    id: 'dessert',
    icon: Coffee,
    name: '디저트 & 감성카페',
    desc: '구정문 카공 및 수다 명소',
    count: '8개',
    badge: '공개',
    detailDesc: '',
    shops: [],
  },
  {
    id: 'lunch',
    icon: UtensilsCrossed,
    name: '점심식사 가성비 가게',
    desc: '부담 없이 한 끼 해결하는 구정문 식당',
    count: '15개',
    detailDesc: '',
    shops: [],
  },
  {
    id: 'date',
    icon: Smile,
    name: '데이트 코스 추천',
    desc: '분위기 좋은 파스타, 이자카야',
    count: '6개',
    detailDesc: '',
    shops: [],
  },
];

type RankingList = {
  id: string;
  icon: typeof Award;
  name: string;
  desc: string;
  count: string;
  accent?: boolean;
  detailDesc: string;
  items: { rank: number; name: string; desc: string; score: string; location: string; photo: string }[];
};

const RANKING_LISTS: RankingList[] = [
  { id: 'all', icon: Award, name: '전체 랭킹', desc: '전체 투표 데이터 기반 순위', count: '99+개', detailDesc: '', items: [] },
  {
    id: 'ramen',
    icon: Trophy,
    name: '인생 라멘 랭킹',
    desc: '대학로에서 제일 진한 돈코츠 탐방',
    count: '4개',
    accent: true,
    detailDesc:
      '대학생 입맛 저격! 차슈 두께, 국물의 육수 진함, 그리고 면발의 식감을 철저히 주관적으로 채점한 라멘 순위입니다.',
    items: [
      {
        rank: 1,
        name: '도파멘 (Dopamen)',
        desc: '강도 깊은 돈코츠 베이스와 불맛 가득 차슈의 완벽 조합',
        score: '별점 4.9',
        location: '구정문 먹자골목',
        photo: rank1Thumb,
      },
      {
        rank: 2,
        name: '치큐린 전북대점',
        desc: '구정문 터줏대감, 진한 쇼유라멘과 바삭한 교자만두',
        score: '별점 4.6',
        location: '덕진동 야구장 근처',
        photo: rank2Thumb,
      },
      {
        rank: 3,
        name: '멘야케이 (Menya K)',
        desc: '자가제면의 부드러움과 신선한 시오라멘 육수가 아주 개운함',
        score: '별점 4.5',
        location: '구정문 공영주차장 골목',
        photo: rank3Thumb,
      },
    ],
  },
  { id: 'cafe', icon: Award, name: '최애 카공 카페 순위', desc: '콘센트 접근성 및 음료 가성비 기준', count: '20개', detailDesc: '', items: [] },
  { id: 'soup', icon: Award, name: '해장 국밥 순위', desc: '전북대 근처 24시간 순대국밥', count: '6개', detailDesc: '', items: [] },
  { id: 'pub', icon: Award, name: '개강 총회 술집 탑 5', desc: '안주 퀄리티와 단체석 구비 여부', count: '25개', detailDesc: '', items: [] },
];

export default function CategoryPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'ranking'>('list');
  const [activeListId, setActiveListId] = useState('professor');
  const [activeRankingId, setActiveRankingId] = useState('ramen');

  const activeList = GOURMET_LISTS.find((l) => l.id === activeListId)!;
  const activeRanking = RANKING_LISTS.find((r) => r.id === activeRankingId)!;

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbMuted}>전북대맛집</span>
          <span className={styles.breadcrumbSep}>{'>'}</span>
          <span className={styles.breadcrumbActive}>마이 맛집 리스트 & 랭킹</span>
        </div>
        <h1 className={styles.pageTitle}>맛집 보물상자</h1>
        <p className={styles.pageSubtitle}>
          내가 찜한 대학로 맛집들과 나만의 랭킹 리스트를 만들고 친구들과 공유해 보세요!
        </p>
      </div>

      <div className={styles.tabSection}>
        <div className={styles.tabHeaderRow}>
          <div className={styles.tabIndicatorGroup}>
            <button
              className={`${styles.tabPill} ${
                activeTab === 'list' ? styles.tabPillList : styles.tabPillInactive
              }`}
              onClick={() => setActiveTab('list')}
            >
              TAB 01. 맛집리스트
            </button>
            <button
              className={`${styles.tabPill} ${
                activeTab === 'ranking' ? styles.tabPillRanking : styles.tabPillInactive
              }`}
              onClick={() => setActiveTab('ranking')}
            >
              TAB 02. 맛집 랭킹
            </button>
            <span className={styles.tabHint}>
              {activeTab === 'list'
                ? '원하는 테마별로 맛집을 묶어서 기록하고 관리하는 공간입니다.'
                : '순위를 드래그로 조정하고 나만의 맞춤형 순위표를 만드는 공간입니다.'}
            </span>
          </div>
          <button className={styles.newButton}>
            <Plus size={14} />
            {activeTab === 'list' ? '새 맛집리스트 만들기' : '새 랭킹 리스트 만들기'}
          </button>
        </div>

        {activeTab === 'list' ? (
          <div className={styles.twoColumn}>
            <div className={styles.catalog}>
              <p className={styles.catalogTitle}>나의 맛집 컬렉션</p>
              <div className={styles.catalogList}>
                {GOURMET_LISTS.map((list) => {
                  const Icon = list.icon;
                  return (
                    <button
                      key={list.id}
                      className={`${styles.catalogItem} ${
                        list.id === 'all' ? styles.catalogItemMuted : ''
                      } ${list.id === activeListId ? styles.catalogItemActive : ''}`}
                      onClick={() => setActiveListId(list.id)}
                    >
                      <div className={styles.catalogItemLeft}>
                        <Icon size={20} color={list.accent ? '#ff6b35' : '#1f2329'} />
                        <div className={styles.catalogItemText}>
                          <div className={styles.catalogItemNameRow}>
                            <span className={styles.catalogItemName}>{list.name}</span>
                            {list.badge && (
                              <span className={styles.catalogItemBadge}>{list.badge}</span>
                            )}
                          </div>
                          {list.desc && (
                            <span
                              className={`${styles.catalogItemDesc} ${
                                list.accent ? styles.catalogItemDescAccent : ''
                              }`}
                            >
                              {list.desc}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        className={`${styles.catalogItemCount} ${
                          list.accent ? styles.catalogItemCountAccent : ''
                        }`}
                      >
                        {list.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.detailPanel}>
              <div className={styles.detailHeader}>
                <div className={styles.detailHeaderLeft}>
                  <div className={styles.detailTitleRow}>
                    <Bookmark size={24} />
                    <span className={styles.detailTitle}>{activeList.name}</span>
                    <span className={styles.detailBadge}>
                      {activeList.badge ? `${activeList.badge} 컬렉션` : '컬렉션'}
                    </span>
                  </div>
                  {activeList.detailDesc && (
                    <p className={styles.detailDesc}>{activeList.detailDesc}</p>
                  )}
                </div>
                <button className={styles.editButton}>
                  <Pencil size={14} />
                  리스트 정보 편집
                </button>
              </div>

              <div className={styles.divider} />

              <div className={styles.shopList}>
                {activeList.shops.map((shop) => (
                  <button className={styles.shopItem} key={shop.name}>
                    <img className={styles.shopThumb} src={shop.photo} alt={shop.name} />
                    <div className={styles.shopInfo}>
                      <div className={styles.shopTopRow}>
                        <div className={styles.shopNameRow}>
                          <span className={styles.shopName}>{shop.name}</span>
                          <span className={styles.shopTag}>{shop.tag}</span>
                        </div>
                        <span className={styles.shopRating}>
                          <Star size={14} fill="#1f2329" />
                          {shop.rating}
                        </span>
                      </div>
                      <p className={styles.shopAddress}>{shop.address}</p>
                      <p className={styles.shopMenu}>{shop.menu}</p>
                    </div>
                  </button>
                ))}
              </div>

              {activeList.shops.length > 0 && (
                <div className={styles.quickMapCard}>
                  <MapPin size={20} />
                  <div className={styles.quickMapText}>
                    <span className={styles.quickMapTitle}>
                      전북대학교 구정문 반경 300m 이내 맛집들입니다.
                    </span>
                    <span className={styles.quickMapDesc}>
                      세 곳의 평균 예산은 1인당 15,000원 선이며, 도파민은 100% 사전 예약제로
                      운영됩니다.
                    </span>
                  </div>
                  <button className={styles.quickMapButton}>지도로 보기</button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.twoColumn}>
            <div className={styles.catalog}>
              <p className={styles.catalogTitle}>나의 랭킹 리스트</p>
              <div className={styles.catalogList}>
                {RANKING_LISTS.map((rank) => {
                  const Icon = rank.icon;
                  return (
                    <button
                      key={rank.id}
                      className={`${styles.catalogItem} ${
                        rank.id === 'all' ? styles.catalogItemMuted : ''
                      } ${rank.id === activeRankingId ? styles.catalogItemActive : ''}`}
                      onClick={() => setActiveRankingId(rank.id)}
                    >
                      <div className={styles.catalogItemLeft}>
                        <Icon size={20} color={rank.accent ? '#ff6b35' : '#1f2329'} />
                        <div className={styles.catalogItemText}>
                          <span className={styles.catalogItemName}>{rank.name}</span>
                          <span
                            className={`${styles.catalogItemDesc} ${
                              rank.accent ? styles.catalogItemDescAccent : ''
                            }`}
                          >
                            {rank.desc}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`${styles.catalogItemCount} ${
                          rank.accent ? styles.catalogItemCountAccent : ''
                        }`}
                      >
                        {rank.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.detailPanel}>
              <div className={styles.detailHeader}>
                <div className={styles.detailHeaderLeft}>
                  <div className={styles.detailTitleRow}>
                    <Trophy size={24} />
                    <span className={styles.detailTitle}>{activeRanking.name}</span>
                    {activeRanking.items.length > 0 && (
                      <span className={`${styles.detailBadge} ${styles.detailBadgeAccent}`}>
                        수정 가능
                      </span>
                    )}
                  </div>
                  {activeRanking.detailDesc && (
                    <p className={styles.detailDesc}>{activeRanking.detailDesc}</p>
                  )}
                </div>
                <button className={styles.editButton}>
                  <Pencil size={14} />
                  순위 순서 편집
                </button>
              </div>

              {activeRanking.items.length > 0 && (
                <>
                  <div className={styles.addBar}>
                    <Search size={16} color="#6b7280" />
                    <input
                      className={styles.addBarInput}
                      placeholder="이 순위표에 새로운 라멘집을 추가하여 순위를 조정해 보세요 (예: 멘야야, 치큐린...)"
                    />
                    <button className={styles.addBarButton}>가게 추가</button>
                  </div>

                  <div className={styles.rankList}>
                    {activeRanking.items.map((item) => (
                      <div className={styles.rankItem} key={item.rank}>
                        <GripVertical size={18} className={styles.dragHandle} />
                        <span
                          className={`${styles.rankBadge} ${
                            item.rank === 1 ? styles.rankBadgeGold : ''
                          }`}
                        >
                          {item.rank}위
                        </span>
                        <img className={styles.rankThumb} src={item.photo} alt={item.name} />
                        <div className={styles.rankInfo}>
                          <span className={styles.rankName}>{item.name}</span>
                          <span className={styles.rankDesc}>{item.desc}</span>
                        </div>
                        <div className={styles.rankMeta}>
                          <span className={styles.rankMetaScore}>{item.score}</span>
                          <span className={styles.rankMetaLocation}>{item.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
