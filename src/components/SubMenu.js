import React from "react";

const SubMenu = ({ subMenus }) => {
  return (
    <>
      {subMenus.map((item, index) => (
        <div className="row justify-content-center mb-2" key={index}>
          <div className="col">
            <label forhtml="exampleFormControlSelect1">{item.desc}</label>
          </div>
          <div className="col">
            <select className="form-control" id="exampleFormControlSelect1">
              {item.menu.map((item2, index2) => (
                <option key={index2}>
                  {item2.name} {item2.price ? " - " + item2.price + " TL" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubMenu;

// {subMenus.forEach((item) => (
//     <div>
//       <div className="col col-md-4 col-lg-4">
//         <label forhtml="exampleFormControlSelect1">{item.desc}</label>
//       </div>
//       <div className="col col-md-4 col-lg-2">
//         <select className="form-control" id="exampleFormControlSelect1">
//           {item.menu.map((item2, index) => (
//             <option key={index}>{item2}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   ))}
