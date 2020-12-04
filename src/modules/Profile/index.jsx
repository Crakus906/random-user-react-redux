/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import { currentDataSelector } from '@/services/selector/selector';
import { Header, Footer, Button } from '@/components/index';
import st from './styles.scss';

export default function Profile() {
  const сurrentData = useSelector(currentDataSelector);

  if (!сurrentData) return null;

  const {
    name: { title, first, last },
    location: {
      country, state, city, street: { name, number },
    },
  } = сurrentData;

  return (
    <div className={st.home}>
      <div className={st.homeContainer}>
        <Header data={сurrentData} />
      </div>
      <div className={st.main}>
          <div className={st.profile}>
            <h1>Profile</h1>
            <div className={st.profileContent}>
              <img src={сurrentData.picture.large} alt=""/>
              <div className={st.profileContact}>
                <h4 className={st.initialsName}> {`${title} ${first} ${last} (${сurrentData.dob.age} yers)`}</h4>
                <hr/>
                <p><a>{сurrentData.email}</a></p>
                <p><a>{сurrentData.cell}</a></p>
                <p> {`/${country}/${state}, ${city},${name} ${number}`}</p>
                <hr/>
                <Button className={st.btn}>Dutch</Button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}
