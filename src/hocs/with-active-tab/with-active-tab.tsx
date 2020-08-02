import {TabNames} from '@components/tabs/tabs';


interface Props {
  film: {
    id: number,
    title: string,
    poster: string,
    genre: string,
    dateRelease: number,
    cover: string,
    videoSrc: string,
    previewVideoSrc: string,
    director: string,
    actors: [string],
    ratingScore: number,
    ratingCount: number,
    description: string,
    runTime: number,
    reviews: [{
      comment: string,
      rating: number,
      author: string,
      date: string,
    }],
  },
}

interface State {
  activeTab: string,
}

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

  return WithActiveTab;
};


export default withActiveTab;
