export function newState<T>(oldState: T, newState: T): T {
  return {...oldState, ...newState};
};