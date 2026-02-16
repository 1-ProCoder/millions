import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ProgressGraphPlaceholder } from "@/components/ProgressGraphPlaceholder";
import { ProjectionComparisonCard } from "@/components/ProjectionComparisonCard";
import { simulateProjection } from "@/services/projectionEngine";

export function DashboardScreen() {
  const habits = { sleepHours: 6.5, studyHours: 2, exerciseMinutes: 20, deepWorkHours: 1.5 };
  const current = simulateProjection(habits, "5_years", 1);
  const improved = simulateProjection(habits, "5_years", 1.25);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <Text style={styles.sub}>Timeline visualization + projection comparison</Text>
      <ProjectionComparisonCard current={current} improved={improved} />
      <ProgressGraphPlaceholder />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#f8fafc", flexGrow: 1 },
  heading: { fontSize: 24, fontWeight: "700", marginBottom: 4 },
  sub: { color: "#475569", marginBottom: 8 }
});
