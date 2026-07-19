import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MapPin, Heart } from 'lucide-react';
import previewCover from '../../assets/images/thememapcreate/preview-cover.png';
import food1 from '../../assets/images/thememapcreate/food-1.png';
import food2 from '../../assets/images/thememapcreate/food-2.png';
import food3 from '../../assets/images/thememapcreate/food-3.png';
import food4 from '../../assets/images/thememapcreate/food-4.png';
import ThemeMapPreviewModal from './ThemeMapPreviewModal';
import styles from './ThemeMapCreatePage.module.css';

export type PlaceDraft = {
  name: string;
  tip: string;
  photo: string;
};

const FOOD_PHOTOS = [food1, food2, food3, food4];

const CATEGORIES = ['밥집', '술집', '카페', '일상', '디저트', '기타'];

export default function ThemeMapCreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('밥집');
  const [description, setDescription] = useState('');
  const [places, setPlaces] = useState<PlaceDraft[]>([
    { name: '엄마밥줘', tip: '제육백반 주문시 공기밥이 무제한입니다...', photo: FOOD_PHOTOS[0] },
    { name: '맛사랑 분식', tip: '돌솥비빔밥이 제일 빨리 나오고 따뜻해요...', photo: FOOD_PHOTOS[1] },
  ]);
  const [showPreview, setShowPreview] = useState(false);

  const updatePlace = (index: number, patch: Partial<PlaceDraft>) => {
    setPlaces((prev) => prev.map((p, i) => (i === index ? { ...p, ...patch } : p)));
  };

  const addPlace = () => {
    setPlaces((prev) => [
      ...prev,
      { name: '', tip: '', photo: FOOD_PHOTOS[prev.length % FOOD_PHOTOS.length] },
    ]);
  };

  const removePlace = (index: number) => {
    setPlaces((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePublish = () => {
    setShowPreview(false);
    navigate('/theme-map/manage');
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbMuted}>테마지도</span>
          <span className={styles.breadcrumbSep}>{'>'}</span>
          <span className={styles.breadcrumbActive}>새 테마지도 만들기</span>
        </div>
        <h1 className={styles.pageTitle}>새 테마지도 만들기</h1>
        <p className={styles.pageSubtitle}>
          전북대 캠퍼스 라이프에 영감을 주는 특별한 맛집 콜렉션을 테마지도로 제작합니다.
        </p>
      </div>

      <div className={styles.stepProgress}>
        <div className={styles.stepItem}>
          <span className={`${styles.stepBadge} ${styles.stepBadgeActive}`}>1</span>
          <span className={`${styles.stepLabel} ${styles.stepLabelActive}`}>기본 정보 입력</span>
          <span className={styles.stepConnector} />
        </div>
        <div className={styles.stepItem}>
          <span className={styles.stepBadge}>2</span>
          <span className={styles.stepLabel}>상세 맛집 추가</span>
          <span className={styles.stepConnector} />
        </div>
        <div className={styles.stepItem}>
          <span className={styles.stepBadge}>3</span>
          <span className={styles.stepLabel}>최종 검토 및 발행</span>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.formCard}>
          <div className={styles.stepSection}>
            <p className={styles.stepSectionTitle}>Step 1. 기본 테마 설정</p>
            <div className={styles.fieldGroup}>
              <span className={styles.fieldLabel}>테마지도 제목</span>
              <input
                className={styles.textInput}
                placeholder="예) 덕진광장 근처 든든한 뚝배기 해장국 코스"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.fieldGroup}>
              <span className={styles.fieldLabel}>테마 카테고리 분류</span>
              <div className={styles.categoryChips}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.categoryChip} ${
                      category === cat ? styles.categoryChipActive : ''
                    }`}
                    onClick={() => setCategory(cat)}
                  >
                    <span
                      className={`${styles.categoryDot} ${
                        category === cat ? styles.categoryDotActive : ''
                      }`}
                    />
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.fieldGroup}>
              <span className={styles.fieldLabel}>테마 소개글</span>
              <textarea
                className={styles.textarea}
                placeholder="이 테마지도에 수록된 맛집들의 매력 포인트나, 어떤 상황에 추천하는지 소개해 주세요..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.stepSection}>
            <p className={styles.stepSectionTitle}>Step 2. 상세 장소 추가</p>
            {places.map((place, i) => (
              <div className={styles.placeCard} key={i}>
                <div className={styles.placeCardHeader}>
                  <span className={styles.placeCardTitle}>장소 {i + 1}</span>
                  <button className={styles.placeDeleteBtn} onClick={() => removePlace(i)}>
                    삭제
                  </button>
                </div>
                <div className={styles.placeFieldGroup}>
                  <span className={styles.placeFieldLabel}>장소명</span>
                  <input
                    className={styles.placeNameInput}
                    placeholder="예) 엄마밥줘"
                    value={place.name}
                    onChange={(e) => updatePlace(i, { name: e.target.value })}
                  />
                </div>
                <div className={styles.placeRow}>
                  <div className={styles.photoUploadBox}>
                    <img src={place.photo} alt="" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span className={styles.placeFieldLabel}>추천 이유 & 꿀팁</span>
                    <textarea
                      className={styles.tipTextarea}
                      placeholder="제육백반 주문시 공기밥이 무제한입니다..."
                      value={place.tip}
                      onChange={(e) => updatePlace(i, { tip: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button className={styles.addPlaceBtn} onClick={addPlace}>
              <Plus size={14} />
              페이지 추가 (장소 추가)
            </button>
          </div>

          <div className={styles.divider} />

          <div className={styles.formActions}>
            <button className={styles.backBtn} onClick={() => navigate('/theme-map')}>
              이전으로
            </button>
            <button className={styles.submitBtn} onClick={() => setShowPreview(true)}>
              완료 및 게시
            </button>
          </div>
        </div>

        <aside className={styles.previewSidebar}>
          <span className={styles.previewLabel}>실시간 미리보기</span>
          <div className={styles.previewCard}>
            <img className={styles.previewCardImg} src={previewCover} alt="미리보기" />
            <div className={styles.previewCardBody}>
              <div className={styles.previewCardTopRow}>
                <span className={styles.previewCategoryTag}>{category}</span>
                <span className={styles.previewAuthor}>by 덕진동_식신</span>
              </div>
              <p className={styles.previewTitle}>{title || '테마지도 제목을 입력해주세요'}</p>
              <div className={styles.previewDividerLine} />
              <div className={styles.previewFooterRow}>
                <span className={styles.previewFooterItem}>
                  <MapPin size={12} />
                  {places.length}곳 수록됨
                </span>
                <span className={styles.previewFooterItem}>
                  <Heart size={12} fill="#ff6b35" color="#ff6b35" />
                  <span className={styles.previewFooterHeart}>0</span>
                </span>
              </div>
            </div>
          </div>

          <span className={styles.previewPlacesLabel}>수록될 장소들 목록 미리보기:</span>
          <div className={styles.previewPlacesList}>
            {places.map((place, i) => (
              <div className={styles.previewPlaceItem} key={i}>
                <span className={styles.previewPlaceBadge}>{i + 1}</span>
                <span className={styles.previewPlaceName}>{place.name || '(장소명 없음)'}</span>
              </div>
            ))}
          </div>

          <button className={styles.previewBtn} onClick={() => setShowPreview(true)}>
            미리보기
          </button>
        </aside>
      </div>

      {showPreview && (
        <ThemeMapPreviewModal
          title={title}
          category={category}
          description={description}
          places={places}
          onClose={() => setShowPreview(false)}
          onPublish={handlePublish}
        />
      )}
    </div>
  );
}
