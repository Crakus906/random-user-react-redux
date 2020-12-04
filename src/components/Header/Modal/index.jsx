import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SignupForm from './SingupForm';

import st from './styles.scss';

// eslint-disable-next-line react/prop-types
export default function SingIn({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={st.modalBody}>
        <SignupForm onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
}
