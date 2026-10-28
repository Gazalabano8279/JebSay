import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="dashboard-page">
      <div className="preview-banner">
        <span className="preview-banner-dot" />
        Development preview
        <span className="banner-divider">·</span>
        This isn’t a secure personal account
      </div>
      <div className="placeholder-content">
        <div className="placeholder-icon">
          <Construction size={25} aria-hidden="true" />
        </div>
        <p className="eyebrow">COMING LATER</p>
        <h1>{title}</h1>
        <p className="placeholder-copy">
          This part of Jebsay is planned, but it isn’t available in this
          development preview yet.
        </p>
        <Link className="back-link" to="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
