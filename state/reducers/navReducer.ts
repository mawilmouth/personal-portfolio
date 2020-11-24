import { AnyAction } from "redux";
import { NAV_ACTIONS } from "../../constants/actions";
import { newState } from "../../helpers/state/newState";
import { NavState } from '../../types/state/reducers/NavReducerTypes';

const intialState: NavState = { active: '' };

export const navReducer = (state = intialState, action: AnyAction): NavState => {
  switch (action.type) {
    case NAV_ACTIONS.SET_NAV_ACTIVE_LINK:
      newState<NavState>(state, { active: action.payload });
    default:
      return state;
  };
};