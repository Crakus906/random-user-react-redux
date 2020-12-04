/* eslint-disable react/prop-types */
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
    id: { value },
    picture: { thumbnail },
    dob: { date, age },
  } = data;

  return (
    <tr className={st.string}>
      <td><Link to={`contact/${value}`} id={data}><img className={st.contactImg} src={`${thumbnail}`} alt=""/></Link></td>
      <td>{`${title} ${first} ${last}`}</td>
      <td>{`${date} ${age} yers`}</td>
      <td>{data.email}</td>
      <td>{data.cell}</td>
      <td>{`/${country}/ ${state}, ${city}, ${name} ${number}`}</td>
      <td>{`${country}`}</td>
      <td></td>
    </tr>
  );
}
