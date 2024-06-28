import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  render() {
    const {details, isLine} = this.props
    const {title, publishedDate, description} = details

    return (
      <div className="blog-card">
        <div className="title-card">
          <h1 className="title">{title}</h1>
          <p className="desc">{publishedDate}</p>
        </div>
        <p className="desc">{description}</p>
        {isLine && <hr className="line" />}
      </div>
    )
  }
}

export default BlogItem
