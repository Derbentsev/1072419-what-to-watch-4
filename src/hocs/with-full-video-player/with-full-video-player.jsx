const withFullVideoPlayer = (Component) => {
  class WithFullVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isFullScreen: false,
        duration: 0,
      };

      this._videoRef = React.createRef();

      this._progress = 0;

      this._handlePlayClick = this._handlePlayClick.bind(this);
      this._handleFullScreenClick = this._handleFullScreenClick.bind(this);
    }

    _handlePlayClick(evt) {
      evt.preventDefault();
      this.setState({isPlaying: !this.state.isPlaying});
    }

    _handleFullScreenClick(evt) {
      evt.preventDefault();
      this.setState({isFullScreen: !this.state.isFullScreen});
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.ontimeupdate = () => {
        this._progress = (video.currentTime / video.duration) * 100;

        this.setState({
          duration: Math.floor(video.duration - video.currentTime),
        });
      };
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    render() {
      const {
        activeFullVideoPlayer,
        handleOnExitClick,
      } = this.props;

      return (
        <Component>
          <video src={activeFullVideoPlayer.src} muted={true} className="player__video" poster="img/player-poster.jpg" ref={this._videoRef} />

          <button
            type="button"
            className="player__exit"
            onClick={handleOnExitClick}
          >
            Exit
          </button>

          <div className={`player__controls ${this.state.isFullScreen ? `visually-hidden` : ``}`}>
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={this._progress} max="100"></progress>
                <div className="player__toggler" style={{left: this._progress + `%`}}>Toggler</div>
              </div>
              <div className="player__time-value">
                {this.state.duration}
              </div>
            </div>

            <div className="player__controls-row">
              <button
                type="button"
                className="player__play"
                onClick={this._handlePlayClick}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">Transpotting</div>

              <button
                type="button"
                className="player__full-screen"
                onClick={this._handleFullScreenClick}
              >
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use href="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </Component>
      );
    }
  }

  return WithFullVideoPlayer;
};


export default withFullVideoPlayer;
