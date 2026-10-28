from fastapi.testclient import TestClient

from app.core.config import Settings
from app.main import app

client = TestClient(app)


def test_root_endpoint_returns_service_message() -> None:
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {
        "service": "jebsay-api",
        "message": "Jebsay API is running.",
    }


def test_health_endpoint_returns_expected_response() -> None:
    response = client.get("/api/v1/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ok",
        "service": "jebsay-api",
        "version": "0.1.0",
    }


def test_health_endpoint_documents_response_schema() -> None:
    response = client.get("/openapi.json")

    assert response.status_code == 200
    schema = response.json()["components"]["schemas"]["HealthResponse"]
    assert set(schema["required"]) == {"status", "service", "version"}
    assert schema["properties"]["status"]["const"] == "ok"


def test_cors_origins_are_explicit_and_environment_configurable() -> None:
    settings = Settings(
        cors_origins="https://jebsay.example, https://app.jebsay.example",
    )

    assert settings.allowed_origins == [
        "https://jebsay.example",
        "https://app.jebsay.example",
    ]
    assert "*" not in settings.allowed_origins
