import React from "react";
import SubMenu from "./SubMenu";

const ModalMenuItem = ({ selectedModal, subMenus }) => {
  const imgUrl = selectedModal.image && selectedModal.image.substring(1);
  return (
    <>
      <li className="list-group-item">
        <div className="media">
          <img
            src={process.env.PUBLIC_URL + imgUrl}
            className="align-self-start mr-3 rounded"
            alt={selectedModal.name}
            width="128px"
            height="128px"
          />
          <div className="media-body d-flex justify-content-between">
            <h5 className="mt-0">
              <a
                className="text-danger font-weight-normal text-decoration-none "
                href="/#"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                {selectedModal.name}
              </a>
            </h5>
            <p className="font-weight-bold">{selectedModal.price} TL</p>
          </div>
        </div>
      </li>
      {selectedModal.subMenus ? (
        <div>
          <p className="mt-3">Alt Menülerimiz:</p>
          <SubMenu subMenus={subMenus} />
        </div>
      ) : null}
    </>
  );
};

export default ModalMenuItem;
