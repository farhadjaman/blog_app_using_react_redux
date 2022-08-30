import React from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../redux/blogs/actions'
import { filterAuthor, filterCatagory, filterSearch } from '../redux/filters/actions'
const CardList = () => {
  const dispatch = useDispatch();
  const blogItems = useSelector(state => state.blogItems)
  const { search, catagory, author } = useSelector(state => state.filters)


  const handleFilterAll = () => {
    dispatch(filterAuthor(""))
    dispatch(filterCatagory(""))
    dispatch(filterSearch(""))
    dispatch(getAll())
  }

  const handleFilterSearch = (blog) => {

    if (search) {
      return blog.title.includes(search)
    }
    else {
      return true
    }
  }

  const handleFilterAuthor = (blog) => {
    if (author) {
      return blog.author === author
    }
    else {
      return true
    }
  }

  const handleFilterCatagory = (blog) => {

    if (catagory) {
      return blog.catagory === catagory
    }
    else {
      return blog
    }
  }

  const filterBlogs = () => {

    return blogItems
      .filter(blog => handleFilterSearch(blog))
      .filter(blog => handleFilterAuthor(blog))
      .filter(blog => handleFilterCatagory(blog))
      .map((blog) => (
        <Card item={blog} key={blog.id} />
      ))
  }
  return (
    <div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleFilterAll}
      >
        All Blogs
      </button>
      <div
        className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        {filterBlogs()}
      </div >
    </div>

  )
}

export default CardList