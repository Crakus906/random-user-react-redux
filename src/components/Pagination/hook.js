import { useDispatch, useSelector } from 'react-redux';
import { setPage, paginationNumber, paginationNumberFirst } from '@/services/actions/user';
import { filteredContactsSelector, userSelector, paginationListSelector } from '@/services/selector/selector';

export default function usePagination() {
  const dispatch = useDispatch();
  const { page } = useSelector(userSelector);
  const filterContacts = useSelector(filteredContactsSelector);
  const list = useSelector(paginationListSelector);

  const getPages = Array.from(Array(Math.ceil(filterContacts.length / 12)), (_, i) => i + 1);
  const goNext = () => {
    if (page <= Math.floor(9 / 2)) {
      if (list[4] <= Math.floor(9 / 2)) dispatch(paginationNumber(list.map((i) => i + 1)));
      dispatch(setPage(page + 1));
    } else {
      if (list[list.length - 1] < getPages.length) dispatch(paginationNumber(list.map((i) => i + 1)));
      if (page < getPages.length) dispatch(setPage(page + 1));
    }
  };

  const goPrev = () => {
    const getPage = getPages.slice(getPages.length - 4);
    if (page >= getPage[0]) {
      if (list[6] <= getPage[0]) dispatch(paginationNumber(list.map((i) => i - 1)));
      dispatch(setPage(page - 1));
    } else {
      if (page > 1) dispatch(setPage(page - 1));
      if (list[0] > 1) dispatch(paginationNumber(list.map((i) => i - 1)));
    }
  };

  const goPage = (e) => {
    if (e <= getPages.length) {
      dispatch(setPage(e));
      dispatch(paginationNumber(Array.from(list, (_, i) => i + e)));
    }
  };

  const goFirst = () => {
    dispatch(setPage(Math.min.apply(null, getPages)));
    dispatch(paginationNumber(getPages.slice(0, 9)));
  };

  const goLast = () => {
    dispatch(setPage(Math.max.apply(null, getPages)));
    dispatch(paginationNumber(getPages.slice(getPages.length - 9)));
  };

  return {
    list,
    goNext,
    goPrev,
    goFirst,
    goLast,
    goPage,
    page,
  };
}
