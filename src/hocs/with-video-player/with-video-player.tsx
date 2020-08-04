import {Film} from '@src/types/film.types';


const DELAY_ON_MOUSE_ENTER = 2000;

interface Props {
  film: Film,
}

interface State {
  isPlaying: boolean,
}

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent<Props, State> {
    private videoRef: React.RefObject<HTMLVideoElement>;
    private timeout: ReturnType<typeof setTimeout> | null;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.videoRef = React.createRef();
      this.timeout = null;

      this._togglePlayingState = this._togglePlayingState.bind(this);
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.timeout!);
    }

    componentDidUpdate() {
      const video = this.videoRef.current!;

      if (this.state.isPlaying) {
        video.play();
        return;
      }

      video.load();
    }

    _togglePlayingState() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    _handleMouseEnter() {
      this.timeout = setTimeout(this._togglePlayingState, DELAY_ON_MOUSE_ENTER);
    }

    _handleMouseLeave() {
      if (this.state.isPlaying || this.timeout) {
        clearTimeout(this.timeout!);
        this.timeout = null;
        this.setState({isPlaying: false});
      }
    }

    render() {
      const {film} = this.props;

      return (
        <Component
          handleMouseEnter = {this._handleMouseEnter}
          handleMouseLeave = {this._handleMouseLeave}
        >
          <video src={film.previewVideoSrc} width="280" height="175" poster={film.poster} muted={true} ref={this.videoRef} />
        </Component>
      );
    }
  }

  return WithVideoPlayer;
};


export default withVideoPlayer;
