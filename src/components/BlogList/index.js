import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <div className="blog-items-card">
        {blogsList.map(eachItem => (
          <BlogItem
            details={eachItem}
            key={eachItem.id}
            isLine={eachItem.id !== blogsList[blogsList.length - 1].id}
          />
        ))}
      </div>
    )
  }
}

export default BlogList
