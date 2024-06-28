import {Component} from 'react'
import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="profile-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="profile-img"
        />
        <h1 className="profile-name">Wade Warren</h1>
        <p className="profile-role">Software developer at UK</p>
      </div>
    )
  }
}

export default UserInfo
