from datetime import datetime
from pydantic import BaseModel, Field, ConfigDict

class CommentBase(BaseModel):
    text: str = Field(..., min_length=1, max_length=1000)

class CommentCreate(CommentBase):
    pass  # sentiment определит backend

class CommentUpdate(BaseModel):
    text: str | None = Field(None, min_length=1, max_length=1000)

class CommentRead(CommentBase):
    id: int
    sentiment: str
    created_at: datetime
    owner_id: int

    model_config = ConfigDict(from_attributes=True)