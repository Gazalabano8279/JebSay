# Jebsay

**Teri Jeb, Tera Control.**

Jebsay is an AI-powered personal finance platform in development. Its long-term goal is to help people understand everyday finances, shared obligations, and future financial decisions.

## Phase 1 scope

This phase establishes a working frontend and FastAPI backend, a health-check connection, PostgreSQL-ready database plumbing, tests, and developer documentation. The dashboard is a development preview: financial totals are zero and there are no real or sample transactions. Authentication, financial records, forecasts, and AI/ML features are intentionally not implemented.

## Planned capabilities

- Personal income and expense tracking, budgets, and savings goals.
- Mutual Ledger entries requiring confirmation by both participants.
- Repayment tracking and dispute handling.
- Cash-flow forecasting and what-if simulations.
- Explainable insights and, where useful, spending analysis with machine learning.

## Technology

- Frontend: React, Vite, TypeScript, Tailwind CSS, React Router, Recharts, Lucide, ESLint.
- Backend: Python 3.12+, FastAPI, Pydantic Settings, SQLAlchemy 2, Alembic, PostgreSQL, Psycopg 3, Pytest, Ruff.

## Project structure

```text
jebsay/
├── backend/
│   ├── app/                 # API, configuration, database, schemas
│   ├── tests/
│   ├── alembic/             # Migration environment
│   ├── alembic.ini
│   └── pyproject.toml
├── docs/
│   └── architecture.md
├── frontend/
│   ├── src/                 # Components, pages, services, hooks, types
│   └── ...
├── .env.example
└── README.md
```

## Prerequisites (Windows)

- Python 3.12 or newer.
- Node.js 20.19+ or 22.12+ and npm.
- PostgreSQL 14+ for future database-backed features. It is not required for the health endpoint or current tests.
- Windows Command Prompt (`cmd.exe`) commands are shown below. The commands also work in PowerShell, except activation uses `.\.venv\Scripts\Activate.ps1` there.

## Environment setup

The backend reads configuration from its environment. Copy `.env.example` to `backend\.env` and set `DATABASE_URL` to your local PostgreSQL connection. The root env example is documentation; Vite reads its own `frontend\.env` file.

```cmd
copy .env.example backend\.env
copy frontend\.env.example frontend\.env
```

The defaults allow the Vite development server at `http://localhost:5173` and `http://127.0.0.1:5173`. Configure additional exact browser origins using the comma-separated `CORS_ORIGINS` variable. Do not put backend secrets in `VITE_` variables; Vite values are public in browser code.

### PostgreSQL configuration

Install PostgreSQL locally using the official Windows installer, create a database named `jebsay`, and use the user/password configured on your local instance. Example `.env` value:

```dotenv
DATABASE_URL=postgresql+psycopg://postgres:YOUR_LOCAL_PASSWORD@localhost:5432/jebsay
```

URL-encode special characters in the password. The project does not fall back to SQLite. The app does not connect to PostgreSQL at startup, and the health endpoint does not depend on it. Database connectivity has not been verified by the Phase 1 tests; the provided environment did not have the `psql` executable available.

## Backend setup and run

From the project root in Command Prompt:

```cmd
cd backend
py -3.12 -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
python -m pip install -e ".[dev]"
copy .env.example .env
uvicorn app.main:app --reload
```

The API is at `http://127.0.0.1:8000/`, health is at `http://127.0.0.1:8000/api/v1/health`, and interactive docs are at `http://127.0.0.1:8000/docs`.

Run backend tests and lint:

```cmd
cd backend
python -m pytest
ruff check .
```

## Frontend setup and run

Open another Command Prompt at the project root:

```cmd
cd frontend
npm install
copy .env.example .env
npm run dev
```

The development preview is at `http://localhost:5173`. It requests the backend at `http://localhost:8000` by default. Change `VITE_API_BASE_URL` in `frontend\.env` if needed.

Run frontend checks:

```cmd
cd frontend
npm run lint
npm run typecheck
npm run build
```

## Current limitations and security

- There is no authentication or secure user account; never enter private financial data.
- No bank connection, transactions, budgets, database tables, predictions, or AI/ML are implemented.
- Health status confirms only that the API process responds; it is not a database readiness check.
- The frontend validates health responses and distinguishes API errors from network disconnection.
- PostgreSQL configuration and a reusable session dependency are present, but database connectivity and migrations have not been exercised.
- No secrets are included in source or environment examples. Keep real `.env` files local and out of version control.

## Development roadmap

1. Phase 1: app foundation and development dashboard (current).
2. Phase 2: define user, transaction, and budget domain/API requirements before introducing persistence or authentication.
3. Later: Mutual Ledger confirmation and repayment workflows; explainable forecasting and carefully scoped AI/ML.

See [docs/architecture.md](docs/architecture.md) for design boundaries and future extension points.
