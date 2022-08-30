import { combineReducers } from "redux";
import filterReducer from "./filters/filterReducer";
import blogReducer from "./blogs/blogReducer";
const rootReducer = combineReducers({
    blogItems: blogReducer,
    filters: filterReducer
});

export default rootReducer;
