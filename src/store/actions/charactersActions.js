import {CHARACTERS_URL} from '../../service/urls';
import {getRequest} from '../../service/verb';
import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  REJECT_CHARACTERS,
} from '../types/characterTypees';

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({
      type: PENDING_CHARACTERS,
    });
    try {
      const res = await getRequest(CHARACTERS_URL);
      dispatch({
        type: FETCH_CHARACTERS,
        payload: res.data.results,
      });
    } catch (error) {
      dispatch({
        type: REJECT_CHARACTERS,
        error: error,
      });
    }
  };
};
