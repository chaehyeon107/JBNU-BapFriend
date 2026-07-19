export type Shop = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  address: string;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  closeTime: string;
  phone: string;
  website: string;
  representativeMenu: string;
  price: string;
  description: string;
  photos: string[];
  capacity: string;
  openedAt: string;
  mapPosition: { x: number; y: number };
};

export const shops: Shop[] = [
  {
    id: 'mom-bap',
    name: '엄마밥줘',
    category: '한식',
    subcategory: '백반',
    address: '전라북도 전주시 덕진구 명륜3길 14',
    rating: 4.8,
    reviewCount: 124,
    isOpen: true,
    closeTime: '22:00',
    phone: '063-123-4567',
    website: 'https://example.com/mombap',
    representativeMenu: '제육볶음 백반정식',
    price: '8,500원',
    description: '엄마 손맛 가득한 푸짐한 한상 차림, 공기밥 무한 리필 가능!',
    photos: ['menu-photo-1.png', 'menu-photo-2.png', 'menu-photo-3.png'],
    capacity: '32석',
    openedAt: '2015.03',
    mapPosition: { x: 380, y: 640 },
  },
  {
    id: 'matsarang-bunsik',
    name: '맛사랑 분식',
    category: '분식',
    subcategory: '분식',
    address: '전라북도 전주시 덕진구 백제대로 200',
    rating: 4.6,
    reviewCount: 88,
    isOpen: true,
    closeTime: '21:00',
    phone: '063-111-2222',
    website: '',
    representativeMenu: '떡볶이 세트',
    price: '6,000원',
    description: '학교 앞 분식의 정석, 매콤달콤 떡볶이가 인기 메뉴입니다.',
    photos: [],
    capacity: '20석',
    openedAt: '2018.09',
    mapPosition: { x: 300, y: 480 },
  },
  {
    id: 'sinjeongmun-tongdak',
    name: '신정문 통닭',
    category: '치킨',
    subcategory: '통닭',
    address: '전라북도 전주시 덕진구 신정문로 12',
    rating: 4.7,
    reviewCount: 152,
    isOpen: true,
    closeTime: '24:00',
    phone: '063-222-3333',
    website: '',
    representativeMenu: '옛날 통닭',
    price: '18,000원',
    description: '바삭한 옛날 통닭과 시원한 생맥주가 어울리는 곳.',
    photos: [],
    capacity: '40석',
    openedAt: '2010.05',
    mapPosition: { x: 500, y: 550 },
  },
  {
    id: 'daehakro-malatang',
    name: '대학로 마라탕',
    category: '중식',
    subcategory: '마라탕',
    address: '전라북도 전주시 덕진구 대학로 55',
    rating: 4.5,
    reviewCount: 76,
    isOpen: true,
    closeTime: '22:30',
    phone: '063-333-4444',
    website: '',
    representativeMenu: '마라탕 (2인분)',
    price: '15,000원',
    description: '재료를 직접 골라 담는 정통 마라탕 맛집.',
    photos: [],
    capacity: '28석',
    openedAt: '2020.11',
    mapPosition: { x: 650, y: 620 },
  },
  {
    id: 'gujeongmun-caffeine',
    name: '구정문 카페인',
    category: '카페/디저트',
    subcategory: '카페',
    address: '전라북도 전주시 덕진구 구정문로 8',
    rating: 4.6,
    reviewCount: 63,
    isOpen: true,
    closeTime: '23:00',
    phone: '063-444-5555',
    website: '',
    representativeMenu: '아메리카노',
    price: '3,500원',
    description: '조용히 공부하기 좋은 넓은 좌석의 카페.',
    photos: [],
    capacity: '50석',
    openedAt: '2019.02',
    mapPosition: { x: 820, y: 580 },
  },
  {
    id: 'katsu-house',
    name: '카츠하우스',
    category: '일식',
    subcategory: '돈까스',
    address: '전북대 구정문 먹자골목',
    rating: 4.6,
    reviewCount: 98,
    isOpen: true,
    closeTime: '21:30',
    phone: '063-555-6666',
    website: '',
    representativeMenu: '치즈카츠',
    price: '9,500원',
    description: '두툼한 돈까스와 바삭한 튀김옷이 특징.',
    photos: [],
    capacity: '24석',
    openedAt: '2017.07',
    mapPosition: { x: 700, y: 500 },
  },
];

export const bestPicks = [
  { rank: 1, shopId: 'mom-bap', distance: '전북대 구정문 도보 3분' },
  { rank: 2, shopId: 'katsu-house', distance: '구정문 먹자골목' },
  { rank: 3, shopId: 'daehakro-malatang', distance: '신정문 근처' },
];
