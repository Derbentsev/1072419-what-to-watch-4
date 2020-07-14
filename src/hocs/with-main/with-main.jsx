import {SHOW_FILM_CARD_BY_START} from '@consts/';


const withMain = (Component) => {
  class WithMain extends React.PureComponent {
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

  WithMain.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  return WithMain;
};


export default withMain;
