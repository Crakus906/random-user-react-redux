import React from 'react';
import { Link } from 'react-router-dom';
import st from './styles.scss';

export default function Contact({ data }) {
  if (!data) return null;
  const {
    name: { title, first, last },
    location: {
      country, state, city, street: { name, number },
    },
    id: {value},
    picture: { large },
    dob: { age },
  } = data;

  return (
    <div className={st.contactBlock}>
      <div className={st.contact}>
      <Link to={`contact/${value}`} id={data}><img className={st.contactImg} src={`${large}`} alt=""/></Link>
        <div className={st.contactContainer}>
          <h4> {`${title} ${first} ${last} (${age} yers)`} </h4>
          <hr/>
          <p className={st.email}><a>{data.email}</a></p>
          <p className={st.phone}><a>{data.cell}</a></p>
          <p className={st.country}>{`/${country}/ ${state}, ${city}, ${name} ${number}`}</p>
          <hr/>
        </div>
      </div>
    </div>
  );
}
