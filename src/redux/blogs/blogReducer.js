import { GETALL } from "./actionTypes";
import initialState from "./initialState";


const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GETALL:
      return state

    default:
      return state;
  }
}
export default filterReducer;