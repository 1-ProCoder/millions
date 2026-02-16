import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProjectionResult } from "@/types/models";

interface ProjectionComparisonCardProps {
  current: ProjectionResult;
  improved: ProjectionResult;
}

export function ProjectionComparisonCard({ current, improved }: ProjectionComparisonCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Future Projection Comparison</Text>
      <Text style={styles.row}>Academic: {current.academicScore} → {improved.academicScore}</Text>
      <Text style={styles.row}>Skill Growth: {current.skillGrowthScore} → {improved.skillGrowthScore}</Text>
      <Text style={styles.row}>Career Readiness: {current.careerReadinessScore} → {improved.careerReadinessScore}</Text>
      <Text style={styles.summary}>{improved.summary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 14, marginVertical: 8 },
  heading: { fontSize: 16, fontWeight: "700", marginBottom: 8 },
  row: { fontSize: 14, marginBottom: 4 },
  summary: { marginTop: 8, color: "#2f2f2f" }
});
