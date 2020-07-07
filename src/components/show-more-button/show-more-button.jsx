const ShowMoreButton = (props) => {
  const {onShowMoreButtonClick} = props;

  return (
    <>
      <div className="catalog__more">
        <button onClick={onShowMoreButtonClick} className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
};


export default ShowMoreButton;
