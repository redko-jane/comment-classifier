from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.schemas.comment import CommentCreate, CommentRead, CommentUpdate
from app.crud import comment as crud_comment

router = APIRouter(prefix="/comments", tags=["comments"])


@router.post("/", response_model=CommentRead, status_code=status.HTTP_201_CREATED)
def create_comment(payload: CommentCreate, db: Session = Depends(get_db)):
    return crud_comment.create(db, payload, owner_id=payload.owner_id)


@router.get("/", response_model=list[CommentRead])
def list_comments(
    owner_id: int | None = None,
    sentiment: str | None = None,
    db: Session = Depends(get_db),
):
    if owner_id is None:
        # без фильтра по пользователю вернём все комментарии (для отладки)
        query = db.query(crud_comment.Comment)
        if sentiment:
            query = query.filter(crud_comment.Comment.sentiment == sentiment)
        return query.order_by(crud_comment.Comment.created_at.desc()).all()
    return crud_comment.get_all_by_user(db, owner_id=owner_id, sentiment=sentiment)


@router.get("/{comment_id}", response_model=CommentRead)
def get_comment(comment_id: int, db: Session = Depends(get_db)):
    comment = crud_comment.get_one(db, comment_id)
    if comment is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Comment not found",
        )
    return comment


@router.patch("/{comment_id}", response_model=CommentRead)
def update_comment(
    comment_id: int,
    payload: CommentUpdate,
    db: Session = Depends(get_db),
):
    comment = crud_comment.get_one(db, comment_id)
    if comment is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Comment not found",
        )
    return crud_comment.update(db, comment, payload)


@router.delete("/{comment_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_comment(comment_id: int, db: Session = Depends(get_db)):
    comment = crud_comment.get_one(db, comment_id)
    if comment is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Comment not found",
        )
    crud_comment.delete(db, comment)
    return None