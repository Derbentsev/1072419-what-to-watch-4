import {AuthorizationStatus} from '@reducer/user/user';
import {AppRoute} from '@consts/';


const UserLogo = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-block">
      {authorizationStatus !== AuthorizationStatus.AUTH
        ?
        <Link
          to={AppRoute.LOGIN}
          className="user-block__link"
        >
          Sign in
        </Link>
        :
        <div className="user-block__avatar">
          <Link
            to = {AppRoute.MY_LIST}
            className="user-block__avatar"
          >
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      }
    </div>
  );
};

UserLogo.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};


export default UserLogo;
