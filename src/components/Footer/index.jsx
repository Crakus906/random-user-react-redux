import React from 'react';
import st from './styles.scss';

export default function Footer() {
  return (
    <div className={st.footer}>
      <div className={st.footerContent}>
        <a href="">2020 © Wezom React-Redux Test</a>
      </div>
    </div>
  );
}