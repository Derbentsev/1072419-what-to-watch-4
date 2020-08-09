import UserLogo from '@components/user-logo/user-logo.connect';
import {extend} from '@utils/utils';
import history from '@history/history';
import {AppRoute} from '@src/consts/consts';
import {Film} from '@src/types/film.types';


const ReviewParams = {
  MIN_COMMENT_LENGTH: 50,
  MAX_COMMENT_LENGTH: 400,
  MIN_RATING: 1,
  MAX_RATING: 5,
  DEFAULT_RATING: 3,
};

interface Props {
  setFalseReviewPushStatus: () => void;
  pushReview: (rating: number, comment: number, id: string) => void;
  getFilmById: (number) => Film;
  pushReviewStatus: boolean;
  match: {
    params: {
      id: string;
    };
  };
}

interface State {
  rating: number;
  comment: number;
  isValid: boolean;
}

export default class AddReview extends React.PureComponent<Props, State> {
  private buttonRef: React.RefObject<HTMLButtonElement>;

  constructor(props) {
    super(props);

    this.state = {
      rating: ReviewParams.DEFAULT_RATING,
      comment: 0,
      isValid: false,
    };

    this.buttonRef = React.createRef();
    this._onInput = this._onInput.bind(this);
  }

  componentWillUnmount() {
    const {setFalseReviewPushStatus} = this.props;
    setFalseReviewPushStatus();
  }

  _onInput(evt) {
    const newState = extend(this.state, ((element) => {
      switch (element.type) {
        case `radio`:
          return {rating: element.value};
        case `textarea`:
          return {comment: element.value};
      }
      return {};
    })(evt.target));

    this.setState(newState);

    const isFormValid = (
      newState.comment.length >= ReviewParams.MIN_COMMENT_LENGTH &&
      newState.comment.length <= ReviewParams.MAX_COMMENT_LENGTH &&
      newState.rating >= ReviewParams.MIN_RATING &&
      newState.rating <= ReviewParams.MAX_RATING
    );

    this.buttonRef.current.disabled = !isFormValid;
    this.setState({isValid: isFormValid});
  }

  render() {
    const {pushReview, getFilmById, pushReviewStatus, setFalseReviewPushStatus} = this.props;

    if (pushReviewStatus) {
      history.goBack();
    }

    const filmId = this.props.match.params.id;
    const currentFilm: Film = getFilmById(filmId);

    if (!currentFilm) {
      return <h2>Loading...</h2>;
    }

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={currentFilm.backgroundImage} alt={currentFilm.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <Link href="main.html" className="logo__link" to={AppRoute.ROOT}>
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a
                      href="movie-page.html"
                      className="breadcrumbs__link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        history.goBack();
                      }}
                    >{currentFilm.title}</a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <UserLogo />
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={currentFilm.cover} alt={currentFilm.title + `poster`} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form
              action="#"
              className="add-review__form"
              onSubmit={(evt) => {
                evt.preventDefault();
                pushReview(this.state.rating, this.state.comment, filmId);
              }}
              onInput={this._onInput}
            >
              <div className="rating">
                <div className="rating__stars">
                  <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
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

              {!this.state.isValid &&
                <div className="validate-div">
                  Введите от {ReviewParams.MIN_COMMENT_LENGTH} до {ReviewParams.MAX_COMMENT_LENGTH} символов.
                </div>
              }
            </form>
          </div>
        </section>
      </>
    );
  }
}
