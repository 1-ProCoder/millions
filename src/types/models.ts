export type TimeHorizon = "1_year" | "5_years" | "10_years";
export type GoalCategory = "academic" | "career" | "fitness" | "financial";

export interface Goal {
  id: string;
  category: GoalCategory;
  title: string;
  targetDate?: string;
}

export interface HabitProfile {
  sleepHours: number;
  studyHours: number;
  exerciseMinutes: number;
  deepWorkHours: number;
}

export interface HabitLog {
  date: string;
  sleepHours: number;
  studyHours: number;
  exerciseMinutes: number;
  moodScore: number;
}

export interface ProjectionResult {
  horizon: TimeHorizon;
  trajectoryLabel: string;
  academicScore: number;
  skillGrowthScore: number;
  careerReadinessScore: number;
  summary: string;
}

export interface UserProfile {
  userId: string;
  fullName: string;
  goals: Goal[];
  baselineHabits: HabitProfile;
  preferredHorizon: TimeHorizon;
  subscriptionTier: "free" | "premium";
}
