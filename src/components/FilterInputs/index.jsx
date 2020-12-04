import React from 'react';
import { useSelector } from 'react-redux';
import {
  Form, InputGroup, FormControl,
} from 'react-bootstrap';
import {
  countriesSelector,
} from '@/services/selector/selector';
import useFilterInputs from './hook';
import st from './styles.scss';

export default function FilterInputs() {
  const countries = useSelector(countriesSelector);
  const {
    handleFullName, handleMale, handleNationaly, handlClear,
  } = useFilterInputs();

  return (
    <div className={st.headerBox}>
      <InputGroup className={st.name} >
        <FormControl onChange={(e) => handleFullName(e.target.value)}
          placeholder="Search by full name"
        />
      </InputGroup>
      <Form className={st.male}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Control placeholder="Gender" onChange={(e) => handleMale(e.target.value) } as="select" custom>
            <option>Male</option>
            <option>Female</option>
            <option>Indeterminate</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form className={st.nationaly}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Control onChange={(e) => handleNationaly(e.target.value)} as="select" custom>
              {countries?.map((country) => <option>{country}</option>)}
          </Form.Control>
        </Form.Group>
      </Form>
      {/* <p><input className={st.checkBox} type="checkbox" />I am creator</p> */}
      <button className={st.btn} onClick={handlClear} href="#">X Clear</button>
    </div>
  );
}
