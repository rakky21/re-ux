import React, { useEffect } from "react";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <nav className="nav nav_container">
      {categories.map((category) => (
        <h3
          className={`${currentCategory === category && "navActive"}`}
          key={category}
        >
          <span
            onClick={() => {
              setCurrentCategory(category);
            }}
          >
            {" "}
            {capitalizeFirstLetter(category)}{" "}
          </span>
        </h3>
      ))}
    </nav>
  );
}

export default Nav;
