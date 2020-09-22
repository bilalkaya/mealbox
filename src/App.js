import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import SelectedMenu from "./components/SelectedMenu";
import menu from "./menu.yaml";

function App() {
  const [allMenu, setAllMenu] = useState([]);
  const [mainMenu, setMainMenu] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedModal, setSelectedModal] = useState([]);
  const [subMenus, setSubMenus] = useState([]);

  useEffect(() => {
    setAllMenu(menu.menus);
    setMainMenu(menu.menus[0].items);
  }, []);

  const selectMenu = (e, index) => {
    e.preventDefault();
    setIsSelected(true);
    setSelectedMenu(mainMenu[index]);
  };

  const showMainMenu = (e) => {
    e.preventDefault();
    setIsSelected(false);
  };

  const showDiscountMenu = (e) => {
    e.preventDefault();
    setIsSelected(true);
    setSelectedMenu(mainMenu[0]);
  };

  const selectedModalMenu = (e, index) => {
    e.preventDefault();
    const curModal = selectedMenu.items[index];
    setSelectedModal(curModal);
    findSubMenus(curModal.subMenus);
  };

  const findSubMenus = (keys) => {
    const submenus = [];
    if (keys) {
      keys.forEach((item) => {
        allMenu.forEach((item2) => {
          if (item === item2.key) {
            submenus.push({ desc: item2.description, menu: item2.items });
          }
        });
      });
    }
    setSubMenus(submenus);
  };

  return (
    <>
      <Header showMainMenu={showMainMenu} showDiscountMenu={showDiscountMenu} />
      <div className="container mt-3">
        {isSelected ? (
          <SelectedMenu
            menu={selectedMenu}
            selectedModalMenu={selectedModalMenu}
            selectedModal={selectedModal}
            subMenus={subMenus}
          />
        ) : (
          <MainMenu mainMenu={mainMenu} selectMenu={selectMenu} />
        )}
      </div>
    </>
  );
}

export default App;
