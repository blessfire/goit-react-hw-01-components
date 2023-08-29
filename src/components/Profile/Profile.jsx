import PropTypes from 'prop-types';
import css from './Profile.module.css'
/*{ <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/> }*/

export const Profile = ({
  user:username,
  tag,
  location,
  avatar,
  stats:followers, views, likes,
}) => {
  return (
    <div className={css.profile}>
  <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className="avatar"
    />
        <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
    </div>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
 
  stats: PropTypes.object,
 // { followers, views, likes },
}
