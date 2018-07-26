import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import AppNavigator from '@screen';

const RootNavigator = reduxifyNavigator(AppNavigator, "root");

const mapStateToProps = (state) => ({
  state: state.nav
});

export default connect(mapStateToProps)(RootNavigator);