from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_scan():
    return {'status': 'ok'}
