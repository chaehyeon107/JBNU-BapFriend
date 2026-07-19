import { CircleX, PenTool, Award, Beer } from 'lucide-react';
import profileLarge from '../../assets/images/mypage/profile-large.png';
import listCover1 from '../../assets/images/mypage/list-cover-1.png';
import listCover2 from '../../assets/images/mypage/list-cover-2.png';
import listCover3 from '../../assets/images/mypage/list-cover-3.png';
import styles from './MyPage.module.css';

const STATS = [
  { label: '방문한 맛집 수', value: '34곳', color: 'var(--color-primary)' },
  { label: '작성한 정성 리뷰', value: '12개', color: 'var(--color-text)' },
  { label: '나의 평균 부여 별점', value: '4.5 / 5.0', color: '#fbbf24' },
  { label: '누적 획득 경험치', value: '17,622 XP', color: 'var(--color-success)' },
  { label: '식도락 모험 시작일', value: '2025. 01. 01', color: 'var(--color-text)' },
];

const BADGES = [
  {
    name: '국밥 구원자',
    desc: '뜨끈함 감별사',
    date: '02.14 획득',
    bg: '#eff6ff',
    icon: CircleX,
    pending: false,
  },
  {
    name: '골목 파워블로거',
    desc: '정성 리뷰어',
    date: '03.01 획득',
    bg: '#ecfdf5',
    icon: PenTool,
    pending: false,
  },
  {
    name: '첫 단추',
    desc: '첫 식사 탐험',
    date: '01.02 획득',
    bg: '#fef3c7',
    icon: Award,
    pending: false,
  },
  {
    name: '밤거리의 사냥꾼',
    desc: '술집 10회 정복',
    date: '대기 중',
    bg: '#f9fafb',
    icon: Beer,
    pending: true,
  },
];

const BOOK_PROGRESS = [
  { label: '한식 (백반, 찌개, 국밥)', done: 15, total: 20 },
  { label: '일식 · 돈까스 · 초밥', done: 8, total: 20 },
  { label: '카페 · 베이커리 · 빙수', done: 18, total: 20 },
  { label: '술집 · 포차 · 이자카야', done: 6, total: 20 },
];

const GOURMET_LISTS = [
  {
    title: '시험 끝나고 무조건 가야하는 맛집',
    desc: '스트레스 날려줄 매콤칼칼 국물 요리와 달달구리 디저트집 코스',
    tags: ['#구정문', '#매콤', '#가성비'],
    count: '총 6개 가게',
    cover: listCover1,
  },
  {
    title: '전북대 교수님도 극찬한 찐맛집',
    desc: '학회 회식 가능, 고급진 한상 차림과 조용한 분위기의 보물 맛집들',
    tags: ['#신정문', '#한식', '#룸완비'],
    count: '총 4개 가게',
    cover: listCover2,
  },
  {
    title: '조용해서 과제하기 좋은 구정문 카페',
    desc: '콘센트 많고 백색소음 가득해 집중하기 딱 좋은 카공족 추천 카페',
    tags: ['#카페', '#카공', '#콘센트'],
    count: '총 8개 가게',
    cover: listCover3,
  },
];

export default function MyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.profileSection}>
        <div className={styles.userLeft}>
          <img className={styles.avatar} src={profileLarge} alt="프로필" />
          <div className={styles.nickAndLevel}>
            <div className={styles.nickRow}>
              <span className={styles.nickname}>덕진동_식신</span>
              <span className={styles.levelTag}>골드 푸디</span>
            </div>
            <p className={styles.bio}>전북대 골목 구석구석, 맛있는 한술을 찾는 탐험가</p>
          </div>
        </div>

        <div className={styles.userExperience}>
          <div className={styles.xpRow}>
            <span className={styles.xpLevel}>맛집 탐험 레벨 6</span>
            <span className={styles.xpValue}>650 / 850 XP</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: '76.5%' }} />
          </div>
          <p className={styles.xpHint}>다음 레벨까지 200 XP 남았습니다! 열심히 맛 기록을 남겨보세요.</p>
        </div>

        <button className={styles.editButton}>프로필 편집</button>
      </section>

      <section className={styles.statsGrid}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>나의 탐험 활동 통계</p>
          <div className={styles.statsBoxes}>
            {STATS.map((stat) => (
              <div className={styles.statRow} key={stat.label}>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statValue} style={{ color: stat.color }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitleRow}>
            <p className={styles.cardTitle}>획득한 명예 배지</p>
            <button className={styles.cardLink}>전체 배지보기</button>
          </div>
          <div className={styles.badgesGrid}>
            {[BADGES.slice(0, 2), BADGES.slice(2, 4)].map((row, i) => (
              <div className={styles.badgeRow} key={i}>
                {row.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.name}
                      className={`${styles.badge} ${badge.pending ? styles.badgePending : ''}`}
                      style={{ background: badge.bg }}
                    >
                      <div className={styles.badgeIconWrap}>
                        <Icon size={20} />
                      </div>
                      <div className={styles.badgeText}>
                        <span className={styles.badgeName}>{badge.name}</span>
                        <span className={styles.badgeDesc}>{badge.desc}</span>
                        <span className={styles.badgeDate}>{badge.date}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.cardTitle}>카테고리 도감 진행도</p>
          <div className={styles.progressBarList}>
            {BOOK_PROGRESS.map((item) => (
              <div className={styles.progressRow} key={item.label}>
                <div className={styles.progressRowTop}>
                  <span className={styles.progressRowLabel}>{item.label}</span>
                  <span className={styles.progressRowValue}>
                    {item.done} / {item.total}곳 정복
                  </span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${(item.done / item.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gourmetSection}>
        <p className={styles.sectionTitle}>내가 만드는 단골 맛집 도감</p>
        <div className={styles.listGrid}>
          {GOURMET_LISTS.map((list) => (
            <button className={styles.listCard} key={list.title}>
              <img className={styles.listCoverImg} src={list.cover} alt={list.title} />
              <div className={styles.listTextBlock}>
                <p className={styles.listTitle}>{list.title}</p>
                <p className={styles.listDesc}>{list.desc}</p>
              </div>
              <div className={styles.listFooter}>
                <div className={styles.listTags}>
                  {list.tags.map((tag) => (
                    <span className={styles.listTag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={styles.listCount}>{list.count}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
