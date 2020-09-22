import React from "react";
import ModalMenu from "./ModalMenu";

const SelectedMenuItem = ({ menu, selectedModalMenu }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {menu.items.map((item, index) => (
          <li className="list-group-item" key={index}>
            <div className="media">
              <img
                src={process.env.PUBLIC_URL + item.image.substring(1)}
                className="align-self-start mr-3 rounded"
                alt="..."
                width="64px"
                height="64px"
              />
              <div className="media-body">
                <h5 className="mt-0">
                  <a
                    className="text-danger font-weight-normal text-decoration-none "
                    href="/#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={(e) => selectedModalMenu(e, index)}
                  >
                    {item.name}
                  </a>
                </h5>
                <p className="font-weight-bold">{item.price} TL</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ModalMenu />
    </>
  );
};

export default SelectedMenuItem;
