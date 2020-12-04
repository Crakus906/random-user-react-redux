import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from '@/modules/Home';
import Profile from '@/modules/Profile';
import Contacts from '@/modules/Contacts';
import ContactView from '@/modules/ContactView';
import { getContacts, getData } from './services/actions/user';

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
    dispatch(getData());
  }, []);

  return (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path='/Profile' component={Profile} />
    <Route path='/contacts' component={Contacts} />
    <Route path={'/contact/:id'} component={ContactView} />
  </Switch>
  );
};

export default Routes;
