import React from 'react';
import { useSelector } from 'react-redux';
import {
  filteredContactsSelector,
} from '@/services/selector/selector';

import st from './styles.scss';

export default function Statistic() {
  const filterContacts = useSelector(filteredContactsSelector);
  const numberCountries = filterContacts?.reduce((array, i) => ({
    ...array,
    [i.location.country]: (array[i.location.country] || 0) + 1,
  }), {});

  let maleLength = 0;
  let femaleLength = 0;

  filterContacts?.forEach((item) => {
    if (item.gender === 'male') {
      maleLength++;
    } else femaleLength++;
  });

  return (
    <div className={st.statisticBlock}>
      <div className={st.statisticBackground}>
        <h3>Statistic</h3>
        <div className={st.stastatistic}>
          <div className={st.colection}>
            <p>Collection size</p>
            <span>{filterContacts.length}</span>
          </div>
          <div className={st.gender}>
            <div className={st.maleFemale}>
              <div className={st.colection}>
                <p>Males</p>
                <span>{maleLength}</span>
              </div>
              <div className={st.colection}>
                <p>Females</p>
                <span>{femaleLength}</span>
              </div>
              <div className={st.colection}>
                <p>Indeterminate</p>
                <span>0</span>
              </div>
            </div>
            <p>Women predominate</p>
          </div>
        </div>
        <div className={st.nationalities}>
          <p>Nationalities</p>
          <div className={st.national}>
            {
              Object.keys(numberCountries || {}).map((country, i) => (
                <span className key={i}>
                {`${country}`}: <p>{`${numberCountries[country]}`} country</p>
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
