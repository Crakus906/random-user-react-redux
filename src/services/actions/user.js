import { createAction } from 'redux-actions';
import { api } from '../../constants/api';

export const getDataAction = createAction('');

export const getDataPending = createAction('GET_DATA_PANDING');
export const geDataSuccess = createAction('GET_DATA_SUCCESS');
export const getDataFailed = createAction('GET_DATA_FAILED');

export const getPagePending = createAction('GET_PAGE_PANDING');
export const getPageSuccess = createAction('GET_PAGE_SUCCESS');
export const getPageFailed = createAction('GET_PAGE_FAILED');

export const getcontactsPending = createAction('GET_CONTACTS_PANDING');
export const getcontactsSuccess = createAction('GET_CONTACTS_SUCCESS');
export const getcontactsFailed = createAction('GET_CONTACTS_FAILED');

export const deleteData = createAction('DELETE_DATA');
export const handleNameFilter = createAction('HANDLE_NAME_FILTER');
export const handleCountryFilter = createAction('HANDLE_COUNTRY_FILTER');
export const handleGenderFilter = createAction('HANDLE_GENDER_FILTER');
export const paginationNumber = createAction('PAGINATION_NUMBER');
export const paginationNumberFirst = createAction('PAGINATION_NUMBER_FIRST');
export const setPage = createAction('SET_PAGE');
export const clear = createAction('CLEAR');

export const getData = () => async (dispatch) => {
  try {
    dispatch(getDataPending());
    const res = await api.get('/?results');
    dispatch(geDataSuccess(res.data.results[0]));
  } catch (e) {
    dispatch(getDataFailed());
  }
};

export const getContacts = (page) => async (dispatch) => {
  try {
    dispatch(getcontactsPending());
    const res = await api.get(`/?page=${page}&results=500`);
    dispatch(getcontactsSuccess(res.data.results));
  } catch (e) {
    dispatch(getcontactsFailed());
  }
};
