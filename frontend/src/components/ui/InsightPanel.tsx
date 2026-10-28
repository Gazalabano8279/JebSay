import { Lightbulb } from "lucide-react";

export function InsightPanel() {
  return (
    <section className="insight-panel">
      <div className="insight-title">
        <span className="insight-icon">
          <Lightbulb size={17} aria-hidden="true" />
        </span>
        <div>
          <h2>A little insight</h2>
          <span className="insight-label">Getting started</span>
        </div>
      </div>
      <p>
        A clearer picture starts with the basics. Add your first transaction
        when you’re ready.
      </p>
      <div className="insight-disclaimer">
        <span className="disclaimer-dot" />
        No financial data has been analyzed
      </div>
    </section>
  );
}
