# FutureSelf AI Folder Structure (Detailed)

## Mobile App Layers
- `src/screens`: feature-level screens for auth, onboarding, tracking, dashboard, chat, subscriptions
- `src/components`: reusable UI blocks
- `src/services`: API, projections, prompt generation
- `src/hooks`: reusable client-side logic (e.g., streaks)
- `src/types`: shared domain models

## Backend Layers
- `backend/supabase/schema.sql`: relational model, RLS and indexes
- `backend/functions/chat-future-self.ts`: secure AI proxy + memory retrieval + response generation
- `backend/functions/projection-engine.ts`: deterministic + AI-assisted projections

## Suggested Scaling Extensions
- `src/features/*`: split by bounded context as app grows
- `backend/functions/webhooks/*`: billing + analytics webhooks
- `backend/jobs/*`: nightly trend summaries and proactive nudges
