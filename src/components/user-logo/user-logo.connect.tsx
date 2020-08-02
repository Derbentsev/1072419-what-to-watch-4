import UserLogo from './user-logo';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
});


export default connect(mapStateToProps)(UserLogo);
