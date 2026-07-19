import { ChevronRight } from 'lucide-react';
import profileEditAvatar from '../../assets/images/friend/profile-edit-avatar.png';
import {
  TASTE_SLIDERS,
  CANT_EAT,
  BEST_FOODS,
  CATEGORY_PREFERENCE,
} from './data';
import styles from './FriendPage.module.css';

export default function ProfileTab() {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitleRow}>
        <span className={styles.cardTitle}>프로필 정보 수정</span>
        <button className={styles.saveBtn}>저장하기</button>
      </div>

      <div className={styles.profileForm}>
        <div className={styles.picEditor}>
          <img className={styles.picEditorImg} src={profileEditAvatar} alt="프로필" />
          <button className={styles.picEditorLabel}>사진 변경</button>
        </div>
        <div className={styles.inputs}>
          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>소개 메시지</span>
            <div className={styles.inputBox}>전북대 골목 구석구석, 맛있는 한술을 찾는 탐험가</div>
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.inputLabel}>최애 단골 가게</span>
            <button className={styles.inputBox}>
              엄마밥줘 (구정문 한식백반 1위)
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.tasteHeader}>
        <span className={styles.cardTitle}>내 입맛 취향 스펙트럼</span>
        <span className={styles.tasteSubtitle}>
          내 식문화 성향을 정밀 조정해 친구들과 비교해 보세요.
        </span>
      </div>
      <div className={styles.slidersGrid}>
        {[TASTE_SLIDERS.slice(0, 2), TASTE_SLIDERS.slice(2, 4)].map((row, i) => (
          <div className={styles.sliderRow} key={i}>
            {row.map((slider) => (
              <div className={styles.tasteSlider} key={slider.left}>
                <div className={styles.sliderTrack}>
                  <div className={styles.sliderFill} style={{ width: `${slider.value}%` }} />
                  <div className={styles.sliderKnob} style={{ left: `${slider.value}%` }} />
                </div>
                <div className={styles.sliderLabels}>
                  <span>{slider.left}</span>
                  <span>{slider.right}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.dietaryRow}>
        <div className={styles.dietaryBlock}>
          <span className={styles.cardTitle}>음식 문화 및 기호</span>
          <div>
            <p className={styles.dietaryLabel}>못 먹는 음식 / 알레르기</p>
            <div className={styles.badgeRow} style={{ marginTop: 8 }}>
              {CANT_EAT.map((food) => (
                <span className={styles.badgeRed} key={food}>
                  {food}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.dietaryLabel}>인생 푸드 Best 3</p>
            <div className={styles.badgeRow} style={{ marginTop: 8 }}>
              {BEST_FOODS.map((food) => (
                <span className={styles.badgeBlue} key={food}>
                  {food}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.dietaryBlock}>
          <span className={styles.cardTitle}>식문화 카테고리 선호도</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {CATEGORY_PREFERENCE.map((cat, i) => (
              <div className={styles.rankItem} key={cat}>
                <span className={styles.rankBadge}>{i + 1}</span>
                <span className={styles.rankLabel}>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
