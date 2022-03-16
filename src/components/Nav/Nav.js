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
    <div style={{ background: "grey" }} className="nav">
      <ul className="nav flex-column">
        {categories.map((category) => (
          <li className={`mx-1 ${currentCategory === category && 'navActive'}`} key={category}>
            <span onClick={() => {
              setCurrentCategory(category);
            }}>
              {capitalizeFirstLetter(category)}
            </span>
          </li>
        ))};

      </ul>
    </div>
  );
}

export default Nav;