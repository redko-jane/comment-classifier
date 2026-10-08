from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.deps import get_db
from app.schemas.comment import CommentCreate, CommentRead
from app.crud import comment as crud_comment

router = APIRouter(prefix="/comments", tags=["comments"])

@router.post("/", response_model=CommentRead, status_code=status.HTTP_201_CREATED)
def create_comment(payload: CommentCreate, db: Session = Depends(get_db)):
    return crud_comment.create(db, payload)