import { connect } from 'react-redux';

import Details from '@screen/component/Details';

const mapStateToProps = (state, ownProps) => {
  return {
    navigation: ownProps.navigation
  }
};

export default connect(mapStateToProps)(Details)
