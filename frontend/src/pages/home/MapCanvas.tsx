import { useNavigate } from 'react-router-dom';
import { Star, Bookmark, Phone, Pencil } from 'lucide-react';
import { shops, type Shop } from '../../data/shops';
import { homeImages } from '../../assets/images/home';
import styles from './MapCanvas.module.css';

type Props = {
  selectedShopId: string;
  onSelectShop: (id: string) => void;
};

export default function MapCanvas({ selectedShopId, onSelectShop }: Props) {
  const navigate = useNavigate();
  const selectedShop = shops.find((s) => s.id === selectedShopId);

  return (
    <div className={styles.mapCanvas}>
      <div className={styles.campusBoundary} />
      <span className={styles.campusLabel} style={{ left: 400, top: 240 }}>
        전북대학교 전주캠퍼스
      </span>
      <span className={styles.landmarkLabel} style={{ left: 240, top: 150 }}>
        대운동장
      </span>
      <span className={styles.landmarkLabel} style={{ left: 450, top: 400 }}>
        중앙도서관
      </span>
      <div className={styles.roadH} />
      <div className={styles.roadV} style={{ left: 100 }} />
      <div className={styles.roadV} style={{ left: 750 }} />
      <span className={styles.roadLabel}>전북대 구정문 대학로사거리</span>

      {shops
        .filter((s) => s.mapPosition)
        .map((shop) => (
          <MapPin
            key={shop.id}
            shop={shop}
            isSelected={shop.id === selectedShopId}
            onClick={() => onSelectShop(shop.id)}
          />
        ))}

      {selectedShop && (
        <div className={styles.selectedCard}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitleRow}>
                <span className={styles.cardTitle}>{selectedShop.name}</span>
                <span className={styles.categoryTag}>
                  {selectedShop.category} {selectedShop.subcategory}
                </span>
              </div>
              <p className={styles.cardAddress}>{selectedShop.address}</p>
            </div>
            <button className={styles.bookmarkBtn} aria-label="북마크">
              <Bookmark size={20} />
            </button>
          </div>

          <div className={styles.quickStats}>
            <span className={styles.ratingRow}>
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
              {selectedShop.rating}
            </span>
            <span className={styles.reviewCount}>단골리뷰 {selectedShop.reviewCount}개</span>
            <span className={styles.divider} />
            <span className={styles.openStatus}>
              영업 중 · {selectedShop.closeTime} 종료
            </span>
          </div>

          {selectedShop.photos.length > 0 && (
            <div className={styles.menuPhotoRow}>
              {selectedShop.photos.map((photo) => (
                <img
                  key={photo}
                  className={styles.menuPhoto}
                  src={homeImages[photo]}
                  alt={selectedShop.representativeMenu}
                />
              ))}
            </div>
          )}

          <div className={styles.menuInfo}>
            <div className={styles.menuInfoTop}>
              <span className={styles.menuName}>대표메뉴: {selectedShop.representativeMenu}</span>
              <span className={styles.menuPrice}>{selectedShop.price}</span>
            </div>
            <p className={styles.menuDesc}>{selectedShop.description}</p>
          </div>

          <div className={styles.actionRow}>
            <button className={`${styles.actionBtn} ${styles.btnCall}`}>
              <Phone size={16} />
              전화하기
            </button>
            <button
              className={`${styles.actionBtn} ${styles.btnReview}`}
              onClick={() => navigate('/record', { state: { shopId: selectedShop.id } })}
            >
              <Pencil size={16} />
              방문 기록하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MapPin({
  shop,
  isSelected,
  onClick,
}: {
  shop: Shop;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={styles.pin}
      style={{ left: shop.mapPosition.x, top: shop.mapPosition.y }}
      onClick={onClick}
    >
      <span className={`${styles.pinBubble} ${isSelected ? styles.pinBubbleSelected : ''}`}>
        <Star size={10} fill={isSelected ? '#fff' : '#facc15'} color={isSelected ? '#fff' : '#facc15'} />
        {shop.name}
        {isSelected ? ' (선택됨)' : ''}
      </span>
      <span className={`${styles.pinArrow} ${isSelected ? styles.pinArrowSelected : ''}`} />
    </button>
  );
}
