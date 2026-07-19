import { useState } from 'react';
import { Plus, Search, XCircle, ChevronRight, Check, Star, StarHalf, Camera } from 'lucide-react';
import MiniCalendar from './MiniCalendar';
import reviewMombap from '../../assets/images/record/review-mombap.png';
import reviewKatsu from '../../assets/images/record/review-katsu.png';
import reviewMalatang from '../../assets/images/record/review-malatang.png';
import reviewCafe from '../../assets/images/record/review-cafe.png';
import searchMenyakei from '../../assets/images/record/search-menyakei.png';
import uploadPreview from '../../assets/images/record/upload-preview.png';
import styles from './RecordPage.module.css';

const FILTERS = ['최신순', '별점 높은 순', '한식만 보기'];

const REVIEWS = [
  {
    shop: '엄마밥줘',
    category: '한식 · 백반',
    date: '2024.12.23',
    rating: 4.5,
    tags: ['#제육볶음', '#백반정식', '#가성비맛집'],
    comment:
      '점심시간에 가면 줄이 정말 길지만 공기밥 무한 리필에 이 가격이면 무조건 가야합니다. 제육볶음 소스가 달달매콤하니 밥도둑이 따로 없네요.',
    photo: reviewMombap,
  },
  {
    shop: '카츠하우스',
    category: '일식 · 돈까스',
    date: '2024.12.18',
    rating: 5,
    tags: ['#안심카츠', '#치즈돈까스'],
    comment:
      '전북대 구정문 앞 최고의 돈까스집! 안심이 엄청 부드럽고 육즙이 가득해요. 소스에 와사비 살짝 얹어 먹는 걸 추천합니다.',
    photo: reviewKatsu,
  },
  {
    shop: '대학로 마라탕',
    category: '중식 · 마라탕',
    date: '2024.12.10',
    rating: 4,
    tags: ['#마라탕', '#꿔바로우'],
    comment:
      '신정문 쪽에선 여기가 마라 수치 제일 잘 맞추는 듯. 꿔바로우 소스가 엄청 새콤달콤하고 바삭해서 매번 세트로 주문해서 먹어요.',
    photo: reviewMalatang,
  },
  {
    shop: '구정문 카페인',
    category: '카페 · 디저트',
    date: '2024.11.28',
    rating: 4.5,
    tags: ['#크로플', '#아메리카노', '#카공추천'],
    comment:
      '과제하거나 시험공부하기 최적의 장소입니다. 콘센트가 많고 잔잔한 인디음악이 흘러나와요. 시그니처 크로플 꼭 드셔보세요.',
    photo: reviewCafe,
  },
];

function StarsRow({ rating }: { rating: number }) {
  return (
    <div className={styles.starsRow}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = rating >= i + 1;
        const half = !filled && rating >= i + 0.5;
        const Icon = half ? StarHalf : Star;
        return (
          <Icon
            key={i}
            size={14}
            fill={filled || half ? '#fbbf24' : 'none'}
            color={filled || half ? '#fbbf24' : '#d1d5db'}
          />
        );
      })}
    </div>
  );
}

const RATING_LABELS: Record<number, string> = {
  1: '별로예요',
  2: '아쉬워요',
  3: '만족스러워요',
  4: '매우 만족스러워요',
  5: '최고예요',
};

