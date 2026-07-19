import { useState } from 'react';
import MapCanvas from './MapCanvas';
import SidePanel from './SidePanel';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [selectedShopId, setSelectedShopId] = useState('mom-bap');

  return (
    <div className={styles.homePage}>
      <MapCanvas selectedShopId={selectedShopId} onSelectShop={setSelectedShopId} />
      <SidePanel onSelectShop={setSelectedShopId} />
    </div>
  );
}
