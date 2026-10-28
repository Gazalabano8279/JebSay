import type { LucideIcon } from "lucide-react";
import { ArrowDownLeft, ArrowUpRight, CircleDollarSign } from "lucide-react";

interface StatCardProps {
  label: string;
  icon: LucideIcon;
  description: string;
  emphasis?: "positive" | "neutral";
}

export function StatCard({
  label,
  icon: Icon,
  description,
  emphasis = "neutral",
}: StatCardProps) {
  const TrendIcon = emphasis === "positive" ? ArrowUpRight : ArrowDownLeft;

  return (
    <section className="stat-card" aria-label={label}>
      <div className="stat-card-top">
        <span className="stat-icon">
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="stat-period">This month</span>
      </div>
      <p className="stat-label">{label}</p>
      <p className="stat-value">$0.00</p>
      <p className={`stat-description stat-${emphasis}`}>
        <TrendIcon size={14} aria-hidden="true" />
        {description}
      </p>
    </section>
  );
}

export function BalanceCard() {
  return (
    <section className="balance-card" aria-label="Available balance">
      <div className="balance-orbit orbit-one" />
      <div className="balance-orbit orbit-two" />
      <div className="balance-content">
        <div className="balance-label">
          <CircleDollarSign size={17} aria-hidden="true" />
          Available balance
        </div>
        <p className="balance-value">$0.00</p>
        <span className="balance-note">No accounts connected</span>
      </div>
      <div className="balance-card-mark" aria-hidden="true">
        j
      </div>
    </section>
  );
}
