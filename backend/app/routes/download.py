from fastapi import APIRouter, HTTPException
from app.schemas.request import DownloadRequest
from app.services.downloader import fetch_video_data

router = APIRouter()

@router.post("/download")
def download_video(data: DownloadRequest):
    try:
        result = fetch_video_data(data.url)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
