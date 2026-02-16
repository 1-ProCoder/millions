import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { HabitLogForm } from "@/components/HabitLogForm";
import { ProgressGraphPlaceholder } from "@/components/ProgressGraphPlaceholder";
import { TimelineShiftBadge } from "@/components/TimelineShiftBadge";
import { useStreak } from "@/hooks/useStreak";
import { HabitLog } from "@/types/models";

export function HabitTrackerScreen() {
  const [logs, setLogs] = useState<HabitLog[]>([]);
  const streak = useStreak(logs);
  const points = useMemo(() => logs.length * 10 + streak * 5, [logs.length, streak]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Habit Tracker</Text>
      <Text style={styles.sub}>Current streak: {streak} days</Text>
      <TimelineShiftBadge points={points} />
      <HabitLogForm onSubmit={(log) => setLogs((prev) => [...prev, log])} />
      <ProgressGraphPlaceholder />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#f8fafc", flexGrow: 1 },
  heading: { fontSize: 24, fontWeight: "700", marginBottom: 6 },
  sub: { marginBottom: 10, color: "#334155" }
});
