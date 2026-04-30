from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_images():
    return {'status': 'ok'}
