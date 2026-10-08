from sqlalchemy.orm import Session
from app.models.comment import Comment
from app.schemas.comment import CommentCreate, CommentUpdate

def create(db: Session, payload: CommentCreate, owner_id: int) -> Comment:
    sentiment = classify_sentiment(payload.text)  # бизнес-логика
    comment = Comment(text=payload.text, sentiment=sentiment, owner_id=owner_id)
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
        comment.sentiment = classify_sentiment(payload.text)
    db.commit()
    db.refresh(comment)
    return comment

def delete(db: Session, comment: Comment) -> None:
    db.delete(comment)
    db.commit()