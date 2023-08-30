import PropTypes from 'prop-types';
import css from './Friends.module.css'

export const FriendsList = ({friends}) => {
  return (
    <div className={css.friends_box}>
      <ul className={css.friend_list}>
        {friends.map(({avatar, name, isOnline,id}) => (
          <li className={css.item} key={id} >
            <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{ isOnline }</span>
    <img src={avatar} alt={`${name}_avatar`} width={48} className={css.avatar} />
            <p className={css.name}>{name}</p>
    </li>))  }</ul>
  </div>
  )
}

// FriendsList.propTypes = {
//   friends:
//     PropTypes.arrayOf(PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   id:PropTypes.number.isRequired,
//   })).isRequired,
// };
FriendsList.protoTypes = {
  friends:PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id:PropTypes.number.isRequired,
  }).isRequired)
}