import { useState } from 'react';
import { RECEIVED_REQUESTS, SENT_RESPONSES } from './data';
import styles from './FriendPage.module.css';

export default function AppointmentsTab() {
  const [tab, setTab] = useState<'received' | 'sent'>('received');

  return (
    <div className={styles.card}>
      <div className={styles.apptTabHeader}>
        <button
          className={`${styles.apptTab} ${tab === 'received' ? styles.apptTabActive : ''}`}
          onClick={() => setTab('received')}
        >
          신청 ({RECEIVED_REQUESTS.length})
        </button>
        <button
          className={`${styles.apptTab} ${tab === 'sent' ? styles.apptTabActive : ''}`}
          onClick={() => setTab('sent')}
        >
          답변
        </button>
      </div>

      {tab === 'received' ? (
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
                  <span className={`${styles.requestDetailValue} ${styles.requestDetailValueBold}`}>
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
      ) : (
        <div className={styles.requestsList}>
          {SENT_RESPONSES.map((res) => (
            <div className={styles.sentResponseItem} key={res.id}>
              {res.name}님이 {res.when}의 밥약속을 {res.status}!
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
