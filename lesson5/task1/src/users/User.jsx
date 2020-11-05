import React from 'react';

const User = ({ name, age, id }) => {
  return (
    <li key={id} className="user">
      <span className="user_name">{name}</span>
      <span className="user_age">{age}</span>

    </li>
  )
}

export default User;