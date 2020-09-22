import React from "react";
import ModalMenuItem from "./ModalMenuItem";

const ModalMenu = ({ selectedModal, subMenus }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {selectedModal.name}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ModalMenuItem selectedModal={selectedModal} subMenus={subMenus} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
