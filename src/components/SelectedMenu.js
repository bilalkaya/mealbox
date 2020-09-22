import React from "react";
import SelectedMenuItem from "./SelectedMenuItem";

const SelectedMenu = ({ menu }) => {
  return (
    <>
      <div className="row justify-content-center my-3">
        <div className="col-sm-10">
          <div className="card">
            <div className="card-header">{menu.caption}</div>
            <SelectedMenuItem menu={menu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedMenu;
