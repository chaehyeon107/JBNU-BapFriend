import mombap1 from '../../assets/images/friendmap/mombap-1.png';
import mombap2 from '../../assets/images/friendmap/mombap-2.png';
import mombap3 from '../../assets/images/friendmap/mombap-3.png';
import katsu1 from '../../assets/images/friendmap/katsu-1.png';
import katsu2 from '../../assets/images/friendmap/katsu-2.png';
import katsu3 from '../../assets/images/friendmap/katsu-3.png';

export const TASTE_SLIDERS = [
  { left: '싱싱해요 (담백/싱겁)', right: '짭조름해요 (강한 맛)', value: 40 },
  { left: '깔끔·담백해요', right: '녹진·느끼해요', value: 23 },
  { left: '맵찔이에요', right: '매운 맛 중독자', value: 96 },
  { left: '단거 싫어해요', right: '디저트 필수 (당도형)', value: 68 },
];

export const TOP5 = [
  { rank: 1, name: '엄마밥줘', category: '한식', comment: '이모 제육볶음은 일주일에 세 번 먹어도 안 질림' },
  { rank: 2, name: '카츠하우스', category: '일식', comment: '촉촉하고 부드러운 안심 육즙이 폭발함' },
  { rank: 3, name: '대학로 마라탕', category: '중식', comment: '구정문 최고 맵고 알싸한 국물이 당길 때 최고' },
  { rank: 4, name: '맛사랑 분식', category: '분식', comment: '시험기간 새벽 밤샘 후 먹는 야식 라면과 꼬마김밥' },
  { rank: 5, name: '구정문 카페인', category: '카페', comment: '조용한 분위기에 카공하기 가장 최적의 아지트' },
];

export const REVIEWED_SHOPS = [
  {
    id: 'mombap',
    name: '엄마밥줘',
    category: '한식 · 백반',
    distance: '전북대 구정문 도보 3분',
    isOpen: true,
    closeTime: '22:00',
    rating: 4.8,
    reviewCount: 124,
    commentColor: 'blue' as const,
    comment:
      '엄마 손맛이 가득 느껴지는 푸짐한 한상 차림. 제육볶음은 불향이 은은하게 나며 달콤매콤해요. 대학교 근처라 가성비도 미쳤고, 하이라이트는 공기밥 무한 리필이 가능하다는 점!',
    photos: [mombap1, mombap2, mombap3],
    menus: [
      { name: '제육볶음 백반정식 (1인)', price: '8,500원' },
      { name: '우렁된장찌개 백반', price: '8,000원' },
    ],
    menuIntro: '백반정식 - 매일 반찬이 바뀌는 가정식 백반, 제육볶음 - 매콤달콤 돼지고기 볶음',
    eatenMenus: ['제육볶음', '백반정식', '김치찌개'],
    memo: '점심시간에 줄이 길어서 일찍 가야함. 제육볶음 강추!',
  },
  {
    id: 'katsu',
    name: '카츠하우스',
    category: '일식 · 돈까스',
    distance: '구정문 먹자골목 내부',
    isOpen: true,
    closeTime: '21:00',
    rating: 4.6,
    reviewCount: 98,
    commentColor: 'red' as const,
    comment:
      '안심카츠 튀김옷이 극강으로 바삭한데 안의 살코기는 정말 수비드한 것처럼 녹아내려요. 소금이랑 와사비 얹어먹으면 천국 다녀오는 맛입니다.',
    photos: [katsu1, katsu2, katsu3],
    menus: [
      { name: '로스카츠 (등심)', price: '11,000원' },
      { name: '히레카츠 정식 (안심)', price: '12,500원' },
    ],
    menuIntro: '로스카츠 - 바삭한 튀김옷에 촉촉한 등심, 히레카츠 정식 - 안심 카츠와 소금/와사비가 조합',
    eatenMenus: ['로스카츠', '히레카츠 정식', '치즈카츠'],
    memo: '소금/와사비로 먹는게 진리. 먹자골목 안쪽이라 찾기 조금 힘들 수 있어요.',
  },
];

export const MAP_MARKERS = [
  { name: '맛사랑 분식', left: 240, top: 300, active: false, bubble: undefined },
  {
    name: '엄마밥줘 ⭐',
    left: 380,
    top: 280,
    active: true,
    bubble: '제육볶음 백반에 밥 무한리필이라 대학생 배고플 틈이 없음!',
    bubbleColor: '#3b82f6',
  },
  {
    name: '카츠하우스',
    left: 150,
    top: 200,
    active: false,
    bubble: '돈까스 고기가 너무 부드러워서 기절함..',
    bubbleColor: '#ef4444',
  },
  { name: '대학로 마라탕', left: 680, top: 320, active: false, bubble: undefined },
];
