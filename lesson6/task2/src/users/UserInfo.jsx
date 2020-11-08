import React from 'react';
import { connect } from 'react-redux';
import { isFetchingSelectors, userDataSelectors } from './users.selectors';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


const UserInfo = ({ userData, isFetching }) => {
  if (isFetching) {
    return <Spinner />;
  }
  if (!userData) {
    return null;
  }

  const { name, location, avatar_url } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

UserInfo.defaultValue = {
  userData: null,
}

const mapState = state => {
  return {
    isFetching: isFetchingSelectors(state),
    userData: userDataSelectors(state),
  }
}

export default connect(mapState)(UserInfo);