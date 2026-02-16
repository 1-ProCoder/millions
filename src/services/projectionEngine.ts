import { HabitProfile, ProjectionResult, TimeHorizon } from "@/types/models";

const horizonMultiplier: Record<TimeHorizon, number> = {
  "1_year": 1,
  "5_years": 2.1,
  "10_years": 3.4
};

export const simulateProjection = (
  habits: HabitProfile,
  horizon: TimeHorizon,
  improvementFactor = 1
): ProjectionResult => {
  const multiplier = horizonMultiplier[horizon];
  const focusComposite = (habits.studyHours * 2 + habits.deepWorkHours * 2 + habits.exerciseMinutes / 30 + habits.sleepHours) * improvementFactor;

  const academicScore = Math.min(100, Math.round(focusComposite * 6 * multiplier));
  const skillGrowthScore = Math.min(100, Math.round((habits.deepWorkHours * 12 + habits.studyHours * 10) * multiplier * improvementFactor));
  const careerReadinessScore = Math.min(100, Math.round((habits.deepWorkHours * 8 + habits.exerciseMinutes / 10 + habits.sleepHours * 3) * multiplier * improvementFactor));

  return {
    horizon,
    trajectoryLabel: improvementFactor > 1 ? "Improved habits trajectory" : "Current habits trajectory",
    academicScore,
    skillGrowthScore,
    careerReadinessScore,
    summary: `Over ${horizon.replace("_", " ")}, your consistency trends suggest ${academicScore >= 75 ? "strong" : "moderate"} academic progress, ${skillGrowthScore >= 75 ? "high" : "steady"} skill accumulation, and ${careerReadinessScore >= 75 ? "accelerated" : "developing"} career readiness.`
  };
};
