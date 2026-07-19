import { MapPin, Heart, X, Star, Bookmark } from 'lucide-react';
import styles from './ThemeMapPreviewModal.module.css';
import type { PlaceDraft } from './ThemeMapCreatePage';

type Props = {
  title: string;
  category: string;
  description: string;
  places: PlaceDraft[];
  onClose: () => void;
  onPublish: () => void;
};

export default function ThemeMapPreviewModal({
  title,
  category,
  description,
  places,
  onClose,
  onPublish,
}: Props) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.headerTopRow}>
            <div className={styles.badgeAuthor}>
              <span className={styles.tag}>{category}</span>
              <span className={styles.author}>by 덕진동_식신</span>
            </div>
            <div className={styles.headerActions}>
              <span className={styles.metaItem}>
                <MapPin size={14} />
                {places.length}곳 수록
              </span>
              <span className={styles.metaItem}>
                <Heart size={14} fill="#ff6b35" color="#ff6b35" />
                <span className={styles.metaItemHeart}>0</span>
              </span>
              <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
                <X size={18} />
              </button>
            </div>
          </div>
          <div className={styles.titleBlock}>
            <p className={styles.modalTitle}>{title || '(제목 없음)'}</p>
            <p className={styles.modalIntro}>{description || '테마 소개글이 아직 없습니다.'}</p>
          </div>
        </div>

        <div className={styles.modalBody}>
          {places.map((place, i) => (
            <div className={styles.placeCard} key={i}>
              <img className={styles.placeCardImg} src={place.photo} alt={place.name} />
              <div className={styles.placeCardBody}>
                <div className={styles.placeTitleRow}>
                  <span className={styles.placeTitle}>
                    {i + 1}. {place.name || '(장소명 없음)'}
                  </span>
                  <span className={styles.ratingGroup}>
                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                    <span className={styles.ratingValue}>4.{5 + (i % 4)}</span>
                    <span className={styles.ratingCount}>({40 + i * 30})</span>
                  </span>
                </div>
                <div className={styles.metaRow}>
                  <span>전북대 구정문 근처</span>
                  <span className={styles.metaDivider} />
                  <span>도보 {3 + i}분</span>
                </div>
                <p className={styles.placeDesc}>{place.tip || '추천 이유가 아직 없습니다.'}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.viewMapBtn}>
            <MapPin size={18} />
            지도에서 보기
          </button>
          <button className={styles.saveAllBtn} onClick={onPublish}>
            <Bookmark size={18} />
            완료 및 게시
          </button>
        </div>
      </div>
    </div>
  );
}
