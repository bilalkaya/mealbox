import React from "react";

const SelectedMenuItem = ({ menu }) => {
  return (
    <ul class="list-group list-group-flush">
      {menu.items.map((item, index) => (
        <li class="list-group-item">
          <div class="media">
            <img
              src={process.env.PUBLIC_URL + item.image.substring(1)}
              class="align-self-start mr-3 rounded"
              alt="..."
              width="64px"
              height="64px"
            />
            <div class="media-body">
              <h5 class="mt-0">
                <a class="text-danger" href="/#">
                  {item.name}
                </a>
              </h5>
              <p className="font-weight-bold">{item.price} TL</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SelectedMenuItem;
