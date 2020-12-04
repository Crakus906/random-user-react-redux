import { useDispatch } from 'react-redux';
import {
  clear, handleNameFilter, handleGenderFilter, handleCountryFilter,
} from '@/services/actions/user';
import debounce from 'lodash/debounce';

export default function useFilterInputs() {
  const dispatch = useDispatch();

  const handleFullName = debounce((e) => {
    dispatch(handleNameFilter(e));
  }, 500);

  const handleMale = (e) => {
    dispatch(handleGenderFilter(e));
  };
  const handleNationaly = (e) => {
    dispatch(handleCountryFilter(e));
  };
  const handlClear = (e) => {
    dispatch(clear(e));
  };
  return {
    handleFullName,
    handleMale,
    handleNationaly,
    handlClear,
  };
}
