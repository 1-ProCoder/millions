import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { HabitLog } from "@/types/models";

interface HabitLogFormProps {
  onSubmit: (log: HabitLog) => void;
}

export function HabitLogForm({ onSubmit }: HabitLogFormProps) {
  const [sleepHours, setSleepHours] = useState("7");
  const [studyHours, setStudyHours] = useState("2");
  const [exerciseMinutes, setExerciseMinutes] = useState("30");
  const [moodScore, setMoodScore] = useState("7");

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Log Today</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={sleepHours} onChangeText={setSleepHours} placeholder="Sleep hours" />
      <TextInput style={styles.input} keyboardType="numeric" value={studyHours} onChangeText={setStudyHours} placeholder="Study hours" />
      <TextInput style={styles.input} keyboardType="numeric" value={exerciseMinutes} onChangeText={setExerciseMinutes} placeholder="Exercise minutes" />
      <TextInput style={styles.input} keyboardType="numeric" value={moodScore} onChangeText={setMoodScore} placeholder="Mood 1-10" />
      <Pressable
        style={styles.button}
        onPress={() =>
          onSubmit({
            date: new Date().toISOString().slice(0, 10),
            sleepHours: Number(sleepHours),
            studyHours: Number(studyHours),
            exerciseMinutes: Number(exerciseMinutes),
            moodScore: Number(moodScore)
          })
        }
      >
        <Text style={styles.buttonLabel}>Save Habit Log</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 12, marginVertical: 8 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  input: { borderWidth: 1, borderColor: "#d0d0d0", borderRadius: 8, padding: 10, marginBottom: 8 },
  button: { backgroundColor: "#4f46e5", borderRadius: 8, padding: 12, alignItems: "center" },
  buttonLabel: { color: "white", fontWeight: "700" }
});
