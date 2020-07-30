import {AuthorizationStatus} from '@reducer/user/user';
import {AppRoute} from '@consts/';
import {Redirect} from 'react-router-dom';


const PrivateRoute = (props) => {
  const {render, authorizationStatus} = props;

  return (
    <Route
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};


export default PrivateRoute;
