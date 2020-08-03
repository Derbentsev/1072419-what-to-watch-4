import {TabNames} from '@components/tabs/tabs';
import {Film} from '@types/film.types';
import {Subtract} from "utility-types";


interface InjectingProps {
  film: Film,
}

interface State {
  activeTab: string,
}

const withActiveTab = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveTab extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {activeTab: TabNames.OVERVIEW};
      this._handleOnTab = this._handleOnTab.bind(this);
    }

    _handleOnTab(evt) {
      evt.preventDefault();
      this.setState({
        activeTab: evt.target.textContent
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleOnTab = {this._handleOnTab}
          activeTab = {this.state.activeTab}
        />
      );
    }
  }

  return WithActiveTab;
};


export default withActiveTab;
