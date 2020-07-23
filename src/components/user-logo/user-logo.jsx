import {AuthorizationStatus} from '@reducer/user/user';


const UserLogo = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.NO_AUTH ?
        <a href="sign-in.html" className="user-block__link">Sign in</a> :
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      }
    </div>
  );
};

UserLogo.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};


export default UserLogo;
