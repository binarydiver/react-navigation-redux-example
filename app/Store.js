import {
  createStore,
  applyMiddleware,
} from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import AppReduer from '@reducer';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const store = createStore(
  AppReduer,
  applyMiddleware(middleware),
);

export default store;