import React from "react";
import MainMenuItem from "./MainMenuItem";

const MainMenu = ({ mainMenu, selectMenu }) => {
  return (
    <>
      <h3 className="text-center">Ana Menüler</h3>
      <div className="row justify-content-center">
        {mainMenu.map((item, index) => (
          <MainMenuItem
            item={item}
            key={index}
            index={index}
            selectMenu={selectMenu}
          />
        ))}
      </div>
    </>
  );
};

export default MainMenu;
