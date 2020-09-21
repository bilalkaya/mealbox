import React from "react";
import menu from "./menu.yaml";

function App() {
  console.log(menu.menus);
  return (
    <div className="App">
      {menu.menus.map((item, index) => (
        <div key={index}>{item.key}</div>
      ))}
    </div>
  );
}

export default App;
