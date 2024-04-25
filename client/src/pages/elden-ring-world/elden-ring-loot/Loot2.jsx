// import { useState } from "react";
// import "./ItemLoot.scss";
// import { Link } from "react-router-dom";
// import "../components/HoverItem.scss";

// function ItemLoot() {
//   const [isShownLeft, setIsShownLeft] = useState(false);
//   const [isShownRight, setIsShownRight] = useState(false);

//   return (
//     <div className="loot-background">
//       <div
//         tabIndex={0}
//         role="button"
//         onMouseLeave={() => setIsShownRight(false) || setIsShownLeft(false)}
//         className="loots"
//       >
//         <h1>Loots</h1>
//         <section className="loot-choice">
//           <div className="left-loot">
//             <Link to="/choice-selection" className="choice-loot"></Link>

//             <div
//               className="left-img"
//               tabIndex={0}
//               role="button"
//               onClick={() => setIsShownLeft(true)}
//               onKeyDown={() => setIsShownLeft(true)}
//             >
//               <img className="left-item-img" />
//             </div>
//           </div>
//           <div className="right-loot">
//             <Link to="/winning-page" className="choice-loot"></Link>
//             <div
//               tabIndex={0}
//               className="right-img"
//               role="button"
//               onClick={() => setIsShownRight(true)}
//               onKeyDown={() => setIsShownRight(true)}
//             ></div>
//           </div>
//           {isShownLeft && <div className="weapon-stats-left"></div>}
//           {isShownRight && <div className="weapon-stats-right"></div>}
//         </section>
//       </div>
//     </div>
//   );
// }

// export default ItemLoot;
