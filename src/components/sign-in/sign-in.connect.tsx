import SignIn from './sign-in';
import {connect} from 'react-redux';
import NameSpace from '@reducer/name-space';
import {Operation as UserOperation} from '@reducer/user/user';


const mapStateToProps = (state) => ({
  authorizationStatus: state[NameSpace.USER].authorizationStatus,
  authorizationError: state[NameSpace.USER].authorizationError,
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
