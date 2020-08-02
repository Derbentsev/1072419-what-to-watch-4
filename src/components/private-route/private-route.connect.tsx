import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';
import PrivateRoute from '@components/private-route/private-route';


const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
});


export default connect(mapStateToProps)(PrivateRoute);
