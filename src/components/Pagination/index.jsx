/* eslint-disable import/extensions */
import React from 'react';
import usePagination from './hook.js';

import st from './styles.scss';

export default function Pagination() {
  const {
    list, goNext, goPrev, goFirst, goLast, goPage, page,
  } = usePagination();
  return (
      <div className={st.pagination}>
        <div>
          <button className={st.btn} onClick={((e) => goFirst(e))} >First</button>
          <button className={st.btn} onClick={((e) => goPrev(e))} >Previous</button>
          {list?.map((e) => <button onClick={(() => goPage(e))} className={page === e ? `${st.pageActive}` : `${st.page}`}>{e}</button>)}
          <button className={st.btn} onClick={goNext}>Next</button>
          <button className={st.btn} onClick={((e) => goLast(e))}>Last</button>
        </div>
      </div>
  );
}
