# FutureSelf AI (Cross-Platform Mobile App)

FutureSelf AI is a React Native (Expo + TypeScript) mobile app where users chat with a simulated version of their future self.

## Tech Stack
- **Mobile:** React Native + Expo + TypeScript
- **Backend:** Supabase (Auth, Postgres, Edge Functions, Storage)
- **AI:** LLM API via secure backend proxy
- **Charts:** Victory Native or React Native SVG charts
- **State/Data:** React Query + Zustand (or Redux Toolkit)

## Complete Folder Structure

```text
.
├── README.md
├── app.json
├── package.json
├── tsconfig.json
├── docs/
│   ├── ai-prompting.md
│   ├── api-design.md
│   ├── database-schema.sql
│   └── folder-structure.md
├── backend/
│   ├── supabase/
│   │   └── schema.sql
│   └── functions/
│       ├── chat-future-self.ts
│       └── projection-engine.ts
└── src/
    ├── App.tsx
    ├── navigation/
    │   └── AppNavigator.tsx
    ├── types/
    │   └── models.ts
    ├── hooks/
    │   └── useStreak.ts
    ├── services/
    │   ├── apiClient.ts
    │   ├── chatPersona.ts
    │   └── projectionEngine.ts
    ├── components/
    │   ├── HabitLogForm.tsx
    │   ├── ProgressGraphPlaceholder.tsx
    │   ├── ProjectionComparisonCard.tsx
    │   └── TimelineShiftBadge.tsx
    └── screens/
        ├── AuthScreen.tsx
        ├── OnboardingScreen.tsx
        ├── HabitTrackerScreen.tsx
        ├── DashboardScreen.tsx
        ├── ChatScreen.tsx
        └── SubscriptionScreen.tsx
```

## Feature Mapping
- **Authentication:** `AuthScreen` + Supabase Auth (email + OAuth providers)
- **Onboarding:** `OnboardingScreen` collects goals, habits, horizon
- **Habit Tracker:** `HabitTrackerScreen` + `HabitLogForm` + `useStreak`
- **Future Projection Engine:** `projectionEngine.ts` + backend edge function
- **AI Chat:** `ChatScreen` + `chatPersona.ts` prompt templates + memory context
- **Gamification:** points + timeline shifts (see `TimelineShiftBadge`)
- **Dashboard:** projection cards + graph placeholders
- **Subscription:** `SubscriptionScreen` with free/premium gating
- **Backend:** SQL schema + API contract in docs

## Quick Start
```bash
npm install
npm run lint
npm run typecheck
npm run start
```

> This repository currently provides a production-ready architecture and core components scaffold. Hook actual Supabase keys and LLM provider credentials through environment variables and secure edge functions.
