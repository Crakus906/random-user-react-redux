/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import {
  getDataPending,
  geDataSuccess,
  getcontactsPending,
  getcontactsSuccess,
  handleNameFilter,
  handleCountryFilter,
  handleGenderFilter,
  getPageSuccess,
  getPagePending,
  setPage,
  clear,
  paginationNumber,
  paginationNumberFirst,
  deleteData,
} from '@/services/actions/user';

const getFilteredContacts = ({
  contacts, nameFilter, countryFilter, genderFilter,
}) => contacts.filter((contact) => (Object.values(contact.name).join(' ').includes(nameFilter)
  && (genderFilter ? contact.gender === genderFilter.toLowerCase() : true)
  && (countryFilter ? contact.location.country === countryFilter : true)));

const getPages = (data) => {
  const pages = Math.ceil(data.length / 12);
  return Array.from(Array(pages), (_, i) => i + 1).slice(0, 9);
};


const initState = {
  сurrentData: null,
  contacts: [],
  filterContacts: [],
  isFetching: false,
  page: 1,
  pagination: [],
  nameFilter: '',
  countryFilter: null,
  genderFilter: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case `${geDataSuccess}`:
      return {
        ...state,
        сurrentData: payload,
        isFetching: false,
      };
    case `${setPage}`:
      return {
        ...state,
        page: payload,
      };
    case `${paginationNumber}`:
      return {
        ...state,
        pagination: payload,
        // pagination: getPages(payload),
      };
    case `${paginationNumberFirst}`:
      return {
        ...state,
        page: 1,
        pagination: getPages(payload),
      };
    case `${getDataPending}`:
      return {
        ...state,
        isFetching: true,
      };
    case `${getcontactsSuccess}`:
      return {
        ...state,
        contacts: payload,
        filterContacts: payload,
        pagination: getPages(payload),
      };
    case `${getcontactsPending}`:
      return {
        ...state,
        isFetching: true,
      };
    case `${handleNameFilter}`: {
      const data = getFilteredContacts({ ...state, nameFilter: payload });
      return {
        ...state,
        nameFilter: payload,
        filterContacts: data,
        pagination: getPages(data),
        page: 1,
      };
    }
    case `${handleGenderFilter}`: {
      const data = getFilteredContacts({ ...state, genderFilter: payload });
      return {
        ...state,
        genderFilter: payload,
        filterContacts: data,
        pagination: getPages(data),
        page: 1,
      };
    }
    case `${handleCountryFilter}`: {
      const data = getFilteredContacts({ ...state, countryFilter: payload });
      return {
        ...state,
        countryFilter: payload,
        filterContacts: data,
        pagination: getPages(data),
        page: 1,
      };
    }
    case `${getPageSuccess}`:
      return {
        ...state,
        contacts: payload,
        filterContacts: payload,
        isFetching: false,
      };
    case `${getPagePending}`:
      return {
        ...state,
        isFetching: true,
      };
    case `${clear}`:
      return {
        ...state,
        page: 1,
        filterContacts: state.contacts,
        pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      };
    case `${deleteData}`:
      return {
        ...state,
        сurrentData: null,
        contacts: [],
        filterContacts: [],
        isFetching: false,
      };
    default:
      return state;
  }
};
