from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_sign():
    return {'status': 'ok'}
