import friendKimjw from '../../assets/images/friend/friend-kimjw.png';
import friendHanjm from '../../assets/images/friend/friend-hanjm.png';
import friendLeedw from '../../assets/images/friend/friend-leedw.png';
import friendParksy from '../../assets/images/friend/friend-parksy.png';
import requestKimjw from '../../assets/images/friend/request-kimjw.png';
import requestParksy from '../../assets/images/friend/request-parksy.png';

export const FRIENDS = [
  { id: 'kimjw', name: '김정원', status: '온라인', online: true, photo: friendKimjw },
  { id: 'hanjm', name: '한지민', status: '3시간 전', online: false, photo: friendHanjm },
  { id: 'leedw', name: '이동원', status: '오프라인', online: false, photo: friendLeedw },
  { id: 'parksy', name: '박소율', status: '온라인', online: true, photo: friendParksy },
];

export const RECEIVED_REQUESTS = [
  {
    id: 'r1',
    name: '김정원',
    when: '7월 20일 (토) 오후 12:30',
    where: '엄마밥줘',
    message: '제육볶음 백반에 낮술 한잔 어때요?',
    photo: requestKimjw,
  },
  {
    id: 'r2',
    name: '박소율',
    when: '7월 22일 (월) 오후 6:00',
    where: '카츠하우스',
    message: '시험도 끝났는데 돈까스 격파하러 가시죠!',
    photo: requestParksy,
  },
];

export const SENT_RESPONSES = [
  { id: 's1', name: '김정원', when: '1월 2일 목요일 오후 2시', status: '수락했습니다' },
];

export const FOOTPRINTS = [
  { rank: 1, name: '엄마밥줘', category: '한식 · 백반', message: '제육볶음 백반정식 강추! 공기밥 무한리필' },
  { rank: 2, name: '대학로 마라탕', category: '중식 · 마라탕', message: '꿔바로우가 유난히 쫀득하고 가성비 짱임' },
  { rank: 3, name: '카츠하우스', category: '일식 · 돈까스', message: '치즈카츠 비주얼 미쳤음... 시험 끝나고 필수' },
];

export const TASTE_SLIDERS = [
  { left: '싱싱함 (Bland)', right: '짜요 (Salty)', value: 30 },
  { left: '담백함 (Mild)', right: '느끼함 (Greasy)', value: 55 },
  { left: '맵찔이 (No Spicy)', right: '매운거 좋아 (Spicy)', value: 70 },
  { left: '단거별로 (No Sweet)', right: '단거 좋아 (Sweet)', value: 45 },
];

export const CANT_EAT = ['오이', '굴', '고수'];
export const BEST_FOODS = ['1위: 김치찌개', '2위: 수제돈까스', '3위: 삼겹살구이'];
export const CATEGORY_PREFERENCE = ['한식 (백반, 찌개류)', '일식/돈까스', '고기/구이류'];
