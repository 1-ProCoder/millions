import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FutureSelf AI</Text>
      <Text style={styles.subtitle}>Sign in with email or continue with OAuth.</Text>
      <Pressable style={styles.primary}><Text style={styles.primaryLabel}>Continue with Email</Text></Pressable>
      <Pressable style={styles.secondary}><Text style={styles.secondaryLabel}>Continue with Google</Text></Pressable>
      <Pressable style={styles.secondary}><Text style={styles.secondaryLabel}>Continue with Apple</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f4f4ff" },
  title: { fontSize: 30, fontWeight: "800", marginBottom: 8 },
  subtitle: { color: "#4b5563", marginBottom: 20 },
  primary: { backgroundColor: "#4f46e5", padding: 12, borderRadius: 10, marginBottom: 10 },
  primaryLabel: { color: "#fff", fontWeight: "700", textAlign: "center" },
  secondary: { borderColor: "#4f46e5", borderWidth: 1, padding: 12, borderRadius: 10, marginBottom: 10 },
  secondaryLabel: { color: "#4f46e5", fontWeight: "700", textAlign: "center" }
});
