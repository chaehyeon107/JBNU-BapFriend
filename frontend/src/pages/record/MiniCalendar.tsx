import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './RecordPage.module.css';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

type Props = {
  viewYear: number;
  viewMonth: number; // 0-indexed
  selectedDate: Date;
  onChangeMonth: (year: number, month: number) => void;
  onSelectDate: (date: Date) => void;
};

export default function MiniCalendar({
  viewYear,
  viewMonth,
  selectedDate,
  onChangeMonth,
  onSelectDate,
}: Props) {
  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const goPrevMonth = () => {
    const prev = new Date(viewYear, viewMonth - 1, 1);
    onChangeMonth(prev.getFullYear(), prev.getMonth());
  };
  const goNextMonth = () => {
    const next = new Date(viewYear, viewMonth + 1, 1);
    onChangeMonth(next.getFullYear(), next.getMonth());
  };

  const isSelected = (day: number) =>
    selectedDate.getFullYear() === viewYear &&
    selectedDate.getMonth() === viewMonth &&
    selectedDate.getDate() === day;

  return (
    <div className={styles.miniCalendar}>
      <div className={styles.calendarHeader}>
        <button className={styles.calendarNavBtn} onClick={goPrevMonth} aria-label="이전 달">
          <ChevronLeft size={16} />
        </button>
        <span className={styles.calendarHeaderLabel}>
          {viewYear}년 {viewMonth + 1}월
        </span>
        <button className={styles.calendarNavBtn} onClick={goNextMonth} aria-label="다음 달">
          <ChevronRight size={16} />
        </button>
      </div>
      <div className={styles.weekdaysRow}>
        {WEEKDAYS.map((w, i) => (
          <span
            key={w}
            className={`${styles.weekdayCell} ${i === 0 ? styles.weekdaySun : ''} ${
              i === 6 ? styles.weekdaySat : ''
            }`}
          >
            {w}
          </span>
        ))}
      </div>
      <div className={styles.daysGrid}>
        {cells.map((day, i) =>
          day === null ? (
            <span key={`empty-${i}`} className={`${styles.dayCell} ${styles.dayCellEmpty}`} />
          ) : (
            <button
              key={day}
              className={`${styles.dayCell} ${isSelected(day) ? styles.dayCellSelected : ''}`}
              onClick={() => onSelectDate(new Date(viewYear, viewMonth, day))}
            >
              {day}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
