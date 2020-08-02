const VideoPlayer = (props) => {
  const {handleMouseEnter, handleMouseLeave, children} = props;

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
};

VideoPlayer.propTypes = {
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


export default VideoPlayer;
