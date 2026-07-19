import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import ProfileTab from './ProfileTab';
import FootprintTab from './FootprintTab';
import AppointmentsTab from './AppointmentsTab';
import { FRIENDS, RECEIVED_REQUESTS } from './data';
import meAvatar from '../../assets/images/friend/me-avatar.png';
import styles from './FriendPage.module.css';

const HUB_TABS = [
  { id: 'profile', label: '프로필 관리' },
  { id: 'footprint', label: '발도장 지도 관리' },
  { id: 'appointments', label: `밥약 알림함 (${RECEIVED_REQUESTS.length})` },
] as const;

function Toggle({ defaultOn = true }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      className={`${styles.toggle} ${on ? styles.toggleOn : ''}`}
      onClick={() => setOn((v) => !v)}
      aria-label="설정 토글"
    >
      <span className={styles.toggleKnob} />
    </button>
  );
}

export default function FriendPage() {
  const navigate = useNavigate();
  const [hubTab, setHubTab] = useState<(typeof HUB_TABS)[number]['id']>('profile');
  const [apptTab, setApptTab] = useState<'received' | 'sent'>('received');

  return (
    <div className={styles.page}>
      <div className={styles.mainBody}>
        <aside className={styles.leftSidebar}>
          <div className={styles.myAvatar}>
            <img className={styles.myAvatarImg} src={meAvatar} alt="내 프로필" />
            <div>
              <div className={styles.myNickRow}>
                <span className={styles.myNickname}>덕진동_식신</span>
                <span className={styles.myBadge}>골드 푸디</span>
              </div>
              <p className={styles.myBio}>전북대 가성비 백반 매니아</p>
            </div>
          </div>

          <div className={styles.divider} />

          <div>
            <p className={styles.sectionTitle}>친구 공개 설정</p>
            <div className={styles.settingsList} style={{ marginTop: 16 }}>
              <div className={styles.settingsRow}>
                <span className={styles.settingsLabel}>친구에게 리뷰 공개</span>
                <Toggle defaultOn />
              </div>
              <div className={styles.settingsRow}>
                <span className={styles.settingsLabel}>친구에게 먹어본 메뉴 공개</span>
                <Toggle defaultOn />
              </div>
              <div className={styles.settingsRow}>
                <span className={styles.settingsLabel}>친구에게 밥약 알림 받기</span>
                <Toggle defaultOn={false} />
              </div>
            </div>
          </div>

          <div className={styles.divider} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
            <div className={styles.friendListHeader}>
              <div className={styles.friendListTitleRow}>
                <span className={styles.sectionTitle}>친구 목록</span>
                <span className={styles.friendCount}>{FRIENDS.length * 6}명</span>
              </div>
              <button className={styles.manageLink}>관리</button>
            </div>
            <div className={styles.searchBox}>
              <Search size={14} color="#9ca3af" />
              <input placeholder="친구 이름 검색..." />
            </div>
            <div className={styles.friendsList}>
              {FRIENDS.map((friend) => (
                <div className={styles.friendRow} key={friend.id}>
                  <button
                    className={styles.friendRowLeft}
                    onClick={() => navigate(`/friends/${friend.id}`)}
                  >
                    <img className={styles.friendAvatar} src={friend.photo} alt={friend.name} />
                    <div style={{ textAlign: 'left' }}>
                      <p className={styles.friendName}>{friend.name}</p>
                      <p
                        className={`${styles.friendStatus} ${
                          friend.online ? styles.friendStatusOnline : ''
                        }`}
                      >
                        {friend.status}
                      </p>
                    </div>
                  </button>
                  <button className={styles.applyBtn}>밥약 신청</button>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className={styles.centerMain}>
          <div className={styles.hubTabs}>
            {HUB_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.hubTab} ${hubTab === tab.id ? styles.hubTabActive : ''}`}
                onClick={() => setHubTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {hubTab === 'profile' && <ProfileTab />}
          {hubTab === 'footprint' && <FootprintTab />}
          {hubTab === 'appointments' && <AppointmentsTab />}
        </main>

        <aside className={styles.rightSidebar}>
          <div className={styles.apptCard}>
            <div className={styles.apptTabHeader}>
              <button
                className={`${styles.apptTab} ${apptTab === 'received' ? styles.apptTabActive : ''}`}
                onClick={() => setApptTab('received')}
              >
                받은 신청 ({RECEIVED_REQUESTS.length})
              </button>
              <button
                className={`${styles.apptTab} ${apptTab === 'sent' ? styles.apptTabActive : ''}`}
                onClick={() => setApptTab('sent')}
              >
                보낸 답변
              </button>
            </div>
            {apptTab === 'received' && (
              <div className={styles.requestsList}>
                {RECEIVED_REQUESTS.map((req) => (
                  <div className={styles.requestCard} key={req.id}>
                    <div className={styles.requestHeader}>
                      <img className={styles.requestAvatar} src={req.photo} alt={req.name} />
                      <div>
                        <p className={styles.requestName}>{req.name}</p>
                        <p className={styles.requestTime}>방금 전 신청</p>
                      </div>
                    </div>
                    <div className={styles.requestDetails}>
                      <div className={styles.requestDetailRow}>
                        <span className={styles.requestDetailKey}>언제:</span>
                        <span className={styles.requestDetailValue}>{req.when}</span>
                      </div>
                      <div className={styles.requestDetailRow}>
                        <span className={styles.requestDetailKey}>어디서:</span>
                        <span
                          className={`${styles.requestDetailValue} ${styles.requestDetailValueBold}`}
                        >
                          {req.where}
                        </span>
                      </div>
                    </div>
                    <p className={styles.requestMessage}>&quot;{req.message}&quot;</p>
                    <div className={styles.requestActions}>
                      <button className={styles.rejectBtn}>거절</button>
                      <button className={styles.acceptBtn}>수락</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.apptCard}>
            <p className={styles.cardTitle}>새로운 밥약 잡기</p>
            <div className={styles.createApptFields}>
              <div>
                <p className={styles.fieldLabel}>만날 친구 선택</p>
                <div className={styles.fieldBox} style={{ marginTop: 6 }}>
                  김정원
                </div>
              </div>
              <div>
                <p className={styles.fieldLabel}>약속 날짜 및 시간</p>
                <div className={styles.fieldBox} style={{ marginTop: 6 }}>
                  7월 25일 (목) 오후 1:00
                </div>
              </div>
              <div>
                <p className={styles.fieldLabel}>전달할 메시지</p>
                <div className={styles.fieldTextarea} style={{ marginTop: 6 }}>
                  맛있는 점심 같이 먹어요!
                </div>
              </div>
            </div>
            <button className={styles.submitApptBtn}>밥약 신청 보내기</button>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}
