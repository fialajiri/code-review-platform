"""FastAPI workers application for code review platform."""

from fastapi import FastAPI

app = FastAPI(
    title="Code Review Workers",
    description="AI Agents and Code Analysis Workers",
    version="0.1.0",
)


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "ok", "service": "workers"}


@app.get("/api/v1")
async def api_info():
    """API information endpoint."""
    return {"message": "Workers API v1"}

