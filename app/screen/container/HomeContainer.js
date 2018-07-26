import { connect } from 'react-redux';

import Home from '@screen/component/Home';

const mapStateToProps = (state, ownProps) => {
  return {
    navigation: ownProps.navigation
  }
};

export default connect(mapStateToProps)(Home)
