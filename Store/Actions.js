import * as TYPES from "./types";

export const addBestCategory = (data) => ({
  type: TYPES.ADD_BEST_CATEGORIE,
  payload: data,
});

export const addSearchList = (data) => ({
  type: TYPES.SET_SEARCH_LIST,
  payload: data,
});

export const setSelectedVideo = (data) => ({
  type: TYPES.SET_SELECTED_VIDEO,
  payload: data,
});

export const setProfil = (data) => ({
  type: TYPES.SET_ROFIL,
  payload: data,
});

export const AddProfilItem = (data) => ({
  type: TYPES.ADD_ROFIL_ITEM,
  payload: data,
});

export const SetTempObject = (data) => ({
  type: TYPES.TEMP_TYPE,
  payload: data,
});
