import { Menu } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell min-h-screen">
      {menuOpen && (
        <button
          className="mobile-backdrop"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className={menuOpen ? "sidebar-wrap sidebar-wrap-open" : "sidebar-wrap"}>
        <Sidebar />
      </div>
      <main className="main-area">
        <header className="mobile-header">
          <button
            className="icon-button"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={21} />
          </button>
          <span className="mobile-brand">jebsay</span>
          <span className="preview-chip">Preview</span>
        </header>
        <Outlet />
      </main>
    </div>
  );
}
