import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";

const DashboardPage = lazy(() =>
  import("./pages/DashboardPage").then((module) => ({
    default: module.DashboardPage,
  })),
);
const PlaceholderPage = lazy(() =>
  import("./pages/PlaceholderPage").then((module) => ({
    default: module.PlaceholderPage,
  })),
);

export default function App() {
  return (
    <Suspense fallback={<div className="route-loading" role="status">Loading page…</div>}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route
            path="transactions"
            element={<PlaceholderPage title="Transactions" />}
          />
          <Route path="budgets" element={<PlaceholderPage title="Budgets" />} />
          <Route
            path="mutual-ledger"
            element={<PlaceholderPage title="Mutual Ledger" />}
          />
          <Route path="insights" element={<PlaceholderPage title="Insights" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
