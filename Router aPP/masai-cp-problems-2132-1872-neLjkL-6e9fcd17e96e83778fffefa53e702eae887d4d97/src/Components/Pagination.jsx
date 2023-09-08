const Pagination = ({currentPage, setCurrentPage, TP, req}) => {

  function pagination(ele) {
    setCurrentPage(ele+currentPage)
    req()
  }



  return <div className="pagination">

    <button disabled = {currentPage === 1} onClick={() => {pagination(-1)}}>Previous</button>
    <button>{currentPage}</button>
    <button disabled = {currentPage === Math.ceil(TP/5)} onClick={() => {pagination(1)}}>Next</button>





  </div>;
};

export default Pagination;
