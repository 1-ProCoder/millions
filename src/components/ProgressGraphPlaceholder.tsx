import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function ProgressGraphPlaceholder() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Progress Graphs</Text>
      <View style={styles.graphArea}>
        <Text style={styles.caption}>Connect Victory Native/Recharts for trend lines (sleep, study, exercise, streak, points).</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginTop: 12, backgroundColor: "#fff", borderRadius: 12, padding: 14 },
  title: { fontSize: 16, fontWeight: "700", marginBottom: 8 },
  graphArea: { height: 140, borderWidth: 1, borderStyle: "dashed", borderColor: "#8b8b8b", borderRadius: 10, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 },
  caption: { textAlign: "center", color: "#5e5e5e" }
});
