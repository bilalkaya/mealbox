import React from "react";
import SelectedMenuItem from "./SelectedMenuItem";

const SelectedMenu = ({ menu, selectedModalMenu, selectedModal, subMenus }) => {
  return (
    <>
      <div className="row justify-content-center my-3">
        <div className="col-sm-10">
          <div className="card">
            <div className="card-header">{menu.caption}</div>
            <SelectedMenuItem
              menu={menu}
              selectedModalMenu={selectedModalMenu}
              selectedModal={selectedModal}
              subMenus={subMenus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedMenu;
