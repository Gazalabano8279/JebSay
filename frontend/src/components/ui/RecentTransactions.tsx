import { ArrowDownLeft, ArrowUpRight, ReceiptText } from "lucide-react";

export function RecentTransactions() {
  return (
    <section className="panel transactions-panel">
      <div className="panel-heading">
        <div>
          <h2>Recent transactions</h2>
          <p>Your latest money movements</p>
        </div>
        <span className="text-action">View all</span>
      </div>
      <div className="empty-transactions">
        <div className="empty-icon">
          <ReceiptText size={22} strokeWidth={1.7} aria-hidden="true" />
        </div>
        <strong>No transactions yet</strong>
        <p>Once you add transactions, they’ll show up here.</p>
      </div>
      <div className="transaction-legend" aria-label="Transaction types">
        <span>
          <ArrowDownLeft size={14} aria-hidden="true" /> Income
        </span>
        <span>
          <ArrowUpRight size={14} aria-hidden="true" /> Expenses
        </span>
      </div>
    </section>
  );
}
