export interface HealthResponse {
  status: "ok";
  service: string;
  version: string;
}

export type ApiHealthState =
  | { status: "loading" }
  | { status: "connected"; service: string; version: string }
  | { status: "disconnected"; message: string }
  | { status: "error"; message: string };
