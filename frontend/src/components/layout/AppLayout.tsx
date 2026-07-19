import { Outlet } from 'react-router-dom';
import GNB from './GNB';
import styles from './AppLayout.module.css';

export default function AppLayout() {
  return (
    <div className={styles.layout}>
      <GNB />
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
}
