import rawAxios from 'axios';
import {api} from "./axios.config";

const API_URL = api.apiUrl;
const userId = "c7543252-3789-4cb6-b6f0-af0ee43677c2"

const LIST_COLLECTION = "/collection"
const CREATE_COLLECTION ="/collection"

export function listCollection() {
	let QUERY = `?userId=${userId}`
	return rawAxios.get(API_URL + LIST_COLLECTION + QUERY);
}

export function createCollection(collectionName, collectionDescription){
    const payload ={
        collectionName: collectionName,
        collectionDescription:collectionDescription,
        userId: userId
    }
    return rawAxios.post(API_URL+CREATE_COLLECTION, payload);
}