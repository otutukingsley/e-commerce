import React from "react";
import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  const navigate = useNavigate();

  return (
    pages > 1 && (
      <Pagination className="align-items-center justify-content-center">
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={`link-${x}`}
            active={x + 1 === Number(page)}
            onClick={() => {
              if (isAdmin) {
                navigate(`/admin/productlist/${x + 1}`);
              } else {
                if (keyword) {
                  navigate(`/search/${keyword}/page/${x + 1}`);
                } else {
                  navigate(`/page/${x + 1}`);
                }
              }
            }}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
