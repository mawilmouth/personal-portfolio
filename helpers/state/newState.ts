export function newState<T>(currentState: T, newState: any): T {
  return {...currentState, ...newState};
};