import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, Star, Footprints } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import friendProfile from '../../assets/images/friendmap/friend-profile.png';
import { TASTE_SLIDERS, TOP5, REVIEWED_SHOPS, MAP_MARKERS } from './data';
import styles from './FriendFoodMapPage.module.css';

export default function FriendFoodMapPage() {
  const { friendId } = useParams();
  const [reviewFilter, setReviewFilter] = useState<'all' | 'favorites' | 'professor'>('all');

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbMuted}>전북대맛집</span>
          <span className={styles.breadcrumbSep}>{'>'}</span>
          <span className={styles.breadcrumbMuted}>친구 목록</span>
          <span className={styles.breadcrumbSep}>{'>'}</span>
          <span className={styles.breadcrumbActive}>효자동_미식가님의 맛집지도</span>
        </div>
        <div className={styles.headerRow}>
          <div className={styles.headerTitleBlock}>
            <h1 className={styles.pageTitle}>효자동_미식가의 보물지도 🗺️</h1>
            <p className={styles.pageSubtitle}>
              진짜 맛잘알 친구가 추천하는 보석 같은 대학로 단골 맛집 리스트
              {friendId ? ` (friendId: ${friendId})` : ''}
            </p>
          </div>
          <button className={styles.importBtn}>
            <Download size={14} />
            친구 지도 가져오기
          </button>
        </div>
      </div>

      <div className={styles.mainBody}>
        <aside className={styles.sidePanel}>
          <div className={styles.friendSummary}>
            <img className={styles.friendAvatar} src={friendProfile} alt="효자동_미식가" />
            <div>
              <div className={styles.friendNameRow}>
                <span className={styles.friendName}>효자동_미식가</span>
                <span className={styles.friendLevelBadge}>레벨 8</span>
              </div>
              <p className={styles.friendMeta}>단골가게 18곳 정복 · 탐험가 랭킹 42위</p>
            </div>
          </div>

          <div className={styles.bioBox}>
            <span className={styles.bioLabel}>식도락 한줄 철학</span>
            <p className={styles.bioText}>
              &quot;내 즐거움은 그 누구도 침범하지 못할 숨은 맛집 발굴에서 온다. 가성비보다 확실한
              풍미!&quot;
            </p>
          </div>

          <div className={styles.divider} />

          <div>
            <p className={styles.sectionTitle}>친구의 입맛 취향 감별기 👅</p>
            <div className={styles.slidersGrid} style={{ marginTop: 16 }}>
              {TASTE_SLIDERS.map((slider) => (
                <div className={styles.sliderBlock} key={slider.left}>
                  <div className={styles.sliderLabels}>
                    <span>{slider.left}</span>
                    <span>{slider.right}</span>
                  </div>
                  <div className={styles.sliderTrackWrap}>
                    <div className={styles.sliderTrack} />
                    <div className={styles.sliderFill} style={{ width: `${slider.value}%` }} />
                    <div className={styles.sliderKnob} style={{ left: `${slider.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          <div>
            <p className={styles.sectionTitle}>음식 문화 & 선호도</p>
            <div className={styles.foodCultureRows} style={{ marginTop: 16 }}>
              <div className={styles.foodCultureRow}>
                <span className={`${styles.foodCultureKey} ${styles.foodCultureKeyRed}`}>
                  못 먹는 음식:
                </span>
                <span className={styles.foodCultureValue}>가지, 가지볶음, 오이, 생당근</span>
              </div>
              <div className={styles.foodCultureRow}>
                <span className={`${styles.foodCultureKey} ${styles.foodCultureKeyOrange}`}>
                  선호 카테고리:
                </span>
                <span className={`${styles.foodCultureValue} ${styles.foodCultureValueStrong}`}>
                  한식 &gt; 일식 = 양식 &gt; 중식
                </span>
              </div>
            </div>
            <div className={styles.bestFoodBox} style={{ marginTop: 12 }}>
              <span className={styles.bestFoodTitle}>최애 음식 BEST 3 👑</span>
              <div className={styles.bestFoodTags}>
                <span className={styles.bestFoodTag} style={{ background: '#eff6ff', color: '#3b82f6' }}>
                  1위 제육볶음
                </span>
                <span className={styles.bestFoodTag} style={{ background: '#ecfdf5', color: '#10b981' }}>
                  2위 안심카츠
                </span>
                <span className={styles.bestFoodTag} style={{ background: '#fff7ed', color: '#ff6b35' }}>
                  3위 특선초밥
                </span>
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          <div style={{ width: '100%' }}>
            <div className={styles.rankingHeader}>
              <span className={styles.sectionTitle}>효자동픽 맛집 랭킹 TOP 5</span>
              <button className={styles.rankingLink}>전체순위</button>
            </div>
            <div className={styles.rankList} style={{ marginTop: 14 }}>
              {TOP5.map((item) => (
                <div className={styles.rankItem} key={item.rank}>
                  <span
                    className={`${styles.rankBadge} ${item.rank > 3 ? styles.rankBadgeMuted : ''}`}
                  >
                    {item.rank}
                  </span>
                  <div className={styles.rankInfo}>
                    <div className={styles.rankTop}>
                      <span className={styles.rankName}>{item.name}</span>
                      <span className={styles.rankCategory}>{item.category}</span>
                    </div>
                    <p className={styles.rankComment}>{item.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.mapCard}>
            <div className={styles.mapCardHeader}>
              <div className={styles.mapCardTitleRow}>
                <span className={styles.mapCardDot} />
                <span className={styles.mapCardTitle}>친구의 발도장 발자국 지도 🐾</span>
              </div>
              <div className={styles.mapToggles}>
                <span className={styles.mapToggleItem}>
                  발도장 마커 표시
                  <span className={styles.toggleTrack}>
                    <span className={styles.toggleKnob} />
                  </span>
                </span>
                <span className={styles.mapToggleItem}>
                  코멘트 말풍선 항상 노출
                  <span className={styles.toggleTrack}>
                    <span className={styles.toggleKnob} />
                  </span>
                </span>
              </div>
            </div>

            <div className={styles.mapCanvas}>
              <div className={styles.mapCampus} />
              <span className={styles.mapLabel} style={{ left: 380, top: 180 }}>
                전북대학교 전주캠퍼스 🌲
              </span>
              <span className={styles.mapLabelSmall} style={{ left: 190, top: 100 }}>
                대운동장
              </span>
              <span className={styles.mapLabelSmall} style={{ left: 460, top: 280 }}>
                중앙도서관
              </span>
              <div className={styles.mapRoadH} />
              <div className={styles.mapRoadV} style={{ left: 80 }} />
              <div className={styles.mapRoadV} style={{ left: 780 }} />
              <span className={styles.mapRoadLabel}>전북대 구정문 대학로거리 (도보 통제구역)</span>

              {MAP_MARKERS.map((marker) => (
                <div
                  className={styles.mapMarker}
                  style={{ left: marker.left, top: marker.top }}
                  key={marker.name}
                >
                  {marker.bubble && (
                    <span
                      className={styles.mapBubble}
                      style={{ background: marker.bubbleColor }}
                    >
                      &quot;{marker.bubble}&quot;
                    </span>
                  )}
                  <span
                    className={`${styles.markerPin} ${marker.active ? styles.markerPinActive : ''}`}
                  >
                    <Footprints size={10} />
                    {marker.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.reviewSection}>
            <div className={styles.reviewSectionHeader}>
              <div className={styles.reviewSectionTitleBlock}>
                <span className={styles.reviewSectionTitle}>효자동_미식가의 보물 맛집리스트 🎁</span>
                <span className={styles.reviewSectionDesc}>
                  친구만의 주관적인 기준과 애정이 깃든 찐후기를 살펴보세요.
                </span>
              </div>
              <div className={styles.filterPills}>
                <button
                  className={`${styles.filterPill} ${
                    reviewFilter === 'all' ? styles.filterPillActive : ''
                  }`}
                  onClick={() => setReviewFilter('all')}
                >
                  전체보기
                </button>
                <button
                  className={`${styles.filterPill} ${
                    reviewFilter === 'favorites' ? styles.filterPillActive : ''
                  }`}
                  onClick={() => setReviewFilter('favorites')}
                >
                  단골가게 (18)
                </button>
                <button
                  className={`${styles.filterPill} ${
                    reviewFilter === 'professor' ? styles.filterPillActive : ''
                  }`}
                  onClick={() => setReviewFilter('professor')}
                >
                  교수님 추천픽 (4)
                </button>
              </div>
            </div>

            {REVIEWED_SHOPS.map((shop) => (
              <div className={styles.reviewCard} key={shop.id}>
                <div className={styles.reviewCardTop}>
                  <div>
                    <div className={styles.reviewShopNameRow}>
                      <span className={styles.reviewShopName}>{shop.name}</span>
                      <span className={styles.reviewShopTag}>{shop.category}</span>
                      <span className={styles.reviewShopDistance}>{shop.distance}</span>
                    </div>
                    <p className={styles.reviewOpenStatus}>
                      영업 중 · {shop.closeTime} 영업 종료
                    </p>
                  </div>
                  <div className={styles.reviewRatingRow}>
                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                    <span className={styles.reviewRating}>{shop.rating}</span>
                    <span className={styles.reviewRatingCount}>(리뷰 {shop.reviewCount})</span>
                  </div>
                </div>

                <div
                  className={`${styles.commentBox} ${
                    shop.commentColor === 'blue' ? styles.commentBoxBlue : styles.commentBoxRed
                  }`}
                >
                  💬{' '}
                  <span
                    className={
                      shop.commentColor === 'blue'
                        ? styles.commentAuthorBlue
                        : styles.commentAuthorRed
                    }
                  >
                    효자동_미식가의 한줄평:
                  </span>{' '}
                  &quot;{shop.comment}&quot;
                </div>

                <div className={styles.photoMenuRow}>
                  {shop.photos.map((photo, i) => (
                    <img className={styles.reviewPhoto} src={photo} alt={shop.name} key={i} />
                  ))}
                  <div className={styles.menuInfoBox}>
                    <span className={styles.menuInfoTitle}>대표 추천 메뉴</span>
                    {shop.menus.map((menu) => (
                      <div className={styles.menuRow} key={menu.name}>
                        <span className={styles.menuRowName}>{menu.name}</span>
                        <span className={styles.menuRowPrice}>{menu.price}</span>
                      </div>
                    ))}
                    <div className={styles.menuDividerLine} />
                    <div className={styles.menuSubBlock}>
                      <span className={styles.menuSubLabel}>메뉴소개</span>
                      <p className={styles.menuSubText}>{shop.menuIntro}</p>
                    </div>
                    <div className={styles.menuSubBlock}>
                      <span className={styles.menuSubLabel}>먹어본 메뉴</span>
                      <div className={styles.eatenTags}>
                        {shop.eatenMenus.map((menu) => (
                          <span className={styles.eatenTag} key={menu}>
                            {menu}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.menuSubBlock}>
                      <span className={styles.menuSubLabel}>메모</span>
                      <p className={styles.menuSubText}>{shop.memo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
