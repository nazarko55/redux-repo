import React from 'react';
import Pagination from './Pagination';
import User from './User';

import { goPrevPage, goNextPage } from './users.actions';
import { connect } from "react-redux";
import { userListSelector, currentPageSelector } from "./users.selectors";


const itemsPerPage = 3;

const UsersList = ({ usersList, currentPage, goNext, goPrev }) => {
  const start = currentPage * itemsPerPage;
  const usersToDisplay = usersList.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={usersList.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay
          .map((user) => (
            <User key={user.id} {...user} />
          ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: userListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: goNextPage,
  goPrev: goPrevPage,
};

export default connect(mapState, mapDispatch)(UsersList);

