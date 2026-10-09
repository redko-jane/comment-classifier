from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.routes import users, comments
from app.db.base import Base
from app.db.session import engine
from app import models  # noqa: F401  — регистрация моделей в Base

Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.app_name)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(comments.router)


@app.get("/health")
def health():
    return {"status": "ok"}