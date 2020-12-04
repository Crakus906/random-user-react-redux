import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

export const userSelector = (state) => state.user;

export const currentDataSelector = createSelector(
  userSelector,
  (data) => data.сurrentData,
);
export const filteredContactsSelector = createSelector(
  userSelector,
  (data) => data.filterContacts,
);
export const currenContactsSelector = createSelector(
  userSelector,
  (data) => data.contacts,
);

export const countriesSelector = createSelector(
  userSelector,
  (data) => data.contacts.reduce((array, item) => {
    if (!array.includes(item.location.country)) {
      return [
        ...array,
        item.location.country,
      ];
    }
    return array;
  }, []),
);

export const paginationListSelector = createSelector(
  userSelector,
  (data) => data.pagination,
);

export const nameFilterSelector = createSelector(
  userSelector,
  (data) => data.nameFilter,
);
export const countryFilterSelector = createSelector(
  userSelector,
  (data) => data.countryFilter,
);
export const genderFilterSelector = createSelector(
  userSelector,
  (data) => data.genderFilter,
);

export const filtersSelector = createSelector(
  userSelector,
  ({ nameFilter, countryFilter, genderFilter }) => ({ nameFilter, countryFilter, genderFilter }),
);
