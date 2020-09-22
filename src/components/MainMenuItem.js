import React from "react";

const MainMenuItem = ({ item, index, selectMenu }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card bg-light text-center my-3">
        <img
          src={process.env.PUBLIC_URL + item.image.substring(1)}
          className="card-img-top"
          alt={item.caption}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <a
            href="/#"
            className="btn btn-warning"
            onClick={(e) => selectMenu(e, index)}
          >
            İncele
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainMenuItem;
