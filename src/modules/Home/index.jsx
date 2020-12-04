import React from 'react';
import { useSelector } from 'react-redux';
import { currentDataSelector } from '@/services/selector/selector';
import { Header, Footer } from '@/components/index';

import st from './styles.scss';

export default function Home() {
  const сurrentData = useSelector(currentDataSelector);
  return (
    <div className={st.home}>
      <div className={st.homeContainer}>
        {
          сurrentData ? <Header data={сurrentData} /> : <Header />
        }
      </div>
      <Footer />
    </div>
  );
}
