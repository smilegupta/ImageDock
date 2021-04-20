import rawAxios from "axios";
import { api } from "./axios.config";

const API_URL = api.apiUrl;

const LIST_COLLECTION = "/collection";
const CREATE_COLLECTION = "/collection";
const GET_COLLECTION = "/collection/";
const ADD_IMAGE_TO_COLLECTION = "/collection/image";
const DELETE_COLLECTION = "/collection/"

export function listCollection(userId) {
  const QUERY = `?userId=${userId}`;
  return rawAxios.get(API_URL + LIST_COLLECTION + QUERY);
}

export function createCollection(
  collectionName,
  collectionDescription,
  userId
) {
  const payload = {
    collectionName: collectionName,
    collectionDescription: collectionDescription,
    userId: userId,
  };
  return rawAxios.post(API_URL + CREATE_COLLECTION, payload);
}

export function getCollection(collectionId, userId) {
  const QUERY = `?userId=${userId}`;
  return rawAxios.get(API_URL + GET_COLLECTION + collectionId + QUERY);
}

export function addImageToCollection(collectionId, imageUrl, userId) {
  const payload = {
    collectionId: collectionId,
    userId: userId,
    imageUrl: imageUrl,
  };
  return rawAxios.post(API_URL + ADD_IMAGE_TO_COLLECTION, payload);
}

export function deleteCollection(collectionId, userId) {
  const QUERY = `?userId=${userId}`;
  return rawAxios.delete(API_URL + DELETE_COLLECTION + collectionId + QUERY);
}

export function updateCollection(collectionId, userId, collectionName, collectionDescription ){
  const payload = {
    collectionName: collectionName,
    collectionDescription: collectionDescription,
    userId: userId,
  };
  return rawAxios.put(API_URL + DELETE_COLLECTION + collectionId , payload);
}