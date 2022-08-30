const getDate = () => {
  let today = new Date().toLocaleDateString()
  return today.toString();
}


const initialState = [
  {
    id: 1,
    title: "Boost your conversion rate",
    catagory: "SEO",
    image: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: "farhad",
    readTime: 6,
    publishedDate: getDate()
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    catagory: "SEO",
    image: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: "farhad",
    readTime: 7,
    publishedDate: getDate()
  },
  {
    id: 3,
    title: "Improve your customer experience",
    catagory: "SALES",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: "maruf",
    readTime: 10,
    publishedDate: getDate()
  }
]

export default initialState