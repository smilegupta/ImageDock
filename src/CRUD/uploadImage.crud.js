import rawAxios from 'axios';
import {api} from "./axios.config";

const API_URL = api.apiUrl;
const UPLOAD_IMAGE = "/upload";
const RECENT_UPLOAD = "/recent-uploads"
const IMAGE_STORE = "/image-store"

export function uploadImage(uploadImageUrl){
    const payload ={
        url: uploadImageUrl
    }
    return rawAxios.post(API_URL+UPLOAD_IMAGE, payload);
}

export function imageStore(imageURL){
    const payload = {
        imageURL: imageURL
    }
    return rawAxios.post(API_URL+IMAGE_STORE, payload)
}

export function getRecentUploads() {
	return rawAxios.get(API_URL + RECENT_UPLOAD);
}