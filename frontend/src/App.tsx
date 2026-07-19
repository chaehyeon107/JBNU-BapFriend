import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/home/HomePage';
import MyPage from './pages/mypage/MyPage';
import CategoryPage from './pages/category/CategoryPage';
import RecordPage from './pages/record/RecordPage';
import FriendPage from './pages/friend/FriendPage';
import FriendFoodMapPage from './pages/friendmap/FriendFoodMapPage';
import RecommendPage from './pages/recommend/RecommendPage';
import ThemeMapPage from './pages/thememap/ThemeMapPage';
import ThemeMapManagePage from './pages/thememapmanage/ThemeMapManagePage';
import ThemeMapCreatePage from './pages/thememapcreate/ThemeMapCreatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/theme-map" element={<ThemeMapPage />} />
          <Route path="/theme-map/manage" element={<ThemeMapManagePage />} />
          <Route path="/theme-map/create" element={<ThemeMapCreatePage />} />
          <Route path="/friends" element={<FriendPage />} />
          <Route path="/friends/:friendId" element={<FriendFoodMapPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
