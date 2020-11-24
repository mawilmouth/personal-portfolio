import { AnyAction } from "redux";
import { NAV_ACTIONS } from "../../constants/actions";

export const setNavActiveLink = (payload): AnyAction => ({
  type: NAV_ACTIONS.SET_NAV_ACTIVE_LINK,
  payload
});