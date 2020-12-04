import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  currentDataSelector, filteredContactsSelector, userSelector, filtersSelector,
} from '@/services/selector/selector';
import { Menu } from '@/assets/icons/index';
import {
  Header, Footer, Contact, Pagination, FilterInputs, Statistic, ContactTables,
} from '@/components/index';

import st from './styles.scss';

export default function Contacts() {
  const [menu, setMenu] = useState(true);
  const { page } = useSelector(userSelector);
  const сurrentData = useSelector(currentDataSelector);
  const { nameFilter, countryFilter, genderFilter } = useSelector(filtersSelector);

  const filterContacts = useSelector(filteredContactsSelector);

  const handlMenu = () => {
    setMenu(!menu);
  };

  const filters = filterContacts?.filter((e) => Object.values(e.name).join(' ').includes(nameFilter))
    .filter((e) => (genderFilter ? e.gender === genderFilter.toLowerCase() : e))
    .filter((e) => (countryFilter ? e.location.country === countryFilter : e));
  // console.log(filters);

  if (!filters) return null;
  return (
    <div className={st.home}>
      <div className={st.homeContainer}>
        <Header data={сurrentData} />
      </div>
      <div className={st.contacts}>
        <div className={st.contactsHeader}>
          <span>Contacts</span>
          <span onClick={handlMenu}><Menu/></span>
        </div>
        <div className={st.contactsContent}>
          <div className={st.contactsContentHeader}>
            <FilterInputs />
          </div>
          {/* <div className={st.contactsContentBody} > */}
            {menu ? <div className={st.contactsBlock}>
              {filterContacts?.slice(page * 12 - 12, page * 12).map((contact, i) => (
                <Contact data={contact} key={i} />))}
                </div>
              : <table>
                  <thead>
                    <tr>
                      <th>Avatar</th>
                      <th>Full name</th>
                      <th>Birthday</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Nationality</th>
                    </tr>
                  </thead>
                <tbody>
                  {filterContacts?.slice(page * 12 - 12, page * 12).map((contact, i) => (
                <ContactTables data={contact} key={i} />
                  ))}
                </tbody>
              </table>
            }
          {/* </div> */}
          <Pagination />
        </div>
        <Statistic />
      </div>
      <Footer />
    </div>
  );
}
