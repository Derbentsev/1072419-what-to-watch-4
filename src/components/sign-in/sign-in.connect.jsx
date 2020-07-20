import SignIn from './sign-in';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';


const mapStateToProps = (state) => ({
  authorizationError: state[NameSpace.USER].authorizationError,
});


export default connect(mapStateToProps)(SignIn);