export default function RecordPage() {
  const [activeFilter, setActiveFilter] = useState('최신순');
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 23));
  const [checkedMenus, setCheckedMenus] = useState<Record<string, boolean>>({
    '돈코츠 라멘 (대표)': true,
    '카라구치 라멘': true,
    '미소 라멘': false,
    마제소바: false,
  });
  const [newMenu, setNewMenu] = useState('');
  const [ratingScore, setRatingScore] = useState(4);
  const [comment, setComment] = useState(
    '국물이 진짜 진하고 깊습니다! 면 직접 뽑는 집이라더니 식감이 살아있네요. 전북대 인근 탑티어 라멘집 인정입니다. 다음엔 마제소바 먹으러 올게요.',
  );
  const [hasPhoto, setHasPhoto] = useState(true);

  const toggleMenu = (name: string) => {
    setCheckedMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const addMenu = () => {
    if (!newMenu.trim()) return;
    setCheckedMenus((prev) => ({ ...prev, [newMenu.trim()]: true }));
    setNewMenu('');
  };

  const weekday = ['일', '월', '화', '수', '목', '금', '토'][selectedDate.getDay()];

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbMuted}>전북대맛집</span>
          <span className={styles.breadcrumbSep}>{'>'}</span>
          <span className={styles.breadcrumbActive}>식도락 맛 기록관</span>
        </div>
        <h1 className={styles.pageTitle}>나의 맛집 탐험 일지</h1>
        <p className={styles.pageSubtitle}>
          캠퍼스 근처에서 맛본 소중한 한끼들을 간직하고 나만의 미식 도감을 작성하세요.
        </p>
      </div>

      <div className={styles.mainBody}>
        <div className={styles.leftColumn}>
          <div className={styles.feedHeader}>
            <div className={styles.feedTitleRow}>
              <span className={styles.feedTitle}>내 기록</span>
              <span className={styles.feedCount}>총 {REVIEWS.length}개</span>
            </div>
            <button className={styles.addButton}>
              <Plus size={14} />
              새 기록 추가
            </button>
          </div>

          <div className={styles.filterTabs}>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterPill} ${
                  activeFilter === filter ? styles.filterPillActive : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.feed}>
            {REVIEWS.map((review) => (
              <div className={styles.reviewCard} key={review.shop}>
                <div className={styles.cardHeader}>
                  <div>
                    <div className={styles.cardTitleRow}>
                      <span className={styles.cardShopName}>{review.shop}</span>
                      <span className={styles.cardShopCategory}>{review.category}</span>
                    </div>
                    <p className={styles.cardDate}>{review.date}</p>
                  </div>
                  <StarsRow rating={review.rating} />
                </div>
                <div className={styles.menuTags}>
                  {review.tags.map((tag) => (
                    <span className={styles.menuTag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.commentRow}>
                  <p className={styles.commentText}>{review.comment}</p>
                  <img className={styles.commentThumb} src={review.photo} alt={review.shop} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.formHeader}>
            <div className={styles.stepIndicatorRow}>
              <span className={styles.stepBadge}>기록 작성 중</span>
              <span className={styles.stepBadgeHint}>덕진동_식신님의 13번째 맛있는 기록</span>
            </div>
            <h2 className={styles.formTitle}>새로운 맛 기록 남기기</h2>
          </div>

          <div className={styles.divider} />

          <div className={styles.formSections}>
            {/* Step 1 */}
            <div className={styles.stepSection}>
              <div className={styles.stepTitleArea}>
                <span className={styles.stepNumber}>1</span>
                <span className={styles.stepTitle}>방문한 가게 찾기</span>
              </div>
              <div className={styles.searchInputBox}>
                <Search size={16} color="#ff6b35" />
                <input defaultValue="멘야케이" />
                <button className={styles.searchClearBtn} aria-label="검색어 지우기">
                  <XCircle size={16} />
                </button>
              </div>
              <div className={styles.searchResults}>
                <div className={styles.resultRow}>
                  <img className={styles.resultThumb} src={searchMenyakei} alt="멘야케이 전북대점" />
                  <div className={styles.resultInfo}>
                    <div className={styles.resultTitleLine}>
                      <span className={styles.resultName}>멘야케이 전북대점</span>
                      <span className={styles.resultCategoryTag}>일식 라멘</span>
                    </div>
                    <p className={styles.resultAddress}>전북 특별자치도 전주시 덕진구 명륜4길 17-1</p>
                  </div>
                  <button className={styles.selectBtn}>선택됨</button>
                </div>
                <div className={styles.noShopHelper}>
                  <span className={styles.noShopText}>찾으시는 맛집이 리스트에 없나요?</span>
                  <button className={styles.noShopBtn}>
                    새 가게 추가 요청하기
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.stepSection}>
              <div className={styles.stepTitleArea}>
                <span className={styles.stepNumber}>2</span>
                <span className={styles.stepTitle}>방문 날짜 및 먹은 메뉴</span>
              </div>
              <div className={styles.splitColumns}>
                <div className={styles.dateBox}>
                  <span className={styles.boxLabel}>방문 날짜 선택</span>
                  <MiniCalendar
                    viewYear={viewYear}
                    viewMonth={viewMonth}
                    selectedDate={selectedDate}
                    onChangeMonth={(y, m) => {
                      setViewYear(y);
                      setViewMonth(m);
                    }}
                    onSelectDate={setSelectedDate}
                  />
                  <div className={styles.selectedDateLabel}>
                    선택된 날짜: {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월{' '}
                    {selectedDate.getDate()}일 ({weekday}요일)
                  </div>
                </div>
                <div className={styles.menuBox}>
                  <span className={styles.boxLabel}>메뉴 체크리스트</span>
                  <div className={styles.menuOptions}>
                    {Object.entries(checkedMenus).map(([name, checked]) => (
                      <button
                        key={name}
                        className={`${styles.menuOption} ${checked ? styles.menuOptionChecked : ''}`}
                        onClick={() => toggleMenu(name)}
                      >
                        <span
                          className={`${styles.checkbox} ${checked ? styles.checkboxChecked : ''}`}
                        >
                          {checked && <Check size={10} />}
                        </span>
                        <span
                          className={`${styles.menuOptionLabel} ${
                            checked ? styles.menuOptionLabelChecked : ''
                          }`}
                        >
                          {name}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className={styles.addNewMenu}>
                    <input
                      placeholder="기타 메뉴 직접 입력"
                      value={newMenu}
                      onChange={(e) => setNewMenu(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addMenu()}
                    />
                    <button className={styles.addMenuBtn} onClick={addMenu}>
                      새로 추가
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.stepSection}>
              <div className={styles.stepTitleArea}>
                <span className={styles.stepNumber}>3</span>
                <span className={styles.stepTitle}>별점 및 미식 소감 작성</span>
              </div>
              <div className={styles.starSelectSection}>
                <span className={styles.starSelectLabel}>가게의 맛과 서비스는 어땠나요?</span>
                <div className={styles.bigStars}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      key={i}
                      className={styles.bigStarBtn}
                      onClick={() => setRatingScore(i + 1)}
                    >
                      <Star
                        size={32}
                        fill={i < ratingScore ? '#fbbf24' : 'none'}
                        color={i < ratingScore ? '#fbbf24' : '#d1d5db'}
                      />
                    </button>
                  ))}
                </div>
                <span className={styles.starScoreLabel}>
                  {ratingScore.toFixed(1)}점 ({RATING_LABELS[ratingScore]})
                </span>
              </div>

              <div className={styles.textareaSection}>
                <span className={styles.boxLabel}>한줄평 & 정성 소감</span>
                <textarea
                  className={styles.textarea}
                  maxLength={300}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <div className={styles.charCount}>{comment.length} / 300자</div>
              </div>

              <div className={styles.photoUpload}>
                <span className={styles.boxLabel}>방문 사진 첨부 (최대 3장)</span>
                <div className={styles.photoRow}>
                  {hasPhoto && (
                    <div className={styles.photoPreview}>
                      <img className={styles.photoPreviewImg} src={uploadPreview} alt="방문 사진" />
                      <button
                        className={styles.deleteIcon}
                        onClick={() => setHasPhoto(false)}
                        aria-label="사진 삭제"
                      >
                        <XCircle size={10} />
                      </button>
                    </div>
                  )}
                  <button className={styles.uploadPlaceholder}>
                    <Camera size={20} />
                    <span>사진 추가</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.formActions}>
            <button className={styles.cancelBtn}>초기화</button>
            <button className={styles.submitBtn}>기록 작성 완료</button>
          </div>
        </div>
      </div>
    </div>
  );
}
