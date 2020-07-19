import {AuthorizationStatus} from '@reducer/user/user';


const UserLogo = (props) => {
  const {authorizationStatus} = props;

  return (
    <>
      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          {authorizationStatus === AuthorizationStatus.NO_AUTH ?
            <a href="sign-in.html" className="user-block__link">Sign in</a> :
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          }
        </div>
      </header>
    </>
  );
};

UserLogo.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};


export default UserLogo;
