from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, images, scan, sign, policies, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(images.router, prefix="/images", tags=["images"])
api_router.include_router(scan.router, prefix="/scan", tags=["scan"])
api_router.include_router(sign.router, prefix="/sign", tags=["sign"])
api_router.include_router(policies.router, prefix="/policies", tags=["policies"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
