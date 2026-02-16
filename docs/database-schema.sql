-- FutureSelf AI database schema (Supabase/Postgres)

create extension if not exists "pgcrypto";

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  subscription_tier text not null default 'free' check (subscription_tier in ('free', 'premium')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  category text not null check (category in ('academic', 'career', 'fitness', 'financial')),
  title text not null,
  target_date date,
  created_at timestamptz not null default now()
);

create table habit_baselines (
  user_id uuid primary key references profiles(id) on delete cascade,
  sleep_hours numeric(4,2) not null,
  study_hours numeric(4,2) not null,
  exercise_minutes integer not null,
  deep_work_hours numeric(4,2) not null,
  horizon text not null check (horizon in ('1_year', '5_years', '10_years')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table habit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  log_date date not null,
  sleep_hours numeric(4,2) not null,
  study_hours numeric(4,2) not null,
  exercise_minutes integer not null,
  mood_score integer not null check (mood_score between 1 and 10),
  points_earned integer not null default 0,
  created_at timestamptz not null default now(),
  unique (user_id, log_date)
);

create table projections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  horizon text not null check (horizon in ('1_year', '5_years', '10_years')),
  scenario text not null check (scenario in ('current', 'improved')),
  academic_score integer not null,
  skill_growth_score integer not null,
  career_readiness_score integer not null,
  summary text not null,
  created_at timestamptz not null default now()
);

create table chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references chat_sessions(id) on delete cascade,
  role text not null check (role in ('system', 'user', 'assistant')),
  content text not null,
  tokens integer,
  created_at timestamptz not null default now()
);

create table timeline_shifts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  shift_level text not null check (shift_level in ('stabilizing', 'positive', 'major')),
  trigger_reason text not null,
  created_at timestamptz not null default now()
);

create index idx_goals_user_id on goals(user_id);
create index idx_habit_logs_user_date on habit_logs(user_id, log_date desc);
create index idx_projections_user_id on projections(user_id);
create index idx_chat_sessions_user_id on chat_sessions(user_id);
create index idx_chat_messages_session_created on chat_messages(session_id, created_at);

alter table profiles enable row level security;
alter table goals enable row level security;
alter table habit_baselines enable row level security;
alter table habit_logs enable row level security;
alter table projections enable row level security;
alter table chat_sessions enable row level security;
alter table chat_messages enable row level security;
alter table timeline_shifts enable row level security;

create policy "profiles self access" on profiles for all using (id = auth.uid()) with check (id = auth.uid());
create policy "goals self access" on goals for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "habit_baselines self access" on habit_baselines for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "habit_logs self access" on habit_logs for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "projections self access" on projections for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "chat_sessions self access" on chat_sessions for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "chat_messages session owner access"
  on chat_messages for all
  using (exists(select 1 from chat_sessions s where s.id = session_id and s.user_id = auth.uid()))
  with check (exists(select 1 from chat_sessions s where s.id = session_id and s.user_id = auth.uid()));
create policy "timeline_shifts self access" on timeline_shifts for all using (user_id = auth.uid()) with check (user_id = auth.uid());
