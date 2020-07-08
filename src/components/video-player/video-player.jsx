export default class VideoPlayer extends React.PureComponent {
  render() {
    const {handleMouseEnter, handleMouseLeave, children} = this.props;

    return (
      <>
        <div
          className="small-movie-card__poster"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </>
    );
  }
}

VideoPlayer.propTypes = {};
