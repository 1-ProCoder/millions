import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { buildFutureSelfSystemPrompt } from "@/services/chatPersona";
import { UserProfile } from "@/types/models";

const mockProfile: UserProfile = {
  userId: "demo-user",
  fullName: "Alex",
  goals: [
    { id: "g1", category: "career", title: "Become a product engineer" },
    { id: "g2", category: "fitness", title: "Run 10km comfortably" }
  ],
  baselineHabits: { sleepHours: 7, studyHours: 2, exerciseMinutes: 30, deepWorkHours: 2 },
  preferredHorizon: "5_years",
  subscriptionTier: "premium"
};

export function ChatScreen() {
  const systemPrompt = buildFutureSelfSystemPrompt(mockProfile, "User improved consistency in last 2 weeks but misses weekend planning.");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AI Chat (Future Self Persona)</Text>
      <Text style={styles.caption}>System prompt preview:</Text>
      <Text style={styles.prompt}>{systemPrompt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc", padding: 16 },
  heading: { fontSize: 24, fontWeight: "700", marginBottom: 8 },
  caption: { fontWeight: "600", marginBottom: 4 },
  prompt: { backgroundColor: "white", borderRadius: 10, padding: 12, color: "#1f2937" }
});
