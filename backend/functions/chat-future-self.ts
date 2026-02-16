// Supabase Edge Function sketch for persona chat.
// 1) Validate JWT
// 2) Load memory + goals + latest habits
// 3) Construct system prompt
// 4) Call LLM provider via secure server key
// 5) Persist chat response

export const handler = async (req: Request): Promise<Response> => {
  return new Response(JSON.stringify({ message: "Implement with your LLM SDK of choice." }), {
    headers: { "Content-Type": "application/json" }
  });
};
