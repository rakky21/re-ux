import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <section
      className="nav navbar bg-info container-fluid"
      style={{
        background: "",
        float: "right"
      }}
    >
      {categories.map((category) => (
        <div
          className={`mx-1 container-fluid  ${currentCategory === category && "navActive"}`}
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
      ))}
    </section>
  );
}

export default Nav;
