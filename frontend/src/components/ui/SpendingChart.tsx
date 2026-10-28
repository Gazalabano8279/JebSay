import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const emptyData = [
  { week: "Week 1", amount: 0 },
  { week: "Week 2", amount: 0 },
  { week: "Week 3", amount: 0 },
  { week: "Week 4", amount: 0 },
];

export function SpendingChart() {
  return (
    <section className="panel spending-panel">
      <div className="panel-heading">
        <div>
          <h2>Spending overview</h2>
          <p>Track how your spending changes over time</p>
        </div>
        <button className="period-button" type="button" disabled>
          This month
          <span aria-hidden="true">⌄</span>
        </button>
      </div>
      <div className="chart-summary">
        <span className="chart-total">$0.00</span>
        <span className="chart-empty-tag">No activity yet</span>
      </div>
      <div className="chart-wrap" role="img" aria-label="Monthly spending is zero">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={emptyData} margin={{ top: 12, right: 12, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="#edf0ed" vertical={false} />
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8a948d", fontSize: 11 }}
              dy={10}
            />
            <YAxis
              domain={[0, 1000]}
              ticks={[0, 250, 500, 750, 1000]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8a948d", fontSize: 11 }}
              tickFormatter={(value: number) => `$${value}`}
            />
            <Tooltip formatter={(value) => [`$${value}`, "Spending"]} />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#2f8059"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "#2f8059", strokeWidth: 0 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="chart-footnote">
        Your spending will appear here after you add transactions.
      </p>
    </section>
  );
}
