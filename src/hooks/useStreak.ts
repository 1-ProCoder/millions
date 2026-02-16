import { useMemo } from "react";
import { HabitLog } from "@/types/models";

const isConsecutiveDay = (prev: string, next: string): boolean => {
  const prevDate = new Date(prev);
  const nextDate = new Date(next);
  const diffMs = Math.abs(nextDate.getTime() - prevDate.getTime());
  return diffMs === 24 * 60 * 60 * 1000;
};

export function useStreak(logs: HabitLog[]) {
  return useMemo(() => {
    if (!logs.length) return 0;

    const sorted = [...logs].sort((a, b) => a.date.localeCompare(b.date));
    let streak = 1;

    for (let i = sorted.length - 1; i > 0; i--) {
      if (isConsecutiveDay(sorted[i - 1].date, sorted[i].date)) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  }, [logs]);
}
