import slotMombap from '../../assets/images/recommend/slot-mombap.png';
import slotDeokjin from '../../assets/images/recommend/slot-deokjin.png';
import slotSarangbang from '../../assets/images/recommend/slot-sarangbang.png';
import restaurant1 from '../../assets/images/recommend/restaurant-1.png';
import restaurant2 from '../../assets/images/recommend/restaurant-2.png';
import restaurant3 from '../../assets/images/recommend/restaurant-3.png';
import restaurant4 from '../../assets/images/recommend/restaurant-4.png';
import kalguksu1 from '../../assets/images/recommend/kalguksu-1.png';
import kalguksu2 from '../../assets/images/recommend/kalguksu-2.png';

export const MENU_POOL = [
  '제육볶음',
  '돈까스',
  '마라탕',
  '순대국밥',
  '치즈카츠',
  '떡볶이',
  '초밥',
  '파스타',
];

export const SLOT_SHOPS = [
  {
    name: '엄마밥줘',
    category: '한식 · 백반',
    distance: '전북대 구정문 도보 3분',
    rating: 4.8,
    reviewCount: 124,
    photo: slotMombap,
  },
  {
    name: '덕진백반',
    category: '한식 · 백반',
    distance: '덕진광장 골목길 위치',
    rating: 4.6,
    reviewCount: 92,
    photo: slotDeokjin,
  },
  {
    name: '전북대 사랑방',
    category: '한식 · 백반',
    distance: '학생회관 근처 가성비 노포 맛집',
    rating: 4.5,
    reviewCount: 78,
    photo: slotSarangbang,
  },
];

export const CATEGORIES = ['한식', '중식', '일식/돈까스', '양식', '세계요리', '카페/디저트', '술집'];

export const RESTAURANTS = [
  {
    name: '엄마밥줘',
    tag: '한식 · 백반',
    distance: '전북대 구정문 도보 3분',
    address: '전주시 덕진구 명륜4길 12',
    menu: '제육볶음',
    price: '8,500원',
    rating: 4.8,
    reviewCount: 124,
    photo: restaurant1,
  },
  {
    name: '전북대 사랑방',
    tag: '한식 · 백반',
    distance: '전북대 근처 가성비 노포',
    address: '전주시 덕진구 권삼득로 333',
    menu: '된장찌개',
    price: '7,000원',
    rating: 4.5,
    reviewCount: 78,
    photo: restaurant2,
  },
  {
    name: '덕진백반',
    tag: '한식 · 백반',
    distance: '덕진동 15분',
    address: '전주시 덕진구 명륜3길 20',
    menu: '백반정식',
    price: '8,000원',
    rating: 4.6,
    reviewCount: 92,
    photo: restaurant3,
  },
  {
    name: '국밥천국',
    tag: '한식 · 국밥',
    distance: '전북대 후문 5분',
    address: '전주시 덕진구 명륜5길 8',
    menu: '돼지국밥',
    price: '8,000원',
    rating: 4.3,
    reviewCount: 56,
    photo: restaurant4,
  },
  {
    name: '할매순대국',
    tag: '한식 · 국밥',
    distance: '구정문 도보 7분',
    address: '전주시 덕진구 권삼득로 333',
    menu: '순대국',
    price: '9,000원',
    rating: 4.4,
    reviewCount: 67,
    photo: restaurant1,
  },
  {
    name: '미가식당',
    tag: '한식 · 찌개',
    distance: '덕진동 10분',
    address: '전주시 덕진구 명륜5길 8',
    menu: '김치찌개',
    price: '7,500원',
    rating: 4.2,
    reviewCount: 45,
    photo: restaurant4,
  },
];

export const MENU_TABS = [
  { name: '냉면', count: 4 },
  { name: '칼국수', count: 6 },
  { name: '샌드위치', count: 3 },
  { name: '김밥', count: 8 },
  { name: '쿠키', count: 5 },
];

export const TODAY_SHOPS = [
  {
    name: '구정문 손칼국수',
    address: '전주시 덕진구 명륜2길 15 (대운동장 뒷골목)',
    menu: '바지락 칼국수 + 수제만두',
    price: '7,500원',
    rating: 4.8,
    reviewCount: 132,
    photo: kalguksu1,
  },
  {
    name: '면식가 전북대점',
    address: '전주시 덕진구 명륜3길 29',
    menu: '얼큰 짬뽕 칼국수',
    price: '8,000원',
    rating: 4.5,
    reviewCount: 89,
    photo: kalguksu2,
  },
];
