import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <nav
      class="nav"
      style={{ background: "#6495ED" }}
    >
      {categories.map((category) => (
        <div className="nav-item">
          <div
            className={`mx-1 nav-link  ${
              currentCategory === category && "navActive"
            }`}
            key={category}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {capitalizeFirstLetter(category)}
            </span>
          </div>
        </div>
      ))}
    </nav>
  );
}

export default Nav;
