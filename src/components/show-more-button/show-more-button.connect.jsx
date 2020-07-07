import ShowMoreButton from './show-more-button';
import {connect} from 'react-redux';
import {ActionCreator} from './actions/reducer';
import {SHOW_FILM_CARD_BY_BUTTON} from '@consts/';


const mapStateToProps = (state) => ({
  showedFilmsCount: state.appReducer.showedFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.setShowedFilmsCount(SHOW_FILM_CARD_BY_BUTTON));
  },
});


connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
