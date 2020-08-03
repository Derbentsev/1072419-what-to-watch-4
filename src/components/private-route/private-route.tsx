import {AuthorizationStatus} from '@reducer/user/user';
import {AppRoute} from '@consts/';
import {Redirect} from 'react-router-dom';


interface Props {
  render: (computedMatch) => {},
  authorizationStatus: string,
  path: string,
  exact: boolean,
  computedMatch: {
    params: {
      id: string,
    }
  },
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
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


export default PrivateRoute;
