import React from "react";

//bootstrap
import Pagination from "react-bootstrap/Pagination";

const Pagin = props => {
  const style = {
    diplay: "flex",
    justifyContent: "center"
  };

  return (
    <Pagination style={style}>
      <Pagination.Item onClick={e => props.nextPage(1, e)}>{1}</Pagination.Item>
      <Pagination.Item onClick={e => props.nextPage(2, e)}>{2}</Pagination.Item>
      <Pagination.Item onClick={e => props.nextPage(3, e)}>{3}</Pagination.Item>
      <Pagination.Item onClick={e => props.nextPage(4, e)}>{4}</Pagination.Item>
      <Pagination.Item onClick={e => props.nextPage(5, e)}>{5}</Pagination.Item>
      <Pagination.Item onClick={e => props.nextPage(6, e)}>{6}</Pagination.Item>
      <Pagination.Item onClick={e => props.nextPage(7, e)}>{7}</Pagination.Item>
      <Pagination.Item onClick={e => props.nextPage(8, e)}>{8}</Pagination.Item>
      <Pagination.Item onClick={e => props.nextPage(9, e)}>{9}</Pagination.Item>
    </Pagination>
  );
};

export default Pagin;
