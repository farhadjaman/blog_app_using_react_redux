import { FILTERAUTHOR, FILTERCATAGORY, FILTERSEARCH } from "./actionTypes";


export const filterAuthor = (authorName) => {
  return {
    type: FILTERAUTHOR,
    payload: authorName
  }

}

export const filterCatagory = (catagory) => {
  return {
    type: FILTERCATAGORY,
    payload: catagory
  }

}
export const filterSearch = (string) => {
  return {
    type: FILTERSEARCH,
    payload: string.toLowerCase()
  }
}