import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export function OnboardingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Onboarding</Text>
      <Text style={styles.card}>1) Collect goals: academic, career, fitness, financial.</Text>
      <Text style={styles.card}>2) Capture habits: sleep, study, exercise, deep work.</Text>
      <Text style={styles.card}>3) Select time horizon: 1 year / 5 years / 10 years.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#f8fafc", flexGrow: 1 },
  heading: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
  card: { backgroundColor: "white", marginBottom: 10, borderRadius: 10, padding: 12 }
});
