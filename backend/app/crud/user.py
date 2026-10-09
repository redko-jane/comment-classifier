from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate


def get_by_email(db: Session, email: str) -> User | None:
    return db.query(User).filter(User.email == email).first()


def get_by_username(db: Session, username: str) -> User | None:
    return db.query(User).filter(User.username == username).first()


def create(db: Session, payload: UserCreate) -> User:
    user = User(
        email=payload.email,
        username=payload.username,
        hashed_password=payload.password,  # TODO: хеш в лабе №4
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user