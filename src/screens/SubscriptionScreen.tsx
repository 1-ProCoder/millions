import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function SubscriptionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Subscription</Text>
      <Text style={styles.card}>Free: basic tracking + limited AI chat.</Text>
      <Text style={styles.card}>Premium: advanced projections + voice AI + deeper memory.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc", padding: 16 },
  heading: { fontSize: 24, fontWeight: "700", marginBottom: 10 },
  card: { backgroundColor: "white", borderRadius: 10, padding: 12, marginBottom: 10 }
});
