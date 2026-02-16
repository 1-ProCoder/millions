import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TimelineShiftBadgeProps {
  points: number;
}

export function TimelineShiftBadge({ points }: TimelineShiftBadgeProps) {
  const level = points >= 500 ? "Major Shift" : points >= 250 ? "Positive Shift" : "Stabilizing";

  return (
    <View style={styles.badge}>
      <Text style={styles.label}>Timeline Shift: {level}</Text>
      <Text style={styles.subLabel}>Points: {points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { backgroundColor: "#ecfeff", borderWidth: 1, borderColor: "#0e7490", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 8, alignSelf: "flex-start" },
  label: { color: "#155e75", fontWeight: "700" },
  subLabel: { color: "#155e75", fontSize: 12 }
});
