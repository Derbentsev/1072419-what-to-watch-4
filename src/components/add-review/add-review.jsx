import UserLogo from '@components/user-logo/user-logo.connect';
import {createPushReview} from '@adapters/reviews';
import {extend} from '@utils/';


const ReviewParams = {
  MIN_COMMENT_LENGTH: 5,
  MAX_COMMENT_LENGTH: 400,
  MIN_RATING: 1,
  MAX_RATING: 5,
  DEFAULT_RATING: 3,
};

const toggleElementsDisabled = (elements) => {
  [...elements].forEach((element) => {
    element.disabled = element.disabled ? false : true;
  });
};

const handleFormSubmit = (evt, pushReview) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const reviewText = evt.target.querySelector(`.add-review__textarea`).value;
  const formElements = evt.target.elements;

  toggleElementsDisabled(formElements);

  if (reviewText.length < ReviewParams.MIN_COMMENT_LENGTH || reviewText.length > ReviewParams.MAX_COMMENT_LENGTH) {
    toggleElementsDisabled(formElements);

    document.querySelector(`.validate-div`).classList.remove(`visually-hidden`);
    return false;
  }

  let pushReviewData = {};
  formData.forEach((value, key) => {
    pushReviewData[key] = value;
  });

  pushReview(createPushReview(pushReviewData));
  return true;
};


class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 3,
      comment: ReviewParams.DEFAULT_RATING,
    };

    this.buttonRef = React.createRef();
    this._onInput = this._onInput.bind(this);
  }

  _onInput(evt) {
    const newState = extend(this.state, ((element) => {
      switch (element.type) {
        case `radio`:
          return {rating: element.value};
        case `textarea`:
          return {comment: element.value.length};
      }
      return {};
    })(evt.target));

    this.setState(newState);

    this.buttonRef.current.disabled = (
      newState.comment < ReviewParams.MIN_COMMENT_LENGTH ||
      newState.comment > ReviewParams.MAX_COMMENT_LENGTH ||
      newState.rating < ReviewParams.MIN_RATING ||
      newState.rating > ReviewParams.MAX_RATING
    );
  }

  render() {
    const {activeFilm, pushReview} = this.props;

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={activeFilm.backgroundImage} alt={activeFilm.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="movie-page.html" className="breadcrumbs__link">{activeFilm.title}</a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <UserLogo/>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={activeFilm.cover} alt={activeFilm.title + `poster`} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form
              action="#"
              className="add-review__form"
              onSubmit={(evt) => {
                evt.preventDefault();
                pushReview(evt);
              }}
              onInput={this._onInput}
            >
              <div className="rating">
                <div className="rating__stars">
                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
                  <label className="rating__label" htmlFor="star-1">Rating 1</label>

                  <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                  <label className="rating__label" htmlFor="star-2">Rating 2</label>

                  <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
                  <label className="rating__label" htmlFor="star-3">Rating 3</label>

                  <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                  <label className="rating__label" htmlFor="star-4">Rating 4</label>

                  <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                  <label className="rating__label" htmlFor="star-5">Rating 5</label>
                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit" disabled={true} ref={this.buttonRef}>
                    Post
                  </button>
                </div>
              </div>
              <div className="validate-div visually-hidden">
                Введите от {ReviewParams.MIN_COMMENT_LENGTH} до {ReviewParams.MAX_COMMENT_LENGTH} символов.
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

AddReview.propTypes = {
  pushReview: PropTypes.func.isRequired,
  activeFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    dateRelease: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })),
  }).isRequired,
};


export default AddReview;
