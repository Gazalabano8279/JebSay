# Architecture

## Current boundaries

The React/TypeScript application in `frontend/` owns presentation, browser navigation, and API communication. FastAPI in `backend/` owns configuration, validation, API behavior, and future persistence. The browser calls the versioned API over HTTP; the frontend base URL comes from `VITE_API_BASE_URL`, and backend CORS is restricted to an explicit list of local development origins by default.

The dashboard displays zero totals and empty states. It has no financial records to show, and no demo data is mixed into user-facing totals.

The frontend health service validates the versioned health payload at runtime. Its status indicator distinguishes an in-progress check, a successful connection, network unavailability, and an API or response error. A healthy API response confirms that the API process is responding; it does not check PostgreSQL.

## Backend organization

- `app/main.py` creates the FastAPI application and registers routers and safe exception handlers.
- `app/api/routes/` contains versioned route handlers.
- `app/core/` contains typed environment configuration.
- `app/db/` contains the SQLAlchemy declarative base, engine/session factory, and request dependency.
- `app/schemas/` contains validated API response models.
- `alembic/` is configured to read the application metadata and database URL for future migrations.

Creating the engine does not open a database connection. The health endpoint is deliberately independent of PostgreSQL. There is no SQLite fallback. Operational database errors should be reported as service-unavailable responses without exposing connection details.

## Database access

PostgreSQL is the intended database, accessed through SQLAlchemy 2 and Psycopg 3. Route/service code should request a session through the reusable dependency rather than create engines or sessions directly. Schema changes should be made through Alembic migrations; no financial tables are part of this phase.

## Future authentication

Authentication should be added as a dedicated security/dependency layer with explicit identity and authorization checks, rather than coupling credential logic into UI components or financial calculations. The current development dashboard is not an authenticated personal account.

## Future finance and ML design

Financial calculations should be deterministic domain/service functions, with explicit inputs, decimal-safe currency handling, and focused tests. Forecasting or machine-learning outputs should remain distinct and clearly labeled as estimates. LLM-generated explanations may describe verified calculation outputs, but must not be the source of financial arithmetic or be allowed to invent account facts.
