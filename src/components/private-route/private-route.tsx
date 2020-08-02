import {AuthorizationStatus} from '@reducer/user/user';
import {AppRoute} from '@consts/';
import {Redirect} from 'react-router-dom';


const PrivateRoute = (props) => {
  const {render, authorizationStatus, path, exact, computedMatch} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (authorizationStatus === AuthorizationStatus.AUTH) {
          return render(computedMatch);
        } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
          return <Redirect to={AppRoute.LOGIN} />;
        }

        return <h2>Loading...</h2>;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  computedMatch: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  }).isRequired,
};


export default PrivateRoute;
