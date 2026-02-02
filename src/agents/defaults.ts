// Defaults for agent metadata when upstream does not supply them.
// Can be overridden via environment variables for flexible deployment.

export const DEFAULT_PROVIDER = process.env.CLAWDBOT_DEFAULT_PROVIDER || "anthropic";
export const DEFAULT_MODEL = process.env.CLAWDBOT_DEFAULT_MODEL || "claude-opus-4-6";
export const DEFAULT_CONTEXT_TOKENS = parseInt(
  process.env.CLAWDBOT_DEFAULT_CONTEXT || "200000",
  10
);
