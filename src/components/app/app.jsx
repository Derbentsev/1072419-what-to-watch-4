import Main from '@components/main/main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const onTitleClick = () => {};

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderWelcomeScreen = this._renderWelcomeScreen.bind(this);
  }

  _renderWelcomeScreen() {
    const {title, genre, dateRelease, films} = this.props;

    return (
      <Main
        title = {title}
        genre = {genre}
        dateRelease = {dateRelease}
        films = {films}
        onTitleClick = {onTitleClick}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderWelcomeScreen()}
          </Route>
          <Route exact path='/dev-film'>

          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  dateRelease: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};
