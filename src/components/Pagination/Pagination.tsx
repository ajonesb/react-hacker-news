import ReactPaginate from "react-paginate";
import React from "react";
import "./Pagination.css";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ paginate }) => {
  const pageNumbers = 9;

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageNumbers}
      marginPagesDisplayed={2}
      pageRangeDisplayed={10}
      onPageChange={(data) => paginate(data.selected + 1)}
      containerClassName={"pagination"}
      activeClassName={"active"}
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      pageLinkClassName="page-link"
      disabledClassName="disabled"
      activeLinkClassName="active"
    />
  );
};

export default Pagination;
