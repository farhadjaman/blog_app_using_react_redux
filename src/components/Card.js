import React from 'react'
import { filterAuthor, filterCatagory } from '../redux/filters/actions';
import { useDispatch } from 'react-redux'
const Card = ({ item }) => {
  const dispatch = useDispatch();
  const handlefilterAuthor = (name) => {
    dispatch(filterAuthor(name))
  }
  const handlefilterCatagory = (catagory) => {
    dispatch(filterCatagory(catagory))
  }
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={item.image}
          alt="product_image"
        />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
              onClick={() => handlefilterCatagory(item.catagory)}
            >
              {item.catagory}
            </span>
          </p>
          <a href="#" className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">
              {item.title}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/73503432?v=4"
              alt=""
            />
          </div>
          <div className="ml-3">
            <button
              onClick={() => handlefilterAuthor(item.author)}
              className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
            >
              {item.author}
            </button>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={item.publishedDate}>{item.publishedDate} </time>
              <span aria-hidden="true"> &middot; </span>
              <span> {item.readTime} min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card