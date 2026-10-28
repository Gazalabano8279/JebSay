import { CheckCircle2, CircleAlert, LoaderCircle } from "lucide-react";
import { useApiHealth } from "../../hooks/useApiHealth";

export function ApiStatus() {
  const health = useApiHealth();

  if (health.status === "loading") {
    return (
      <span className="api-status api-status-loading" role="status">
        <LoaderCircle size={15} aria-hidden="true" className="spin" />
        Checking API
      </span>
    );
  }

  if (health.status === "connected") {
    return (
      <span className="api-status api-status-connected" role="status">
        <CheckCircle2 size={15} aria-hidden="true" />
        API connected
      </span>
    );
  }

  if (health.status === "error") {
    return (
      <span
        className="api-status api-status-error"
        role="status"
        title={health.message}
      >
        <CircleAlert size={15} aria-hidden="true" />
        API error
      </span>
    );
  }

  return (
    <span
      className="api-status api-status-disconnected"
      role="status"
      title={health.message}
    >
      <CircleAlert size={15} aria-hidden="true" />
      API offline
    </span>
  );
}
