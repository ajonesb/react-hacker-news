import ReactPaginate from "react-paginate";
import React from "react";
import "./Pagination.css";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = Math.ceil(totalPosts / postsPerPage);

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageNumbers}
      marginPagesDisplayed={9}
      pageRangeDisplayed={8}
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
