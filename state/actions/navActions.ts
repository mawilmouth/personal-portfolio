import { AnyAction } from "redux";
import { NAV_ACTIONS } from "../../constants/actions";

export const setNavActiveLink = (payload: string): AnyAction => ({
  type: NAV_ACTIONS.SET_NAV_ACTIVE_LINK,
  payload
});