import {Film} from '@src/types/film.types';
import {Subtract} from "utility-types";


interface InjectingProps {
  film: Film,
}


const withMoviesList = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;


  class WithMoviesList extends React.PureComponent<T, {}> {
    constructor(props) {
      super(props);

      this.state = {
        activeFilmCard: null
      };

      this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
    }

    _handleMovieCardMouseEnter() {
      this.setState({
        activeFilmCard: this
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleMovieCardMouseEnter={this._handleMovieCardMouseEnter}
        />
      );
    }
  }

  return WithMoviesList;
};


export default withMoviesList;
