from sqlalchemy.orm import Session

from app.models.comment import Comment
from app.schemas.comment import CommentCreate, CommentUpdate


def _classify_sentiment(text: str) -> str:
    negative_markers = ("плох", "ужас", "ненавиж", "отврат", "кошмар", "bad", "awful", "terrible", "hate")
    positive_markers = ("хорош", "отличн", "прекрасн", "люблю", "нравит", "супер", "great", "good", "love")

    lowered = text.lower()
    if any(m in lowered for m in negative_markers):
        return "negative"
    if any(m in lowered for m in positive_markers):
        return "positive"
    return "positive"

def create(db: Session, payload: CommentCreate, owner_id: int) -> Comment:
    comment = Comment(
        text=payload.text,
        sentiment=_classify_sentiment(payload.text),
        owner_id=owner_id,
    )
    db.add(comment)
    db.commit()
    db.refresh(comment)
    return comment


def get_all_by_user(db: Session, owner_id: int, sentiment: str | None = None):
    query = db.query(Comment).filter(Comment.owner_id == owner_id)
    if sentiment:
        query = query.filter(Comment.sentiment == sentiment)
    return query.order_by(Comment.created_at.desc()).all()


def get_one(db: Session, comment_id: int) -> Comment | None:
    return db.query(Comment).filter(Comment.id == comment_id).first()


def update(db: Session, comment: Comment, payload: CommentUpdate) -> Comment:
    if payload.text is not None:
        comment.text = payload.text
        comment.sentiment = _classify_sentiment(payload.text)
    db.commit()
    db.refresh(comment)
    return comment


def delete(db: Session, comment: Comment) -> None:
    db.delete(comment)
    db.commit()