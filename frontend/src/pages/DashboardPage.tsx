import {
  ArrowDownToLine,
  ArrowUpFromLine,
  PiggyBank,
  Wallet,
} from "lucide-react";
import { BalanceCard, StatCard } from "../components/ui/StatCard";
import { InsightPanel } from "../components/ui/InsightPanel";
import { RecentTransactions } from "../components/ui/RecentTransactions";
import { SpendingChart } from "../components/ui/SpendingChart";
import { ApiStatus } from "../components/layout/ApiStatus";

export function DashboardPage() {
  const dateLabel = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="dashboard-page">
      <div className="preview-banner">
        <span className="preview-banner-dot" />
        Development preview
        <span className="banner-divider">·</span>
        This isn’t a secure personal account
        <span className="banner-api">
          <ApiStatus />
        </span>
      </div>

      <div className="page-content">
        <header className="welcome-row">
          <div>
            <p className="eyebrow">{dateLabel.toUpperCase()} OVERVIEW</p>
            <h1>Your money, <span>made clearer.</span></h1>
            <p className="welcome-copy">
              A simple view of your finances starts here.
            </p>
          </div>
          <span className="welcome-date">{dateLabel}</span>
        </header>

        <div className="stats-grid">
          <BalanceCard />
          <StatCard
            label="Income"
            icon={ArrowDownToLine}
            description="No income recorded"
            emphasis="positive"
          />
          <StatCard
            label="Expenses"
            icon={ArrowUpFromLine}
            description="No expenses recorded"
          />
          <StatCard
            label="Savings"
            icon={PiggyBank}
            description="No savings recorded"
            emphasis="positive"
          />
        </div>

        <div className="dashboard-grid">
          <SpendingChart />
          <InsightPanel />
          <RecentTransactions />
          <section className="connect-card" aria-label="Account connection">
            <div className="connect-icon">
              <Wallet size={19} aria-hidden="true" />
            </div>
            <div>
              <h2>Your financial space</h2>
              <p>
                Account connections aren’t available in this preview. Your data
                stays empty until you add it.
              </p>
            </div>
            <span className="connect-badge">Not connected</span>
          </section>
        </div>
        <footer className="page-footer">
          <span>Jebsay is in early development.</span>
          <span>Financial totals are empty by design.</span>
        </footer>
      </div>
    </div>
  );
}
