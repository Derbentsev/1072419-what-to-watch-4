import {TabNames} from '@consts/';


const withActiveTab = (Component) => {
  class WithActiveTab extends React.PureComponent {
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

  WithActiveTab.propTypes = {};

  return WithActiveTab;
};


export default withActiveTab;
