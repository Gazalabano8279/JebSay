import { useEffect, useState } from "react";
import { fetchHealth } from "../services/api";
import type { ApiHealthState } from "../types/api";

export function useApiHealth(): ApiHealthState {
  const [health, setHealth] = useState<ApiHealthState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    fetchHealth(controller.signal)
      .then((response) =>
        setHealth({
          status: "connected",
          service: response.service,
          version: response.version,
        }),
      )
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        const message =
          error instanceof Error ? error.message : "Unable to reach the API.";
        setHealth({
          status: error instanceof TypeError ? "disconnected" : "error",
          message,
        });
      });

    return () => controller.abort();
  }, []);

  return health;
}
