import {extend} from '@utils/';


const initialState = {
  activeFullVideoPlayer: null,
};

const ActionType = {
  SET_ACTIVE_FULL_VIDEO_PLAYER: `SET_ACTIVE_FULL_VIDEO_PLAYER`,
};

const ActionCreator = {
  setActiveFullVideoPlayer: (film) => ({
    type: ActionType.SET_ACTIVE_FULL_VIDEO_PLAYER,
    payload: film,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_FULL_VIDEO_PLAYER:
      return extend(state, {
        activeFullVideoPlayer: action.payload,
      });
  }

  return state;
};


export {
  reducer,
  ActionType,
  ActionCreator
};
