# API Design

Base URL: `/v1`
Auth: Bearer JWT issued by Supabase Auth.

## Authentication
- Supabase handles email/password and OAuth (Google/Apple/GitHub).
- Backend validates JWT for all protected routes.

## Endpoints

### `POST /onboarding`
Create/update onboarding profile, goals, baseline habits.

**Request**
```json
{
  "fullName": "Alex Carter",
  "goals": [{"category":"career","title":"Become senior mobile engineer"}],
  "baselineHabits": {"sleepHours":7,"studyHours":2,"exerciseMinutes":30,"deepWorkHours":2},
  "horizon": "5_years"
}
```

### `POST /habits/log`
Create daily habit log and calculate points.

### `GET /habits/stats?range=30d`
Returns streak, cumulative points, and chart-ready series.

### `POST /projections/run`
Generates two projections from latest habits.

**Response**
```json
{
  "current": {"academicScore":63,"skillGrowthScore":58,"careerReadinessScore":60,"summary":"..."},
  "improved": {"academicScore":81,"skillGrowthScore":79,"careerReadinessScore":84,"summary":"..."}
}
```

### `POST /chat/session`
Create or fetch current active chat session.

### `POST /chat/message`
Sends user message to FutureSelf persona.

**Server flow**
1. Load user memory summary + recent logs/goals
2. Build persona prompt
3. Call LLM provider
4. Persist assistant response and token usage
5. Return answer + suggested action

### `GET /dashboard`
Aggregated response for timeline, trends, projection cards, and subscription state.

### `POST /subscription/checkout`
Initiate premium checkout (Stripe/RevenueCat).

### `POST /webhooks/subscription`
Receives billing events and updates `profiles.subscription_tier`.
