import rawAxios from 'axios';
import {api} from "./axios.config";

const API_URL = api.apiUrl;
const UPLOAD_IMAGE = "/upload";

export function uploadLogo(uploadImageUrl){
    const payload ={
        url: uploadImageUrl
    }
    return rawAxios.post(API_URL+UPLOAD_IMAGE, payload);
}
