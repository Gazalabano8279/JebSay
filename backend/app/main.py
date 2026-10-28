import logging

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from sqlalchemy.exc import OperationalError
from starlette.middleware.cors import CORSMiddleware

from app.api.router import api_router
from app.core.config import settings

logger = logging.getLogger(__name__)

app = FastAPI(
    title="Jebsay API",
    description="Development API foundation for Jebsay.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)

app.include_router(api_router, prefix="/api/v1")


@app.get("/", tags=["root"])
def read_root() -> dict[str, str]:
    return {"service": "jebsay-api", "message": "Jebsay API is running."}


@app.exception_handler(OperationalError)
async def database_unavailable_handler(
    request: Request, exc: OperationalError
) -> JSONResponse:
    logger.error("Database operation failed for %s", request.url.path)
    return JSONResponse(
        status_code=503,
        content={"detail": "Database service is unavailable."},
    )
