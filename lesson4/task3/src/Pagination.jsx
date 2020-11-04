import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {

  let isPrevPageAvailable = false;
  let isNextPageAvailable = false;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  currentPage === 0 ? isPrevPageAvailable = true : false;
  currentPage === totalPages - 1 ? isNextPageAvailable = true : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvailable}>
        {isPrevPageAvailable ? "" : "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvailable}>
        {isNextPageAvailable ? "" : "→"}
      </button>
    </div>
  )
}

export default Pagination;