import { FILTERAUTHOR, FILTERCATAGORY, FILTERSEARCH } from "./actionTypes";
import initialState from "../filters/initialState";


const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case FILTERAUTHOR:
      return {
        ...state, author: payload
      }


    case FILTERCATAGORY:
      return {
        ...state, catagory: payload
      }

    case FILTERSEARCH:
      return {
        ...state, search: payload
      }

    default:
      return state;
  }
}
export default filterReducer;