import { useState } from 'react';
import { Search, XCircle, Footprints } from 'lucide-react';
import { FOOTPRINTS } from './data';
import styles from './FriendPage.module.css';

function SmallToggle({ defaultOn = true }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      className={`${styles.smallToggleTrack} ${on ? styles.smallToggleTrackOn : ''}`}
      onClick={() => setOn((v) => !v)}
    >
      <span className={styles.smallToggleKnob} />
    </button>
  );
}

export default function FootprintTab() {
  return (
    <div className={styles.card}>
      <div className={styles.previewHeader}>
        <span className={styles.previewTitle}>현재 발도장 지도 미리보기</span>
        <div className={styles.mapControls}>
          <div className={styles.smallToggle}>
            <span>발도장 표시</span>
            <SmallToggle />
          </div>
          <div className={styles.smallToggle}>
            <span>한줄평 말풍선</span>
            <SmallToggle />
          </div>
        </div>
      </div>

      <div className={styles.mapCanvas}>
        <div className={styles.mapCampus} />
        <span className={styles.mapLabel} style={{ left: 280, top: 150 }}>
          전북대학교 전주캠퍼스
        </span>
        <span className={styles.mapLabelSmall} style={{ left: 160, top: 90 }}>
          대운동장
        </span>
        <span className={styles.mapLabelSmall} style={{ left: 420, top: 120 }}>
          중앙도서관
        </span>
        <div className={styles.mapRoadH} />
        <div className={styles.mapRoadV} style={{ left: 80 }} />
        <div className={styles.mapRoadV} style={{ left: 580 }} />
        <span className={styles.mapRoadLabel}>전북대 구정문 대학로사거리</span>

        <div className={styles.mapMarker} style={{ left: 180, top: 180 }}>
          <span className={styles.markerPin}>
            <Footprints size={12} />
          </span>
          <span className={styles.markerLabel}>맛사랑 분식</span>
        </div>
        <div className={styles.mapMarker} style={{ left: 480, top: 210 }}>
          <span className={styles.markerPin}>
            <Footprints size={12} />
          </span>
          <span className={styles.markerLabel}>신정문 통닭</span>
        </div>
        <div className={styles.mapMarker} style={{ left: 260, top: 280 }}>
          <span className={styles.markerBubble}>제육백반 강추!</span>
          <span className={`${styles.markerPin} ${styles.markerPinActive}`}>
            <Footprints size={12} />
          </span>
          <span className={styles.markerLabel}>엄마밥줘</span>
        </div>
        <div className={styles.mapMarker} style={{ left: 490, top: 270 }}>
          <span className={styles.markerBubble}>꿔바로우 쫀득</span>
          <span className={`${styles.markerPin} ${styles.markerPinActive}`}>
            <Footprints size={12} />
          </span>
          <span className={styles.markerLabel}>대학로 마라탕</span>
        </div>
        <div className={styles.mapMarker} style={{ left: 610, top: 180 }}>
          <span className={styles.markerBubble}>치즈카츠 대존맛</span>
          <span className={`${styles.markerPin} ${styles.markerPinActive}`}>
            <Footprints size={12} />
          </span>
          <span className={styles.markerLabel}>카츠하우스</span>
        </div>
      </div>

      <div className={styles.footprintManagement}>
        <div className={styles.divider} />
        <div className={styles.addSectionHeader}>
          <span className={styles.addSectionTitle}>발도장 표시 추가 & 관리</span>
          <span className={styles.addSectionDesc}>
            지도에 내 단골 맛집을 등록하고 친구들이 볼 수 있는 짧은 한줄평을 남겨보세요.
          </span>
        </div>
        <div className={styles.shopSearchBox}>
          <Search size={16} color="#9ca3af" />
          <input placeholder="추가할 대학로 맛집 이름을 검색하세요... (예: 엄마밥줘, 스타벅스)" />
        </div>
        <div className={styles.footprintList}>
          {FOOTPRINTS.map((fp) => (
            <div className={styles.footprintItem} key={fp.rank}>
              <span className={styles.footprintRank}>{fp.rank}</span>
              <div className={styles.footprintShopInfo}>
                <span className={styles.footprintShopName}>{fp.name}</span>
                <span className={styles.footprintShopCategory}>{fp.category}</span>
              </div>
              <div className={styles.footprintMsgBox}>
                <input defaultValue={fp.message} />
              </div>
              <button className={styles.footprintDeleteBtn} aria-label="삭제">
                <XCircle size={12} />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.footprintActions}>
          <button className={styles.footprintSecondaryBtn}>가게 순서 변경</button>
          <button className={styles.footprintPrimaryBtn}>지도 설정 완료</button>
        </div>
      </div>
    </div>
  );
}
