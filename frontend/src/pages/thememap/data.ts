import pick1 from '../../assets/images/thememap/pick-1.png';
import pick2 from '../../assets/images/thememap/pick-2.png';
import pick3 from '../../assets/images/thememap/pick-3.png';
import grid1 from '../../assets/images/thememap/grid-1.png';
import grid2 from '../../assets/images/thememap/grid-2.png';
import grid3 from '../../assets/images/thememap/grid-3.png';
import grid4 from '../../assets/images/thememap/grid-4.png';
import grid5 from '../../assets/images/thememap/grid-5.png';
import grid6 from '../../assets/images/thememap/grid-6.png';
import place1 from '../../assets/images/thememap/place-1.png';
import place2 from '../../assets/images/thememap/place-2.png';
import place3 from '../../assets/images/thememap/place-3.png';

export const PICK_CARDS = [
  {
    title: '잔과 함께 부딪히는 눈빛, 구정문 와인바',
    desc: '분위기에 취하고 맛에 취하는 대학로 베스트 무드 스폿 모음',
    count: 4,
    photo: pick1,
  },
  {
    title: '거스를 수 없는 감칠맛, 연어 & 일식',
    desc: '두툼한 생연어와 바삭한 카츠동이 그리운 날 찾게되는 찐맛집 코스',
    count: 5,
    photo: pick2,
  },
  {
    title: '해장이 시급할 때, 든든하고 뜨끈한 국밥지도',
    desc: '시험 끝난 날, 술자리 다음 날 아침 구정문 골목길 해장 0순위 리스트',
    count: 6,
    photo: pick3,
  },
];

export const CATEGORIES = ['전체', '밥집', '카페', '디저트', '술집', '일상', '기타'];

export const THEME_MAPS = [
  {
    id: 'hombap-top5',
    category: '밥집',
    author: '덕진동_식신',
    title: '혼밥하기 좋은 식당 TOP5',
    places: 5,
    likes: 45,
    picked: true,
    photo: grid1,
  },
  {
    id: 'cafe-hidden',
    category: '카페',
    author: '과제지옥대학생',
    title: '전북대 근처 숨은 감성 카페 모음',
    places: 5,
    likes: 23,
    picked: false,
    photo: grid2,
  },
  {
    id: 'date-course',
    category: '밥집',
    author: '캠퍼스커플예정',
    title: '썸타는 후배랑 꼭 가야하는 데이트 코스',
    places: 4,
    likes: 31,
    picked: false,
    photo: grid3,
  },
  {
    id: 'exam-night',
    category: '술집',
    author: '중도탈출러',
    title: '구정문 밤샘 필수, 시험기간 야식 맛집',
    places: 6,
    likes: 18,
    picked: false,
    photo: grid4,
  },
  {
    id: 'exam-bapguk',
    category: '밥집',
    author: '공대생밥심',
    title: '시험기간 속 든든한 백반 & 국밥집 리스트',
    places: 3,
    likes: 52,
    picked: false,
    photo: grid5,
  },
  {
    id: 'hanok-pub',
    category: '술집',
    author: '전주전통파',
    title: '한옥 분위기 물씬, 고즈넉하고 이쁜 주점',
    places: 4,
    likes: 27,
    picked: false,
    photo: grid6,
  },
];

export const PREVIEW = {
  badge: '인기 밥집 테마',
  author: '덕진동_식신',
  title: '혼밥하기 좋은 가성비 식당 TOP5',
  desc: '혼자 밥 먹기 전혀 눈치 안 보이고 푸짐한 양에 밥 무한 리필까지 되는 대학로 숨은 알짜배기들만 고르고 골랐습니다!',
  places: [
    {
      name: '엄마밥줘',
      price: '8,500원',
      desc: '구정문 최고 가성비, 엄마 손맛 제육볶음 백반',
      photo: place1,
      mapLabel: '엄마밥줘 (선택됨)',
      active: true,
    },
    {
      name: '맛사랑 분식',
      price: '6,500원',
      desc: '돈 없는 대학생들의 단비, 푸짐한 돌솥비빔밥',
      photo: place2,
      mapLabel: '맛사랑 분식',
      active: false,
    },
    {
      name: '전북대 진가진',
      price: '9,000원',
      desc: '교수님들도 줄서서 드시는 맑은 곰탕 한그릇',
      photo: place3,
      mapLabel: undefined,
      active: false,
    },
  ],
};
