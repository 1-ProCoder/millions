import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "@/screens/AuthScreen";
import { ChatScreen } from "@/screens/ChatScreen";
import { DashboardScreen } from "@/screens/DashboardScreen";
import { HabitTrackerScreen } from "@/screens/HabitTrackerScreen";
import { OnboardingScreen } from "@/screens/OnboardingScreen";
import { SubscriptionScreen } from "@/screens/SubscriptionScreen";

export type RootStackParamList = {
  Auth: undefined;
  Onboarding: undefined;
  HabitTracker: undefined;
  Dashboard: undefined;
  Chat: undefined;
  Subscription: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="HabitTracker" component={HabitTrackerScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
