import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    NotFound
  } from 'containers';

export default () => {
  return (
    <Route path="/" component={App}>
      { /* home page */ }
      <IndexRoute component={Home}/>

      { /* not found route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
