import React, { useState } from 'react'
import searchIcon from './../assets/search.svg'
import { useDispatch } from 'react-redux';
import { filterSearch } from '../redux/filters/actions';


const Search = () => {


  const [input, setInput] = useState('');
  const dispatch = useDispatch();


  const debounceHandler = (fn, delay) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);

    }
  }

  const handleInput = (e) => {
    console.log(e.target.value)
    dispatch(filterSearch(e.target.value))
  }

  const debounceGetKey = debounceHandler(handleInput, 500);
  return (
    <div
    >
      <form
        className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200 "
      >
        <input
          className="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => debounceGetKey(e)}
        />
      </form>

    </div>
  )
}

export default Search