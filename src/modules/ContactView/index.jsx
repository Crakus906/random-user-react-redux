import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { currenContactsSelector, currentDataSelector } from '@/services/selector/selector';
import {
  Header, Footer, Button
} from '@/components/index';

import st from './styles.scss';

export default function ContactView() {
  const contacts = useSelector(currenContactsSelector);
  const сurrentData = useSelector(currentDataSelector);
  const params = useParams();
  const contact = contacts.find((e) => +e.id.value === +params.id);

  if (!contact) return null;

  const {
    name: { title, first, last },
    location: {
      country, state, city, street: { name, number },
    },
  } = contact;

  return (
    <div className={st.home}>
      <div className={st.homeContainer}>
        <Header data={сurrentData} />
      </div>
      <div className={st.main}>
          <div className={st.profile}>
            <h1>Contact View</h1>
            <div className={st.profileContent}>
              <img src={contact.picture.large} alt=""/>
              <div className={st.profileContact}>
                <h4 className={st.initialsName}> {`${title} ${first} ${last} (${contact.dob.age} yers)`}</h4>
                <hr/>
                <p><a>{contact.email}</a></p>
                <p><a>{contact.cell}</a></p>
                <p> {`/${country}/${state}, ${city},${name} ${number}`}</p>
                <hr/>

              </div>
            </div>
          </div>
          <Link to='/contacts'><Button className={st.btn}> Back</Button></Link>
        </div>
      <Footer />
    </div>
  );
}
