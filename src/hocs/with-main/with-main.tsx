import {Subtract} from 'utility-types';


const SHOW_FILM_CARD_BY_START = 8;

interface State {
  showedFilmsCount: number;
}

interface InjectingProps {
  setShowedFilmsCount: () => void;
  showedFilmsCount: number;
}


const withMain = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithMain extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        showedFilmsCount: SHOW_FILM_CARD_BY_START,
      };

      this._setShowedFilmsCount = this._setShowedFilmsCount.bind(this);
    }

    _setShowedFilmsCount(count = 0) {
      if (count === 0) {
        this.setState({showedFilmsCount: SHOW_FILM_CARD_BY_START});
        return;
      }
      this.setState({showedFilmsCount: this.state.showedFilmsCount + count});
    }

    render() {
      const {children} = this.props;

      return (
        <Component
          {...this.props}
          setShowedFilmsCount = {this._setShowedFilmsCount}
          showedFilmsCount = {this.state.showedFilmsCount}
        >
          {children}
        </Component>
      );
    }
  }

  return WithMain;
};


export default withMain;
