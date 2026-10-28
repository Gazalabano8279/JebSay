import type { HealthResponse } from "../types/api";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "") ??
  "http://localhost:8000";

export async function fetchHealth(
  signal?: AbortSignal,
): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/health`, { signal });
  if (!response.ok) {
    throw new Error(`API responded with HTTP ${response.status}`);
  }

  const payload: unknown = await response.json();
  if (
    typeof payload !== "object" ||
    payload === null ||
    !("status" in payload) ||
    payload.status !== "ok" ||
    !("service" in payload) ||
    typeof payload.service !== "string" ||
    !("version" in payload) ||
    typeof payload.version !== "string"
  ) {
    throw new Error("API returned an invalid health response.");
  }

  return payload as HealthResponse;
}
