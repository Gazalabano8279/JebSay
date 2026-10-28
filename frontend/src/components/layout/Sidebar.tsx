import {
  ArrowLeftRight,
  ChartNoAxesCombined,
  CircleHelp,
  Coins,
  LayoutDashboard,
  Settings,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { ApiStatus } from "./ApiStatus";

const navigation = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Transactions", to: "/transactions", icon: ArrowLeftRight },
  { label: "Budgets", to: "/budgets", icon: Coins },
  { label: "Mutual Ledger", to: "/mutual-ledger", icon: UsersRound },
  { label: "Insights", to: "/insights", icon: ChartNoAxesCombined },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink className="brand" to="/" aria-label="Jebsay home">
        <span className="brand-mark" aria-hidden="true">
          j
        </span>
        <span>jebsay</span>
      </NavLink>

      <div className="nav-caption">WORKSPACE</div>
      <nav className="primary-nav" aria-label="Main navigation">
        {navigation.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              `nav-link${isActive ? " nav-link-active" : ""}`
            }
            to={to}
            end={to === "/"}
          >
            <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
            <span>{label}</span>
            {label === "Mutual Ledger" && (
              <span className="nav-soon">Soon</span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <NavLink className="nav-link" to="/settings">
          <Settings size={18} strokeWidth={1.8} aria-hidden="true" />
          <span>Settings</span>
        </NavLink>
        <div className="help-card">
          <div className="help-icon">
            <CircleHelp size={17} aria-hidden="true" />
          </div>
          <div>
            <strong>Building better money habits?</strong>
            <p>Your financial space starts here.</p>
          </div>
        </div>
        <div className="sidebar-footer">
          <ApiStatus />
          <span>Preview build · v0.1</span>
        </div>
      </div>
    </aside>
  );
}
