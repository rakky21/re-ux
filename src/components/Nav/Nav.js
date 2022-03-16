import React, { useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
      <ul className="nav-tabs list-style:none " style={{ background: "grey" }}>
        {categories.map((category) => (
          <li className={`mx-1 ${currentCategory === category && 'navActive'}`} key={category}>
            <span onClick={() => {
              setCurrentCategory(category);
            }}>
              {capitalizeFirstLetter(category)}
            </span>
          </li>
        ))}

      </ul>
  );
}

export default Nav;


// render() {
//   return <span className="menu navigation-menu">Menu</span>
// }