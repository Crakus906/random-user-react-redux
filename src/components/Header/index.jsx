import React, { useState, useRef } from 'react';
import { useDispatch, } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuHeaderSvg } from '@/assets/icons/index';
import { deleteData } from '@/services/actions/user'
import { Overlay, Tooltip } from 'react-bootstrap';
import Modal from './Modal';
import st from './styles.scss';

export default function Header({ data }) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className={st.header}>
      <div className={st.headerMenu}>
        <Link to='/' className={st.btn} >Home</Link>
        {data && <Link to='/contacts' className={st.btn}>Contacts</Link>}
      </div>
      <div className={st.headerSignIn}>
        {!data && <button className={st.btn} onClick={() => setModalShow(true)}>
            Sign In
          </button>
        }
        {data && <button className={st.btn}>
            <button className={st.btn} ref={target} onClick={() => setShow(!show)}>
            {data && data.name.title} {data && data.name.first} {data && data.name.last} <MenuHeaderSvg /> <img src={data && data.picture.thumbnail} alt=""/>
            </button>
            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => (
                <Tooltip className={st.BlockLink} id="overlay-example" {...props}>
                  <Link className={st.linkBtn} to='/Profile' >Profilee</Link>
                  <Link className={st.linkBtn} to='/' onClick={() => dispatch(deleteData())}> Logout</Link>
                </Tooltip>
              )}
            </Overlay>
          </button>
        }
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
