import {AuthorizationStatus} from '@reducer/user/user';
import {AppRoute} from '@src/consts/consts';
import {Redirect} from 'react-router-dom';
import {RouteProps} from "react-router";


interface Props extends RouteProps {
  authorizationStatus: string;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Route {...props} />;
  } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return <Redirect to={AppRoute.LOGIN} />;
  }

  return <h2>Loading...</h2>;
};


export default PrivateRoute;
